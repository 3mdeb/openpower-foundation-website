---
title: "IBM Announces New Open Source Contributions at OpenPOWER Summit Europe 2019"
date: "2020-01-22"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "openpower-foundation"
  - "opencapi"
  - "power-isa"
  - "oc-accel"
  - "capi-flashgt"
  - "open-source"
---

By: Mendy Furmanek, Director, OpenPOWER Processor Enablement, IBM and President, OpenPOWER Foundation

2019 was an important year for the OpenPOWER Foundation - especially the second half of the year. In the course of a few months, our ecosystem became even more open and the POWER architecture became more accessible to all.

In August, IBM made a major announcement at OpenPOWER Summit North America by [open-sourcing the POWER ISA](https://openpowerfoundation.org/the-next-step-in-the-openpower-foundation-journey/) as well as numerous key hardware reference designs. With these announcements, IBM became the only architecture with a stack that is entirely open system - from the foundation of the processor ISA through the software stack.

![IBM has a completely open system, from the processor ISA to the software stack.](images/IBM-1.png)

With exploding amounts of data involved in modern workloads, we believe that open source hardware and an innovative ecosystem is key for the industry. So to lead the industry forward in that direction, we’ve continued to make additional contributions to the open source community.

Then, I announced two new contributions at OpenPOWER Summit Europe in October, both dealing with CAPI FlashGT and OpenCAPI technology.

**CAPI FlashGT - Accelerated NVMe Controller FPGA IP**

![CAPI FlashGT](images/IBM-2.png)CAPI Flash has already been available, but our open-sourcing of the FlashGT component makes the entire CAPI Flash stack completely open.

Each time an application runs a system call to the operating system, it adds latency - time and overhead in the kernel stack. FlashGT takes a portion of that process and moves it from software to hardware, so much of the kernel instructions and interface is not needed in the software stack. The end result is a faster and more efficient process - lower latency, higher bandwidth.

With a reduction of instructions running on the CPU / core, there can be a dramatic increase in CPU offload. Initial performance testing shows significant improvements:

- 6x 4k random read IOPs per core
- 2.5x 4k random write IOPs per core

More information on [CAPI FlashGT can be found here.](https://github.com/open-power/capi2-flashgt)

**OpenCAPI Acceleration Framework (OC-Accel)**

OC-Accel is the Integrated Development Environment (IDE) for creating application FPGA-based accelerators. Put simply, it enables virtual memory sharing among processors and OpenCAPI devices.

![OpenCAPI Acceleration Framework (OC-Accel)](images/IBM-3.png)

Numerous layers of logic are needed to create an OpenCAPI device, including physical, data link and transportation layers. These have been available previously. But our open-sourcing of the OC-Accel bridge makes everything needed for an OpenCAPI device available today.

![OpenCAPI Acceleration Framework (OC-Accel)](images/IBM-4.png)

OC-Accel includes:

- Hardware logic to hide the details of TLX protocol
- Software libraries for application code to communicate with
- Scripts and strategies to construct an FPGA project
- Simulation environment
- Workflow for coding, debugging, implementation and deployment
- High level synthesis support
- Examples and documents to get started

More information on [OC-Accel can be found here](https://github.com/OpenCAPI/oc-accel). 

Now in 2020, we are still at the beginning of our open source journey. When we look at the world today, we know that the only way for the industry to succeed is through open collaboration - a rising tide lifts all boats, as the saying goes. We’re proud to be part of the movement that is enabling the ecosystem to innovate more quickly with our IP and making great strides in computing. Thank you for being a part of the movement with us!

Please view my full session from OpenPOWER Summit Europe 2019 below.

<iframe src="https://www.youtube.com/embed/ufBtrGJVF6g" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
