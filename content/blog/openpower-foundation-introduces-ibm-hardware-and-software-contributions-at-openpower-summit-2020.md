---
title: "OpenPOWER Foundation Introduces IBM Hardware and Software Contributions at OpenPOWER Summit 2020"
date: "2020-09-15"
categories: 
  - "blogs"
tags: 
  - "ibm"
  - "openpower-summit"
  - "openpower-foundation"
  - "opencapi"
  - "powerai"
  - "yadro"
  - "antmicro"
  - "a2i"
  - "openpower-summit-2020"
  - "a2o-power-processor-core"
  - "a2o"
  - "open-ce"
  - "omi"
  - "open-memory-interface"
  - "mendy-furmanek"
  - "allan-cantle"
  - "opencapi-consortium"
---

Today at [OpenPOWER Summit 2020](https://events.linuxfoundation.org/openpower-summit-north-america/), OpenPOWER Foundation announced two key technologies contributed by IBM to the open source community.

- A2O POWER processor core, an out-of-order follow-up to the A2I core, and associated FPGA environment
- Open Cognitive Environment (Open-CE), based on IBM’s PowerAI to enable improved consumability of AI and deep learning frameworks

The contributions follow the open sourcing of the [POWER ISA and associated reference designs in August 2019](https://openpowerfoundation.org/the-next-step-in-the-openpower-foundation-journey/) and the [A2I POWER processor core in June 2020](https://openpowerfoundation.org/a2i-power-processor-core-contributed-to-openpower-community-to-advance-open-hardware-collaboration/). They represent IBM’s continued commitment to fostering innovation around the POWER architecture from the OpenPOWER ecosystem.

## A2O open sourced for enhanced single-thread performance

The A2O core is an out-of-order, multi-threaded, 64-bit POWER ISA core that was developed as a processor for customization and embedded use in system-on-chip (SoC) devices. It’s most suitable for single thread performance optimization. A follow-up to its parent high-streaming throughput A2I predecessor, it maintains the same modular design approach and fabric structure. The Auxiliary Execution Unit (AXU) is tightly-coupled to the core, enabling many possibilities for special-purpose designs for new markets tackling the challenges of modern workloads.

Speaking of the A2O at OpenPOWER Summit 2020, [Mendy Furmanek](https://www.linkedin.com/in/mendy-furmanek-640425/), President of the OpenPOWER Foundation and Director of POWER Open Hardware Business Development at IBM, said, “I’m excited to announce the opening of the out-of-order A2O core design. A2O provides enhanced single-thread performance and is a perfect companion to the highly scalable 4-way SMT commercialized A2I core. These, combined with the ease of entry Microwatt core, do an excellent job of showcasing the versatility of the Power ISA.”

![A2O POWER Processor Core](images/a2o-power-processor-core.png)

![](images/a2o-power-processor-core-design.png)

The A2O core is available on GitHub at: [https://github.com/openpower-cores/a20](https://github.com/openpower-cores/a2o)

## IBM PowerAI open sourced as Open Cognitive Environment (Open-CE)

Open-CE, based on IBM's PowerAI project, which was released as IBM Watson Machine Learning Community Edition, is designed to make foundational AI and deep learning frameworks, libraries and tools like TensorFlow and PyTorch more accessible. Open-CE is a source-to-image project that provides a pre-integrated, multi-architectural set of recipes, build scripts, predefined kubernetes-native continuous integration pipeline code and cutting edge models for building a complete environment of packages and container images for AI development.

OpenPOWER member Oregon State University (OSU) also announced an intent to build and offer community binaries related to each tagged release of Open-CE in an effort to grow participation in the project and in the open source AI community as a whole. Community binaries will be offered through an easily consumable conda channel for multiple architectures, including powerpc little endian, both with and without NVIDIA CUDA support.

OSU has a longstanding commitment to support open source software. At the [OSU Open Source Lab](https://osuosl.org/), for example, researchers develop AI-based tools to answer scientific questions and challenges. Many of the research groups leverage multiple architectures to complete their work, and multi-architecture tools like PowerAI allow them to focus on research rather than software. Open sourcing this resource will make it more accessible and enable it to move at the pace of the research community which is critical to its continued success.

“We leverage PowerAI for all of our main AI tools across different architectures. These packages are optimized to take advantage of architecture-specific capabilities other generalized package sets cannot provide,” said [Christopher Sullivan](https://www.linkedin.com/in/christopher-m-sullivan-446904/), Assistant Director for Biocomputing at the Center for Genome Research and Biocomputing at Oregon State University. “We see a huge benefit in making this a community-managed resource under the new name Open-CE.”

Open-CE is available on GitHub at: [https://github.com/open-ce](https://urldefense.proofpoint.com/v2/url?u=https-3A__github.com_open-2Dce&d=DwMFaQ&c=jf_iaSHvJObTbx-siA1ZOg&r=5jc3gglf8uSAp74sMS-Yqw&m=KJweb9zWnaGInS4oMj5-BfBtCTXIPVv2-SrMcjpr60E&s=QPdWYqu8f2Rk52JUfMsJHycpMUbHAe2OMg4n7IfDeqc&e=)

## Allan Cantle Shares the OMI Advantage as New OpenCAPI Technical Director

[Allan Cantle](https://www.linkedin.com/in/allan-cantle-666405/), CEO of Nallasway and recently appointed Technical Director and Board Advisor of [OpenCAPI Consortium](https://opencapi.org/) also spoke at OpenPOWER Summit 2020. Cantle previously held positions as CTO of the ISI group within Molex and CEO and Founder of Nallatech. He also has experience with OpenPOWER Foundation as a member of the Board of Directors and Chair of the OpenPOWER Accelerator workgroup from 2016 - 2018.

“OpenCAPI is a clear leader with its ultra low latency implementation together with the complimentary Open Memory Interface (OMI),” said Cantle during his keynote at OpenPOWER Summit 2020. “OMI provides best in class memory bandwidth, together with depth, at the lowest possible cost when compared directly with native DDR4 DIMM and HBM Memories."

OMI has a bandwidth advantage of 4x over DDR4 and 1.2x over HBM2 as well as a DRAM Depth advantage of 2.3x over DDR4 and 116x over HBMs, while only adding <10ns latency over standard RDIMMs (below). The technical performance of OpenCAPI and OMI - in production today - make it a clear choice for the industry.

![](images/The-OMI-Advantage-1-1024x576.png)

 

OpenPOWER Summit is the premier gathering for developers of silicon, systems and applications built on the POWER architecture, and is sponsored by Antmicro, IBM, OpenCAPI Consortium and Yadro. More information on the A2O and OpenCE contributions, as well as other developments in the OpenPOWER ecosystem, [can be found online here](https://events.linuxfoundation.org/openpower-summit-north-america/).
