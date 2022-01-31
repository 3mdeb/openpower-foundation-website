---
title: "A Deep Dive into A2I and A2O"
date: "2020-12-21"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "power"
  - "openpower-foundation"
  - "open-source"
  - "a2i"
  - "a2o"
  - "open-hardware"
  - "developer-community"
  - "isa"
  - "power-processor-core"
---

**By [Abhishek Jadhav,](https://www.linkedin.com/in/abhishek-jadhav-60b30060/) Lead Open Hardware Developer Community (India) and Freelance Tech Journalist**

After the opening of the [POWER instruction set architecture (ISA)](https://newsroom.ibm.com/2019-08-21-IBM-Demonstrates-Commitment-to-Open-Hardware-Movement) last August, there have been many developments from IBM and its community. 

Some major contributions include OpenPOWER’s A2I and A2O POWER processor core. 

The OpenPOWER Foundation, which is under the umbrella of the Linux Foundation, works on the advocacy of POWER Instruction Set Architecture and its usage in the industry. 

## **What is A2I the core?**

[A2I core](https://github.com/openpower-cores/a2i/blob/master/rel/doc/A2_BGQ.pdf) was created as a high-frequency four-threaded design, optimized for throughput and targeted for 3 GHz in 45nm technology. It was created to provide high streaming throughput, balancing performance and power.

_![](images/IB1-1024x680.png)_

_“With a strong foundation of the open POWER ISA and now the A2I core, the open source hardware movement is poised to accelerate faster than ever,” said James Kulina, Executive Director, OpenPOWER Foundation._

A2I was developed as a processor for customization and embedded use in system-on-chip (SoC) devices, however, it's not limited to that— it can be seen in supercomputers with appropriate accelerators. There is a diverse range of applications associated with the core including streaming, network processing, data analysis. 

We have an [Open Hardware Developer Community](https://www.linkedin.com/groups/12431698/) and contributors across India working on A2I in multiple use cases. where there has been an increasing contribution from the open source community. 

If you want a headstart on A2I core, check out this short [tutorial](https://github.com/openpower-cores/a2i/blob/master/rel/doc/a2_build_video.md) on how to get started. 

## **The launch of A2O**

A couple of months after the A2I core’s release at [OpenPOWER Summit 2020](https://events.linuxfoundation.org/openpower-summit-north-america/), the OpenPOWER Foundation announced the A2O POWER processor core, an out-of-order follow-up to the A2I core. The A2O processor core is now open-source as a POWER ISA core for embedded use in SoC designs. The A2O offers better single-threaded performance, supports PowerISA 2.07, and has a modular design.

![](images/IMB2-1024x575.png)

Potential A2O POWER processor core applications include artificial intelligence, autonomous driving, and secure computing. 

If you want to get started with A2O POWER processor core, watch this short [tutorial](https://github.com/openpower-cores/a2o/blob/master/rel/doc/a2_build_video.md). 

The A2O reference manual is available [here](https://github.com/openpower-cores/a2o/blob/master/rel/doc/A2O_UM.pdf). 

 

Join the [Open Hardware Developer Community](https://www.linkedin.com/groups/12431698/) to engage in exciting projects on A2I and A2O processor core. 

_Source: All the images were taken from the_ [_Github Repo_](https://github.com/openpower-cores/a2i/tree/master/rel/doc) _and_ [_OpenPOWER Summit North America 2020_](https://openpowerna2020.sched.com/event/eOyb/ibm-open-sources-the-a2o-core-bill-flynn-ibm)_._
