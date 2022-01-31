---
title: "OpenPOWER Makes FPGA Acceleration a “SNAP”"
date: "2016-10-27"
categories: 
  - "capi-series"
  - "blogs"
tags: 
  - "featured"
---

_By Bruce Wile, CAPI Chief Engineer and Distinguished Engineer, IBM_

## Improving on the CAPI Base Technology

In the datacenter, metrics matter.  Competition between application providers is fierce, with pressure to provide benchmarks that show continued competitive advantages in performance, price, and power.  Application level improvements rode the Moore’s law performance improvement curve for decades, and now require accelerator innovations to deliver the performance gains needed to maintain current clients and win new business.  FPGA acceleration has long been an option, but the difficult programming model and specialized computer engineering skills hindered FPGAs in mainstream datacenters.

The biggest companies see this trend and have put significant resources into FPGA integration into the datacenter. But enabling FPGA acceleration for the masses has been a challenge. OpenPOWER’s Acceleration Workgroup is changing that.

![capi-snap-neo4j-tile](images/CAPI-SNAP-Neo4j-Tile-1024x512.png)

The [CAPI](http://ibm.biz/powercapi) infrastructure, introduced on POWER8 in 2014, provides the technology and ecosystem foundation to enable datacenter applications to integrate with FPGA acceleration.  The technology base has everything needed to support the datacenter—virtualization (for multiple simultaneous context calls), a threaded model (for programming ease), removal of the device driver overhead (performance enablement), and an open ecosystem (for the masses to build upon).

As a result, FPGA experts around the world created CAPI accelerators, many of which are listed at [ibm.biz/powercapi\_examples](http://ibm.biz/powercapi_examples). These are creative, compelling acceleration algorithms that open doors to capabilities previously beyond reach.

\[caption id="attachment\_4243" align="aligncenter" width="320"\]![faces](images/Faces.gif) Check out “Facial analysis for emotion detection” (ibm.biz/powercapi\_SS\_emotionDetect) from SiliconScapes for a slick example.\[/caption\]

But there’s still a skills gap between the FPGA experts (computer engineers) and the programming experts working for most Independent Software Vendors (ISVs).  For FPGAs to deliver on their promise of higher performance at lower cost and lower power, we need further enablement for ISVs to embrace FPGA acceleration.

“Extending the capability of the CAPI device will offer our engineers and ultimately our users with more options for working efficiently with complex connected data,” explains Philip Rathle, VP of Products at OpenPOWER member Neo4j.

## Accelerating Acceleration

Enter OpenPOWER and the Accelerator Workgroup.  At April 2016’s OpenPOWER Summit, multiple companies agreed to create a framework around CAPI. Two significant directives drove the work effort that followed:

1. The framework would make it easy for programmers to call accelerators and write their own acceleration IP.
2. The framework would be open source to enable continued enhancements and cross company collaboration.

Collaboration grew for building the framework, with significant contributions from IBM, Xilinx, Rackspace, Eiditicom, Reconfigure.io, Alpha-Data, and Nallatech.  Each company brought unique skills and perspectives to the effort, with a common goal of releasing the first version of the open source framework by the end of 2016.

![capi-snap-levyx-tile](images/CAPI-SNAP-Levyx-Tile-1024x512.png)

## Bringing Developers CAPI in a SNAP!

Today, at [OpenPOWER Summit Europe](https://openpowerfoundation.org/openpower-summit-europe/), we are announcing the CAPI Storage, Networking, and Acceleration Programming Framework, or CAPI SNAP Framework.  The framework fulfills the initial visions of the team, and will grow beyond the first release.  Upon release, the framework, including source code, will be available for anyone to try via github.

The framework is key for developers or anyone else looking to bring the power of FPGA acceleration to their data center. CAPI SNAP will:

- Make it easy for developers to create new specialized algorithms for FPGA acceleration in high-level programming languages, like C++ and Go, instead of less user-friendly languages like VHDL and Verilog.
- Make FPGA acceleration more accessible to ISVs and other organizations to bring faster data analysis to their users.
- Leverage the OpenPOWER Foundation ecosystem to continually drive collaborative innovation.

Levyx Chief Business Development Officer Bernie Wu already sees how CAPI SNAP can make an impact for the ISV. “Levyx is focused on accelerating Big Data Analytical and Transactional Operations to real-time velocities. The CAPI SNAP Framework will allow us to bring processing even closer to the data and simplify the programming model for this acceleration,” adding “we see the CAPI SNAP capability being used to initially boost or enable rich real-time analytics and stream processing in variety of increasingly Machine to Machine driven use cases.”

## Learn More and Try CAPI SNAP for Yourself!

For those interested in the CAPI SNAP Framework, we encourage you to watch for announcements at the OpenPOWER Summit Europe.  You can also read more about CAPI and its capabilities in the accelerated enterprise in our [CAPI series on the OpenPOWER Foundation blog](https://openpowerfoundation.org/blogs/capi-drives-business-performance/).

Are you looking to explore CAPI SNAP for your organization’s own data analysis? Then apply to be an early adopter of CAPI SNAP by emailing us directly at [capi@us.ibm.com](mailto:capi@us.ibm.com). Be sure to include your name, organization, and the type of accelerated workloads you’d like to explore with CAPI SNAP.

You will continue to see a drumbeat of activity around the framework, as we release the source code and add more and more capabilities in 2017.

## **Additional CAPI SNAP Reading from OpenPOWER Members**

Alpha-Data: [http://www.alpha-data.com/news.php](http://www.alpha-data.com/news.php)
