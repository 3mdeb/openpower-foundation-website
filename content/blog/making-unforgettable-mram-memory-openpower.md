---
title: "Making Unforgettable MRAM Memory with OpenPOWER"
date: "2016-10-25"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Adam McPadden, Lead Engineer, Burlington Systems Lab, IBM_

One of the key tenets of the OpenPOWER Foundation’s collaborative model is that having open systems and published interfaces allows people to create innovative architectures at all different areas of the system, including ones where there hasn't been much change in decades like memory.

In validation of this approach, OpenPOWER members IBM, and Everspin have demonstrated a new way for OpenPOWER members to improve application performance with STT-MRAM on the memory bus of a POWER8 server.

STT-MRAM is included within a broad memory classification commonly referred to as Storage Class Memory (SCM) whose performance attributes lie between traditional main memory DRAM and FLASH Storage while offering the benefit of non-volatility, retaining their data without power. Typically, applications cannot process data until it is loaded into memory from storage, causing a performance bottleneck.  With SCM, this is not necessary, the data always stays in memory resulting in much faster application performance. Various types of SCM offer benefits over traditional memory.  STT-MRAM offers non-volatility at DRAM-like speeds with endurance 10^6 better than NAND FLASH, while PCM and ReRAM offer higher capacity than DRAM and faster speeds than FLASH.

SCM technologies, such as PCM, ReRAM and STT-MRAM, have been around for many years with the promise of faster system performance achievable by having non-volatility on the memory bus.  Unfortunately, due to scaling challenges and complex materials, scalable production volume SCM  has been slow to develop..

IBM, long realizing the performance potential of systems with SCM, dedicated teams of engineers and scientists from IBM Research and the Systems Development Lab to enable these new memory technologies in the POWER system architecture over the past two years, opening up a new opportunity for the OpenPOWER community to innovate with production level SCM technology as a viable media leveraging attach points such as CAPI, OpenCAPI and NVMe. SCM technologies will now allow OpenPOWER Foundation members the ability to combine high performance media with low latency and high bandwidth interfaces on the POWER architecture to achieve performance benefits beyond traditional FLASH.

"New advanced memory technologies will have a disruptive impact on the industry.  This demonstration of MRAM in a POWER8 server running real applications is a great example of what OpenPOWER is all about - creating opportunities for industry partners to innovate and enabling choice in the market," explains Steve Fields, IBM Fellow and Chief Engineer of POWER systems.

\[caption id="attachment\_4248" align="aligncenter" width="261"\]![Figure 1: IBM's Con Tutto Platform](images/con-tutto-1-261x300.png) Figure 1: IBM's Con Tutto Platform\[/caption\]

## Driving Memory Performance with Con Tutto

Enabling new memory technologies required IBM and its partners to develop a prototyping platform which would allow non-DRAM technologies to run at full bus speeds in their POWER8 server. This platform, named Con Tutto, combines FPGA flexibility with at-speed memory bus compatibility. The Con Tutto card allows POWER8 users to develop the software stack necessary for persistent memory support and better understand the system level characteristics associated with various SCM technologies today.

\[caption id="attachment\_4249" align="aligncenter" width="625"\]![Figure 2: Storage Class Memory Latency](images/con-tutto-2-1024x575.png) Figure 2: Storage Class Memory Latency\[/caption\]

High performance technologies such as STT-MRAM on the system memory bus offer a low latency attach point for applications to leverage persistent memory with direct access (DAX) from the application.  The performance value of SCM in a server depends heavily on the technology and implementation specifics.  Leveraging the Con Tutto card with STT-MRAM, in-system test results show up to 97% lower latency and 20X higher bandwidth when compared to a current generation FLASH NVMe card, and we are working to make this even faster.

## Accelerating Applications with Unforgettable Memory

IBM has partnered with Everspin Technologies to demonstrate their first production level pMTJ (Perpendicular Magnetic Tunnel Junction) STT-MRAM chips in a high performance S824L server seen in Figure 3, leveraging the lower power, higher performance offered by this architecture.

\[caption id="attachment\_4251" align="aligncenter" width="300"\]![Figure 3: IBM S824L Server running STT_MRAM on the Memory Bus](images/Con-Tutto-4-300x222.png) Figure 3: IBM S824L Server running STT\_MRAM on the Memory Bus\[/caption\]

While this STT-MRAM solution is in production, its capacity to date has limited broad usage to applications which need the benefits of non-volatility, high performance but do not need high capacity (write caching, journaling, etc).  The announcement of a 1Gb chip by Everspin will improve the viability for broader use cases.  SCM technologies such as ReRAM, PCM and others will expand the application value proposition of persistent memory as they become mature.

## Learn More at OpenPOWER Summit Europe in Barcelona

IBM and Everspin will be showcasing this new solution in an application demo at the OpenPOWER Summit Europe, building on a previous demo shown at the 2016 OpenPOWER Summit in San Jose, CA, where IBM engineers and scientists were the first to demonstrate production level STT-MRAM on the memory bus of a POWER8 server using IBM’s DMI (Differential Memory Interface) bus.  In the demo, you’ll see the performance benefits of combining a high performance SCM and a low latency bus on key business applications.

You can also learn more about Con Tutto by visiting these links on the OpenPOWER Foundation:

- **[https://openpowerfoundation.org/presentations/contutto/](https://openpowerfoundation.org/presentations/contutto/)**
- [**https://openpowerfoundation.org/presentations/programmable-near-memory-acceleration-on-contutto/**](https://openpowerfoundation.org/presentations/programmable-near-memory-acceleration-on-contutto/)
