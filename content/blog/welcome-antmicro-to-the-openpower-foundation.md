---
title: "Welcome Antmicro to the OpenPOWER Foundation"
date: "2020-07-21"
categories: 
  - "blogs"
tags: 
  - "fpga"
  - "openpower-foundation"
  - "power-isa"
  - "microwatt"
  - "risc-v"
  - "open-source-hardware"
  - "renode"
  - "antmicro"
  - "a2i"
  - "chips-alliance"
---

By: James Kulina Executive Director, OpenPOWER Foundation

This May, [Antmicro announced support for the POWER ISA in Renode](https://antmicro.com/blog/2020/05/microwatt-power-isa-in-renode/), its open source, multi-architecture, heterogeneous multi-core capable simulator for software development and software-hardware co-development.

It’s an exciting development, as developers can now test applications based on the POWER ISA before running them on actual hardware. It’s an important step in achieving the vision of the OpenPOWER Foundation - to make POWER the easiest architecture on which to go from an idea to a silicon chip.

I recently caught up with [Michael Gielda](https://www.linkedin.com/in/mgielda/?originalSubdomain=pl), VP of business development, to discuss Antmicro, its role in the OpenPOWER Foundation ecosystem and its beliefs on open source hardware in general.

![](images/Renode-OpenPOWER-1024x675.png)

**Can you tell us more about [Antmicro](https://antmicro.com/) and what your company does?**

Of course! Antmicro is a software-driven tech company developing modern computing solutions for our customers based on open source platforms and paradigms. We provide engineering services and strategic guidance across a broad range of open source hardware and software solutions that we actively create and contribute to, to meet the needs of clients who are looking for world-class, future-proof, modular and scalable systems.

Our work often involves building heterogeneous Cloud-to-Edge AI and vision processing systems, custom FPGA solutions, FPGA & ASIC development tooling etc. The broad range of open source technologies that Antmicro develops includes open source containerization, virtualization, device management, robotics, networking and AI libraries, operating systems, parsers, simulators, synthesis, place and route tools and more.

**What inspired Antmicro to join the OpenPOWER Foundation?**

We believe that the entire processing technology stack can benefit from becoming open source, and open ISAs are just a logical consequence of open source software and hardware that came before them.

In early 2010 we were one of the few companies using OpenRISC commercially, and then when RISC-V came along, we quickly became a Platinum Founding member and one of the first companies building real solutions using the architecture. CHIPS Alliance, where we also play a very active role, takes the vision of open silicon from “just” the ISA and cores to entire chips and related workflows, and when the POWER ISA became open source, given our strong belief in a vendor-neutral, multi-solution ecosystem that is needed to make open hardware a reality, it was only a matter of time for us to join OpenPOWER.

The immediate stimulus for joining was related to our work in the FPGA softcore space and implementing support for the POWER ISA and Microwatt in Renode - our open source simulation framework for software and hardware co-development. We strongly believe that POWER has a role to play in the server space and other use cases, and providing open source implementations like [Microwatt](https://openpowerfoundation.org/openpower-summit-north-america-2019-introducing-the-microwatt-fpga-soft-cpu-core/) and more recently [A2I](https://openpowerfoundation.org/a2i-power-processor-core-contributed-to-openpower-community-to-advance-open-hardware-collaboration/) are incredibly important for driving a collaborative ecosystem.

**What do you hope to contribute and gain as a member?**

Our aims and ambitions are aligned with the efforts of RISC-V International, CHIPS Alliance and OpenPOWER Foundation to create an open hardware ecosystem with robust tools and workflows for software-driven chips development. We hope to be able to leverage our work with RISC-V and CHIPS to bring the SoC generators, FPGA IP, simulation, open source FPGA and ASIC design tools to the POWER space, and at the same time find partners and customers who want to build complete solutions on the POWER ISA and could use our open source software and hardware expertise and the broad pool of open source platforms that we develop and contribute to.

We believe the OpenPOWER Foundation will be a key player in building an open source future of server platforms, which are a key element of our open source cloud-to-edge AI vision; we’re happy to be part of the group that will make it happen.

**Can you tell us about your most recent announcement related to the Renode framework?**

Renode is our open source simulation framework that speeds up embedded and IoT systems development and hardware / software co-development with its testing, CI and debugging functionalities. It has lately reached an important milestone with the 1.9 release which, among other things, comes with POWER ISA and Microwatt support. Thus, POWER has become the 2nd major open architecture in Renode’s portfolio after RISC-V - a development that confirms Renode as a truly multi-architecture simulator.

The new release also brings a range of improvements all across the board, including better co-simulation capabilities, packaging, new platforms for both Arm, RISC-V and the afore-mentioned POWER, as well as some new and exciting use cases such as testing and benchmarking MCU-oriented machine learning software in a recent collaboration with Google’s TensorFlow Lite team.

**What are your views on the future of open source architecture?**

We envision the future of the open source architecture domain as more collaborative, software-driven and vibrant, where many parties work together to create state-of-the-art chips using well-established, reusable components, chiplets and interconnects. It’s a future in which multiple architectures coexist in a modular environment that is driven by openness and software-powered innovation.

**Is there a trend that you are most excited about in open hardware?**

The development that we find especially compelling is the emergence of open tooling and new methodologies that allow hardware developers to employ a software-based approach to programming silicon. The resulting simplification of FPGA and ASIC development flows is attracting people from various backgrounds into the ecosystem, which they enrich with their contributions, lowering the entry point and establishing exciting collaborations in the process.

The ability to co-design hardware and software side by side has profound implications for AI-oriented hardware, where algorithmic advances are made rapidly and can often change the requirements for compute platforms in unexpected ways. The coming together of the hardware and software domains is an extremely exciting trend that will open a lot of opportunities. Since the establishment of Antmicro we have always supported and worked towards that trend.

**Make a prediction - what will the state of open source hardware look like in 5-10 years?**

We think that the collaboration enabled by open source will be the dominant driver for innovation in hardware design in the coming decade. An ecosystem of advanced open source EDA tooling targeting IPs written in multiple HDLs (and/or mixture thereof - Chisel, SystemVerilog, VHDL should all ‘just work’), together with collaboratively developed open source ISAs, IP frameworks and productivity tools, will make it easier than ever to create a dedicated ASIC design without spending billions in R&D.

More flexible chips will be built through collaborations between many parties using chiplet technologies as well as fast and open interconnect standards like AIB. Programs such as Google’s open source shuttle program for the first open source SkyWater PDK will mean that more talent, including teams with a software background, can engage in building hardware, to the benefit of the latter.

Through availability of open source tools and interoperability standards, complexity will be reduced by breaking systems apart into components. This model will help to solve issues more effectively by tackling them independently and collaboratively.
