---
title: "Accelerating Business Applications in the Data-Driven Enterprise with CAPI"
date: "2015-09-10"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "power"
  - "featured"
  - "capi"
  - "acceleration"
  - "fpga"
  - "performance"
  - "capi-series"
---

_By Sumit Gupta, VP, HPC & OpenPOWER Operations at IBM_ _This blog is part of a series:_ _[Pt 2: Using CAPI and Flash for larger, faster NoSQL and analytics](https://openpowerfoundation.org/blogs/capi-and-flash-for-larger-faster-nosql-and-analytics/)_ _[Pt 3: Interconnect Your Future with Mellanox 100Gb EDR Interconnects and CAPI](https://openpowerfoundation.org/blogs/interconnect-your-future-mellanox-100gb-edr-capi-infiniband-and-interconnects/)_ _[Pt 4: Accelerating Key-value Stores (KVS) with FPGAs and OpenPOWER](https://openpowerfoundation.org/blogs/accelerating-key-value-stores-kvs-with-fpgas-and-openpower/)_

Every 48 hours, the world generates as much data as it did from the beginning of recorded history through 2003.

The monumental increase in the flow of data represents an untapped source of insight for data-driven enterprises, and drives increasing pressure on computing systems to endure and analyze it. But today, just raising processor speeds isn't enough. The data-driven economy demands a computing model that delivers equally data-driven insights and breakthroughs at the speed the market demands.

[![CAPI Logo](images/CAPITechnology_Color_Gradient_Stacked_-300x182.png)](http://ibm.co/1MVbP5d)OpenPOWER architecture includes a technology called Coherent Accelerator Processor Interface (CAPI) that enables systems to crunch through the high volume of data by bringing compute and data closer together. CAPI is an interface that enables close integration of devices with the POWER CPU and gives coherent access to system memory. CAPI allows system architects to deploy acceleration in novel ways for an application and allow them to rethink traditional system designs.

\[caption id="attachment\_1982" align="aligncenter" width="625"\][![CAPI-attached vs. traditional acceleration](images/IBMNR_OPF_CAPI_BlogPost1_Image-02-1024x531.jpg)](http://ibm.co/1MVbP5d) CAPI allows attached accelerators to deeply integrate with POWER CPUs\[/caption\]

CAPI-attached acceleration has three pillars: accelerated computing, accelerated storage, and accelerated networking. Connected coherently to a POWER CPU to give them direct access to the CPU’s system memory, these techniques leverage accelerators like FPGAs and GPUs, storage devices like flash, and networking devices like Infiniband.   These devices, connected via CAPI, are programmable using simple library calls that enable developers to modify their applications to more easily take advantage of accelerators, storage, and networking devices. The CAPI interface is available to members of the OpenPOWER foundation and other interested developers, and enables a rich ecosystem of data center technology providers to integrate tightly with POWER CPUs to accelerate applications.

## **What can CAPI do?**

CAPI has had an immediate effect in all kinds of industries and for all kinds of clients:

- **[Healthcare](http://bit.ly/1WiV6KD):** Create customized cancer treatment plans personalized to an individual’s unique genetic make-up.
- **Image and video processing:** Facial expression recognition that allows retailers to analyze the facial reactions their shoppers have to their products.
- [**Database acceleration and fast storage**](http://www-01.ibm.com/common/ssi/cgi-bin/ssialias?infotype=PM&subtype=SP&htmlfid=POS03135USEN&appname=TAB_2_2_Appname#loaded)**:** accelerate the performance of flash storage to allow users to search databases in near real-time for a fraction of the cost.
- **[Risk Analysis in Finance](http://bit.ly/1N7UQMY):** Allow financial firms to monitor their risk in real-time with greater accuracy.

## **The CAPI Advantage**

CAPI can be used to:

- **Accelerate Compute** by leveraging a CAPI-attached FPGA to run, for example, Monte Carlo analysis or perform Vision Processing. The access to the IBM POWER CPU’s memory address space is a programmer's dream.
- **Accelerate Storage** by using CAPI to attach flash that can be written to as a massive memory space instead of storage---a process that slashes latency compared to traditional storage IO.
- **Accelerate Networking** by deploying CAPI-attached network accelerators for faster, lower latency edge-of-network analytics.

The intelligent and close integration enabled by CAPI with IBM POWER CPUs removes much of the latency associated with the I/O bus on other platforms (PCI-E). It also makes the accelerator a peer to the POWER CPU cores, allowing it to access the accelerator natively.  Consequently, a very small investment can help your system perform better than ever.

https://www.youtube.com/watch?v=h1SE48\_aHRo

## **Supported by the OpenPOWER Foundation Community**

We often see breakthroughs when businesses open their products to developers, inviting them to innovate. To this end IBM helped create the OpenPOWER Foundation, now with 150 members, dedicated to innovating around the POWER CPU architecture.

IBM and many of our Foundation partners are committed to developing unique, differentiated solutions leveraging CAPI. Many more general and industry-specific solutions are on the horizon. By bringing together brilliant minds from our community of innovators, the possibilities for customers utilizing CAPI technology are endless.

## **Get Started with CAPI**

Getting started with CAPI is easy, and our goal is to provide you with the resources you need to begin. This living list will continue to evolve as we provide you with more guidance, information, and use cases, so keep coming back to be sure you can stay up to date.

1. Learn more about CAPI:
    - [Coherent Accelerator Processor Interface (CAPI) for POWER8 Systems](http://ibm.co/1MVbP5d)
2. Get the developer kits:
    - [Alpha Data CAPI Developer Kit](http://bit.ly/1F1hzqW)
    - [Nallatech CAPI Developer Kit](http://bit.ly/1OieWTK)
3. Get support for your solutions and share results with your peers on the [CAPI Developer Community](http://ibm.co/1XSQtZC)

Along the way reach out to us on [Twitter](https://twitter.com/OpenPOWERorg), [Facebook](https://www.facebook.com/openpower?fref=ts), and [LinkedIn](https://www.linkedin.com/grp/home?gid=7460635).

_This blog is part of a series:_ _[Pt 2: Using CAPI and Flash for larger, faster NoSQL and analytics](https://openpowerfoundation.org/blogs/capi-and-flash-for-larger-faster-nosql-and-analytics/)_ _[Pt 3: Interconnect Your Future with Mellanox 100Gb EDR Interconnects and CAPI](https://openpowerfoundation.org/blogs/interconnect-your-future-mellanox-100gb-edr-capi-infiniband-and-interconnects/)_ _[Pt 4: Accelerating Key-value Stores (KVS) with FPGAs and OpenPOWER](https://openpowerfoundation.org/blogs/accelerating-key-value-stores-kvs-with-fpgas-and-openpower/)_

* * *

**_[![Sumit Gupta](images/sumit-headshot.png)](https://openpowerfoundation.org/wp-content/uploads/2015/09/sumit-headshot.png)About Sumit Gupta_**

_Sumit Gupta is Vice President, High Performance Computing (HPC) Business Line Executive and OpenPOWER Operations. With more than 20 years of experience, Sumit is a recognized industry expert in the fields of HPC and enterprise data center computing. He is responsible for business management of IBM's HPC business and for operations of IBM's OpenPOWER initiative._
