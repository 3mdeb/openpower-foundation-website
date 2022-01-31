---
title: "OpenPOWER Foundation Members Bring Research and Insight to NVIDIA GTC 2021"
date: "2021-04-09"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "nvidia"
  - "openpower-foundation"
  - "ohio-state-university"
  - "oak-ridge-national-laboratory"
  - "gtc"
  - "gtc-2021"
  - "nvidia-gtc"
  - "cineca"
---

_By_ [_Ganesan Narayanasamy_](https://www.linkedin.com/in/ganesannarayanasamy/)_, Leader, OpenPOWER Academic Discussion Group and IBM POWER enablement_

Academic and research organizations have always been leaders in pushing the boundaries of science and technology, and work closely with companies to solve some of the world’s biggest challenges. As the leader of the OpenPOWER Academic Discussion Group, I believe working with academics and research centers to develop and adopt POWER/OpenPOWER Systems is a key to growing our ecosystem.

Summits and conferences throughout the year provide an opportunity for technology leaders to discuss the latest advances in technology and better understand remarkable pieces of hardware. One of the conferences I look forward to each year is NVIDIA’s GTC - taking place April 12-16, 2021.

NVIDIA’s GTC brings together a global community of developers, researchers, engineers, and innovators to experience global innovation and collaboration. The event delivers the latest breakthroughs in AI, HPC, accelerated data science, healthcare, graphics, government and more. It’s ranked by some as the #1 AI Conference and this year's registration is FREE for the virtual event.

If you’re attending GTC 2021, below are a handful of sessions you’ll be interested in from OpenPOWER Foundation members IBM, Oak Ridge National Laboratory, CINECA and Ohio State University.

If there's a GTC session not included here that you think would be valuable to the OpenPOWER community, we want to know about it! Share them with us on Twitter at [@openpowerorg](https://twitter.com/openpowerorg) and [@ganesanblue](https://twitter.com/GanesanBlue).

**Aerodynamic Flow Control Simulations with Many GPUs on the Summit Supercomputer**

- Session ID S3123
- Nicholson Koukpaizan, Postdoctoral Research Associate, Oak Ridge National Laboratory
- A GPU-accelerated computational fluid dynamics (CFD) solver was used for aerodynamic flow control simulations on the Summit supercomputer at Oak Ridge Leadership Computing Facility. The GPU implementation of the FORTRAN 90 code relies on OpenACC directives to offload work to the GPU and message-passing interface (MPI) for multi-core/multi-device parallelism, taking advantage of the CUDA-aware MPI capability. We'll address implementation details, as well as performance results and optimization. Finally, we'll present new scientific results obtained by leveraging the GPUs for the control of aerodynamic flow separation using fluidic oscillators (actuators that generate spatially oscillating jets without any moving part). We'll add a few details pertaining to CFD and aerodynamic flow control to make the talk accessible to people who are not necessarily familiar with these domains.

**Fluid Dynamic Simulations of Euplectella aspergillum Sponge**

- Session ID E31218
- Giorgio Amati, Senior HPC engineering, CINECA
- We present our experience in simulating the flow around a silica-based sponge, the "Euplectella Aspergillum," using a TOP500 machine equipped with NVIDIA GPUs. A Lattice Boltzmann Method (LBM)-based code was used to explore fluid dynamical features of this complex structure. We'll present some physical results, together with details of code implementations and performance figures (up to about 4,000 V100 GPU) for our MPI+OpenACC LBM code.

**Accelerating GPU-Enabled HPC and Data Science Applications with On-the-Fly Compression**

- Session ID S31664
- Dhabaleswar K (DK) Panda, Professor and University Distinguished Scholar, Ohio State University
- We'll discuss the effectiveness of using high-performance GPU-based compression algorithms to improve large message transfers for GPU-resident data in MPI libraries. We'll discuss the performance bottleneck of transferring large GPU-resident data, which is due to the relatively low throughput of the commodity networks (such as Ethernet and InfiniBand). We'll provide an overview of the proposed on-the-fly message compression schemes in CUDA-Aware MPI libraries, like MVAPICH2-GDR, to reduce communication volume. We'll highlight the challenges of integrating compression algorithms into MPI libraries and discuss optimization strategies. We'll use the popular OSU micro-benchmark suite and representative applications from HPC and data science to demonstrate the efficiency of the proposed solutions. The experimental evaluations show that we can gain up to 37% improvement in execution time of AWP-ODC and 2.86x improvement in Dask throughput.

**Introducing Cloud-Native Supercomputing: Bare-Metal, Secured Supercomputing Architecture**

- Session ID S32021
- Gilad Shainer, SVP Marketing, Networking, NVIDIA, Dhabaleswar K (DK) Panda, Professor and University Distinguished Scholar, Ohio State University and Paul Calleja, Director, Research Computing Services, University Of Cambridge
- High performance computing and artificial intelligence supercomputers have evolved to be the primary data processing engines for wide commercial use, hosting a variety of users and applications. While providing the highest possible performance, supercomputers must also offer multi-tenancy security. Therefore they need to be designed as cloud-native supercomputing platforms. The key element that enables this architecture transition is the data processing unit (DPU). DPU is a fully integrated data-center-on-a-chip platform that can manage the data center infrastructure instead of the host processor, enabling security and orchestration of the supercomputer. This architecture enables supercomputing platforms to deliver optimal bare-metal performance, while natively supporting multi-node tenant isolation. We'll introduce the new supercomputing architecture, and include first applications performance results.

**Optimizing Communication on GPU-Based HPC Systems for Dask and cuML Using MVAPICH2-GDR**

- Session ID S31627
- Dhabaleswar K (DK) Panda, Professor and University Distinguished Scholar, Ohio State University and Aamir Shafi, Research Scientist, Ohio State University
- Dask and cuML are important components of the NVIDIA RAPIDS framework capable of executing in the Multi-Node Multi-GPU setting on a cluster of GPUs connected with an RDMA-capable interconnect like InfiniBand. The MVAPICH2-GDR library is a high-performance implementation of the MPI standard for programming such systems. We'll present our approach to architecting MVAPICH2-GDR-based communication backends for Dask and cuML. The backend for Dask exploits mpi4py over MVAPICH2-GDR and supports communication using asynchronous I/O communication co-routines. We'll present performance evaluation results from multiple HPC clusters (OSU cluster with v100 GPUs, TACC’s Frontera with 32 NVIDIA Quadro RTX 5000 GPUs, and SDSC’s Comet with 32 NVIDIA P100 GPUs) and demonstrate the efficiency of MPI-based backends using micro-benchmark results and applications like sum of cuPy array with transpose, cuDF merge, K-Means, Nearest Neighbors, Random Forest, and tSVD.

**High Performance Scalable Distributed Deep Learning with MVAPICH2-GDR**

- Session ID S31646
- Dhabaleswar K (DK) Panda, Professor and University Distinguished Scholar, Ohio State University and Hari Subramoni, Research Scientist, Ohio State University
- We'll highlight recent advances in AI and HPC technologies to improve the performance of deep neural network training (DNN) on NVIDIA GPUs. We'll discuss many exciting challenges and opportunities for HPC and AI researchers. Traditionally, DL frameworks have utilized a single GPU to accelerate the performance of DNN training/inference. However, approaches to parallelize training are being actively explored. Several DL frameworks, such as TensorFlow, have emerged that offer ease-of-use and flexibility to train complex DNNs. We'll will provide an overview of interesting trends in DL frameworks from an architectural/performance standpoint, and evaluate new high-level distributed frameworks like DeepSpeed and Horovod. We'll highlight new challenges for message-passing interface runtimes to efficiently support DNN training, and will discuss different parallelization strategies for distributed training. Finally, we scale DNN training for very-large pathology images using model-parallelism to 1,024 NVIDIA V100 GPUs.

**300 Years In the Making: IBM is Solving Big Problems by Revitalizing Old Methods with New Technology**

- Session ID SS33244
- Matt Drahzal, Worldwide Business Development - Cognitive Systems, IBM Systems
- In the 1700s, Thomas Bayes created a now widely-known and relatively simple method for finding the probability of one event happening. Nearly 300 years later, NVIDIA GPUs made it possible to apply this theorem to the exploding field of high-performance computing. In this session, Matt Drahzal will share how IBM and NVIDIA collaborated to create an appliance for HPC clusters that will make workloads run faster and generate better results. Application areas that are already seeing strong results from the IBM Bayesian Optimization Accelerator include automotive, aerospace, electronic design and oil & gas.

**To the Edge with the Mayflower Autonomous Ship**

- Session ID: SS33194
- Andy Stanford-Clark, Chief Technology Officer, IBM UK/Ireland
- Learn how the Mayflower Autonomous Ship (MAS) will self-navigate across oceans, run operations 24/7, and collect and analyze large amounts of real-time data on climate and ocean health with its AI Captain powered by IBM Automation. The MAS is led by the marine research organization, ProMare, with IBM acting as both lead technology partner and lead scientific partner for the project. To enable accelerated discovery that wasn't possible before, the MAS will run AI & Automation workloads on NVIDIA Jetson AGX Xavier Edge devices. MAS represents a new class of efficient, crewless, and solar-powered ships, which combines new and time-tested automation technologies.

**Working Together: Four things a data scientist should demand from enterprise IT**

- Session ID: SS33231
- Douglas O'Flaherty, Program Director, IBM Storage
- As data science matures in an organization, there are new demands on the data science teams that are often unfamiliar. Rather than seeing the need to work with enterprise IT as an inhibitor to innovation, the data science teams should be asking the enterprise IT teams to actively apply their expertise to support the data science mission. Enhancements in storage, intelligent data management, and hybrid cloud make it easier to scale data science productivity and collaboration - if you know what to ask for. In this session, you will hear from IBM's leader in enterprise data science, Steve Eliuk, as he describes the scale and the challenges of building their enterprise data science environment. And, how they are leveraging IBM's tools and platforms to manage that growth.

**IBM + NVIDIA for Accelerated, High-Performing and Secure ADAS/AV Development**

- Session ID: SS33232
- Frank Kraemer, IBM Systems Architect
- The automobile is one of the most technically sophisticated and connected platforms on the planet. Building advanced driver assistance systems (ADAS) and autonomous vehicles (AV) combines miles and miles of data, consumer behavior, and simulation together. Simple access to data for deep learning AI, development, and system testing is required. These requirements create a growing need for hybrid cloud data management. To become industry leaders, ADAS/AV developers need a high-performance, accelerated, scalable information architecture which will help them deliver insights faster. NVIDIA and IBM Storage have been working together for many years to develop reference architectures, to deliver accelerated, high-performing, scalable and secure end to end AI infrastructure for ADAS/AV.

 

[Click here to learn more and register for GTC 2021!](https://www.nvidia.com/en-us/gtc/)
