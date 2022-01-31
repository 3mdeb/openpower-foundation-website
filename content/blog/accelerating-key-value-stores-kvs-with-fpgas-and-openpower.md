---
title: "Accelerating Key-value Stores (KVS) with FPGAs and OpenPOWER"
date: "2015-11-13"
categories: 
  - "blogs"
tags: 
  - "capi"
  - "fpga"
  - "xilinx"
  - "kvs"
---

_By Michaela Blott, Principal Engineer, Xilinx Research_

First, a bit of background-- I lead a research team in the European headquarters of Xilinx where we look into FPGA-based solutions for data centers. We experiment with the most advanced platforms and tool flows, hence our interest in OpenPOWER. If you haven't worked with an FPGA yet, it’s a fully programmable piece of silicon that allows you to create the perfect hardware circuit for your application thereby achieving best-in-class performance through customized data-flow architectures, as well as substantial power savings.  That means we can investigate how to make data center applications faster, smarter and greener while scrutinizing silicon features and tools flows. Our first application deep-dive was, and still is, key-value stores.

Key-value stores (KVS) are a fundamental part of today’s data center functionality. Facebook, Twitter, YouTube, flickr and many others use key-value stores to implement a tier of distributed caches for their web content to alleviate access bottlenecks on relational databases that don’t scale well. Up to 30% of data center servers implement key-value stores. But data centers are hitting a wall with performance requirements that drive trade-offs between high DRAM costs (in-memory KVS), bandwidth, and latency.

We’ve been investigating KVS stores such as memcached since 2013 \[1,2\]. Initially the focus was on pure acceleration and power reduction. Our work demonstrated a substantial 35x performance/power versus the fastest x86 results published at the time. The trick was to completely transform the multithreaded software implementation into a data-flow architecture inside an FPGA as shown below.

\[caption id="attachment\_2117" align="aligncenter" width="693"\]![Fig 1](images/Fig-1.jpg) Figure 1: 10Gbps memcached with FPGAs\[/caption\]

However, there were a number of limitations: First, we were not happy with the constrained amount of DRAM that can be attached to an FPGA -- capacity is really important in the KVS context. Secondly, we were concerned about supporting more functionality.   For example, for protocols like Redis with its 200 commands, things can get complicated. Thirdly, we worried about ease-of-use, which is a typical adoption barrier for FPGAs. Finally, things become even more interesting once you add intelligence on top of your data: data analytics, object recognition, encryption, you name it. For this we really need a combination of compute resources that coherently shares memory. That’s exactly why OpenPOWER presented a unique and most timely opportunity to experiment with coherent interfaces.

**Benchmarking CAPI**

CAPI, the Coherent Accelerator Processor Interface, enables high performance and simple programming models for attaching FPGAs to POWER8 systems. First, we benchmarked PCI-E and CAPI acceleration against x86 in-memory models to determine the latency of PCI-E and CAPI. The results are explained below:

\[caption id="attachment\_2118" align="aligncenter" width="619"\]![Figure2_new](images/Figure2_new.jpg) Figure 2: System level latency OpenPower with FPGA vs x86\[/caption\]

**Latency**

PCI-E DMA Engines and CAPI perform significantly better than typical x86 implementations. At 1.45 microseconds, CAPI operations are so low-latency that overall system-level impact is next to negligible.  Typical x86 installations service memcached requests within a range of 100s to 1000s of microseconds. Our OpenPower CAPI installation services the same requests in 3 to 5 microseconds, as illustrated in Figure 2 (which uses a logarithmic scale).

\[caption id="attachment\_2119" align="aligncenter" width="698"\]![Figure3_new](images/Figure3_new.jpg) Figure 3: PCIe vs CAPI Bandwidth over transfer sizes\[/caption\]

**Bandwidth**

Figure 3 shows measured bandwidth vs. transfer size for CAPI in comparison to a generic PCIe DMA. The numbers shown are actual measurements \[4\] and are representative in that PCIe performance is typically very low for small transfer sizes and next to optimal for large transfer sizes. So for small granular access, CAPI far outperforms PCIe. Because of this, CAPI provides a perfect fit for the small transfer sizes as required in the KVS scenario. For implementing object storage in host memory, we are really only interested in using CAPI in the range of transfer sizes of 128 bytes to 1kbyte. Smaller objects can be easily accommodated in FPGA-attached DRAM; larger objects can be accommodated in Flash (see also our HotStorage 2015 publication \[3\]).

**FPGA Design**

Given the promising benchmarking results, we proceeded to integrate the host memory via CAPI. For this we created a hybrid memory controller which routes and merges requests and responses between the various storage types, handles reordering, and provides a gearbox for varying access speeds and bandwidths. With these simple changes, we now have up to 1 Terabyte of coherent memory space at our disposal without loss of performance! Figure 4 shows the full implementation inside the FPGA.

