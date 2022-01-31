---
title: "IBM’s First OpenPOWER Server Targets HPC Workloads"
date: "2015-03-20"
categories: 
  - "press-releases"
  - "blogs"
---

The first annual OpenPOWER Summit, held this week in San Jose, Calif., in tandem with NVIDIA’s GPU Technology Conference (GTC), launched a raft of hardware and other announcements intended to cede market share from Intel. On Wednesday, foundation members showed off more than a dozen hardware solutions, an assortment of systems, boards, and cards, and even a new microprocessor customized for China. Much of the gear is targeted at hyperscale datacenters, where x86 reigns supreme, but there was something for the HPC space too.

Included in the lot proudly displayed at the front of the packed conference room were the world’s first non-IBM branded OpenPOWER commercial server from Tyan; a prototype of Firestone, IBM’s first OpenPOWER server and great exascale hope; and the first GPU-accelerated OpenPOWER developer platform, the Cirrascale RM4950. Yes, that’s a lot of firsts, and it’s a pretty impressive lineup for an organization that is just entering its second year.

Incorporated in December 2013 by IBM, NVIDIA, Mellanox, Google and Tyan, the foundation has expanded to more than 110 businesses, organizations and individuals spanning 22 countries. Innovations being pursued by OpenPOWER members include custom systems for large or warehouse scale datacenters, workload acceleration through GPU, FPGA or advanced I/O, platform optimization for SW appliances, and advanced hardware technology exploitation.

The OpenPOWER architecture includes SOC design, bus specifications, reference designs, and well as open source firmware, operating system, and server virtualization hypervisor (POWER8 variant of KVM). Little Endian Linux is being used to facilitate software migration to POWER. Such features were covered during the Wednesday keynotes and discussed inside the numerous OpenPOWER-themed sessions.

The first HPC-oriented OpenPOWER play is the IBM Power8 server, codenamed Firestone. Due out later this year, the server is manufactured by Taiwan’s Wistron, sold by IBM, and combines the technologies of NVIDIA and Mellanox.

“The prototype of IBM’s system revealed today is the first in a series of new high-density Tesla GPU-accelerated servers for OpenPOWER high-performance computing and data analytics,” commented Sumit Gupta, general manager of accelerated computing at NVIDIA.

Firestone already has a lot riding on it. Speaking on Wednesday of the company’s technical computing roadmap, Brad McCredie, president of OpenPOWER and an IBM fellow, said that IBM provided the U.S. Department of Energy with a Firestone motherboard to support development of the CORAL machines, Summit and Sierra. The 2017-era supercomputers are expected to be five to 10 times faster than their predecessors and will use POWER9 chips in tandem with multiple NVIDIA Tesla Volta GPUs.

John Ashley, senior IBM software developer relations manager at NVIDIA, spoke about his company’s role in the collaboration.

“One of the things we really believe in is heterogeneous computing,” he said. “The GPU is not the best processor for every task. There are things GPUs aren’t good at. It happens to be the case that those things we \[at NVIDIA\] are not so good at, POWER processors are great at. The POWER processor is among the fastest, most capable serial processors on the planet and it’s only getting better, so being able to put those two things together seems like a really natural fit and so that’s a big part of why this event is here at GTC.”

[![Cabot OpenPOWER Intertwined Technology Trends data-centric](images/Cabot-OpenPOWER-Intertwined-Technology-Trends-data-centric.png)](http://6lli539m39y3hpkelqsm3c2fg.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/Cabot-OpenPOWER-Intertwined-Technology-Trends-data-centric.png)Hyperscale and cloud datacenters may be the most prominent target for OpenPOWER products but IBM wants it known that there is much value here for high performance computing (HPC) clients as well. A [position paper](http://www-01.ibm.com/common/ssi/cgi-bin/ssialias?subtype=WH&infotype=SA&appname=STGE_PO_PO_USEN&htmlfid=POL03229USEN&attachment=POL03229USEN.PDF#loaded&cmp=ibmsocial&ct=stg&cr=sc&cm=h&ccy=us) undertaken by Srini Chari, Ph.D., MBA, managing partner of Cabot Partners, at the behest of IBM, titled Crossing the Performance Chasm with OpenPOWER, looks at the performance resulting from OpenPOWER-designed IBM POWER8 solutions versus x86 platforms with Intel chips. Both traditional HPC and newer data intensive analytics workflows are examined.

Called into question are compute-intensive benchmarks, like LINPACK, which are deemed to be increasingly inadequate for guiding HPC purchasing decisions. “It is clear,” states the author, “that the performance of most practical HPC applications also depend on memory, I/O and network and not exclusively on Flops/core and the number of cores.”

The figure below illustrates early results of standard benchmarks that are good indicators of data-centric HPC performance:

[![OpenPOWER POWER8 position paper data-centric fig8](images/OpenPOWER-POWER8-position-paper-data-centric-fig8.png)](http://6lli539m39y3hpkelqsm3c2fg.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/OpenPOWER-POWER8-position-paper-data-centric-fig8.png)

This figure summarizes some well-known application benchmarks across various sectors:

[![OpenPOWER POWER8 position paper fig9](images/OpenPOWER-POWER8-position-paper-fig9.png)](http://6lli539m39y3hpkelqsm3c2fg.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/OpenPOWER-POWER8-position-paper-fig9.png)

What makes these kinds of performance enhancements possible? When it comes to HPC workloads, here is a list of the most significant features of IBM Power systems based on POWER8, according to the report:

1. Massive Threads: Each POWER8 core is capable of handling eight hardware threads simultaneously for a total of 96 threads executed simultaneously on a 12-core chip.
2. Large Memory Bandwidth: Very large amounts of on- and off-chip eDRAM caches and on-chip memory controllers enable very high bandwidth to memory and system I/O.
3. High performance processor: POWER8 is capable of clock speeds around 4.15GHz, with a Thermal Design Power (TDP) in the neighborhood of 250 watts.
4. Excellent RAS: Many studies (e.g., [here](http://public.dhe.ibm.com/common/ssi/ecm/en/pol03161usen/POL03161USEN.PDF) and [here](http://www.ibm.com/systems/power/solutions/assets/bigdata-analytics.html)) across a range of enterprises have indicated that IBM Power Systems perform better than x86 systems in Reliability, Availability and Serviceability (RAS), performance, TCO, security and overall satisfaction.

5. Coherent Accelerator Processor Interface (CAPI): CAPI, a direct link into the CPU, allows peripherals and coprocessors to communicate directly with the CPU, substantially bypassing operating system and driver overheads. IBM has developed CAPI to be open to third party vendors and even offers design enablement kits. In the case of flash memory attached via CAPI, the overhead is reduced by a factor of 24:1. More importantly though, CAPI can be used to attach accelerators like FPGAs — directly to the POWER8 CPU for significant workload-specific performance boosts.
6. Open partner ecosystem with the OpenPOWER Foundation.

[![GTC15 POWER8 processor](images/GTC15-POWER8-processor.png)](http://6lli539m39y3hpkelqsm3c2fg.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/GTC15-POWER8-processor.png)