\[caption id="attachment\_2120" align="aligncenter" width="748"\]![Figure4](images/Figure4.jpg) Figure 4: Memcached Implementation with OpenPower and FPGA\[/caption\]

**Ease of Use**

Our next biggest concern was ease of use for both FPGA design entry as well as with respect to host–accelerator integration. In regards to the latter, OpenPOWER exceeded our expectations. Using the provided API from IBM (libcxl) as well as the POWER Service Layer IP that resides within the FPGA (PSL), we completed system integration within a matter of weeks while saving huge amounts of code: 800 lines of code to be precise for x86 driver, memory allocation, and pinning, and 13.5k fewer instructions executed!

Regarding the FPGA design, it was of utmost importance to ensure that it is possible to create a fully functional and high-performing design through a high-level design flow (C/C++ at minimum), in the first instance using Xilinx’s high-level synthesis tool, Vivado HLS. The good news was that we fully succeeded in doing this and the resulting application design was fully described in C/C++, achieving a 60% reduction in lines of code (11359 RTL vs 4069 HLS lines). The surprising bonus was that we even got a resource reduction – for FPGA-savvy readers: 22% in LUTs & 30% in FFs. And let me add, just in case you are wondering, the RTL designers were at the top of their class!

The only low-level aspects left in the design flow are the basic infrastructure IP, such as memory controllers and network interfaces, which are still manually integrated. In the future, this will be fully automated through SDAccel. In other words, a full development environment that requires no further RTL development is on the horizon.

**Results**

\[caption id="attachment\_2121" align="aligncenter" width="693"\]![Figure5](images/Figure5.jpg) Figure 5: Demonstration at the OpenPower Summit 2015\[/caption\]

We demonstrated the first operational prototype of this design at Impact in April 2014 and then demonstrated the fully operational demo vehicle (shown in Figure 5) including fully CAPI-enabled access to host memory at the OpenPOWER Summit in March 2015. The work is now fully integrated with [IBM’s SuperVessel](http://www.ptopenlab.com). In the live demonstration, the OpenPOWER system outperforms an x86 implementation by 20x (see Figure 6)!

\[caption id="attachment\_2122" align="aligncenter" width="625"\]![kvs_comparison](images/kvs_comparison-1024x577.jpg) Figure 6: Screenshot of network tester showing response traffic rates from OpenPower with FPGA acceleration versus x86 software solution\[/caption\]

**Summary**

The Xilinx demo architecture enables key-value stores that can operate at **60Gbps with 2TB value-store capacity** that fits within a 2U OpenPOWER Server. The architecture can be easily extended. We are actively investigating using Flash to expand value storage even further for large granular access. But most of all, we are really excited about the opportunities for this architecture when combining this basic functionality with new capabilities such as encryption, compression, data analytics, and face & object recognition!

**Getting Started**

- Visit [Xilinx at SC15](http://www.xilinx.com/about/events/sc15.html)! November 15-19, Austin, TX.
- Learn more about [POWER8 CAPI](http://www-304.ibm.com/webapp/set2/sas/f/capi/home.html)
- Purchase a CAPI developer kit from [Nallatech](http://www.nallatech.com/solutions/openpower-capi-developer-kit-for-power-8/) or [AlphaData](http://www.alpha-data.com/dcp/capi.php)
- License this technology through [Xilinx](http://www.xilinx.com/) today.  We work directly with customers and data centers to scale performance/watt in existing deployments with hardware based KVS accelerators. If you are interested in this technology, please contact us.

\==================================================================================

**References**

_\[1\] M.Blott, K.Vissers, K.Karras, L.Liu, Z. Istvan, G.Alonso: HotCloud 2013; Achieving 10Gbps line-rate key-value stores with FPGAs_

_\[2\] M.Blott, K. Vissers: HotChips’14; Dataflow Architectures for 10Gbps Line-rate Key-value-Stores._

_\[3\] M.Blott, K.Vissers, L.Liu: HotStorage 2015; Scaling out to a Single-Node 80Gbps Memcached Server with 40Terabytes of Memory_

_\[4\] PCIe bandwidth reference numbers were kindly provided by Noa Zilberman & Andrew Moore from Cambridge University_

* * *

**_About Michaela Blott_**

![Michaela Blott](images/Michaela-Blott.png)

Michaela Blott graduated from the University of Kaiserslautern in Germany. She worked in both research institutions (ETH and Bell Labs) as well as development organizations and was deeply involved in large scale international collaborations such as NetFPGA-10G. Today, she works as a principal engineer at the Xilinx labs in Dublin heading a team of international researchers, investigating reconfigurable computing for data centers and other new application domains. Her expertise includes data centers, high-speed networking, emerging memory technologies and distributed computing systems, with an emphasis on building complete implementations.
