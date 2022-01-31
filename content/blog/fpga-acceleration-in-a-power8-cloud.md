---
title: "FPGA Acceleration in a Power8 Cloud"
date: "2015-01-19"
categories: 
  - "blogs"
---

### Abstract

OpenStack is one of the popular software that people use to run a cloud. It managers hardware resources like memory, disks, X86 and POWER processors and then provide IaaS to users. Based on existing OpenStack, more kinds of hardware resource can also be managed by OpenStack and be provided to users, like GPU and FPGA. FPGA has been widely used for many kinds of applications, and POWER8 processor has integrated an innovated interface called CAPI (Coherent Accelerator Processor Interface) for direct connection between FPGA and POWER8 chip. CAPI not only provides low latency, high bandwidth and cache coherent interconnection between user’s accelerator hardware and the application software, but also provides an easy programming capability for both accelerator hardware developers and software developers. Based on such features, we extend the OpenStack to make the cloud users can remotely use the POWER8 machine with FPGA acceleration.

Our work allows the cloud users uploading their accelerator design to an automatically compiling service, and then their accelerators will be automatically deployed into a customized OpenStack cloud with POWER8 machine and FPGA card. When the cloud users launch some virtual machines (VMs) in this cloud, their accelerators can be attached to their VMs so that inside these VMs, they can use their accelerators for their applications. Like the operating system images in cloud, the accelerators can also be shared or sold in the whole cloud so that one user’s accelerator can benefit other users.

By enabling CAPI in the cloud, our work lowers the threshold of using FPGA acceleration, encourages people using accelerators for their application and sharing accelerators to all cloud users. The CAPI and FPGA acceleration ecosystem also benefits from this way. A public cloud with our work is in testing. It is used by some students in university. Remote accessing to the cloud is enabled, so that live demo can be shown when in the presentation.

### Bio

Fei Chen works for IBM China Research Lab in major of cloud and big data. He achieved his B.S. degree in Tsinghua University, China and got his Ph.D. degree in Institute of Computing Technology, Chinese Academy of Sciences in the year 2011. He worked on hardware design for many years, and now focuses on integrating heterogeneous computing resource into cloud. Organization: IBM China Research Lab (CRL)

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Chen-Fei_OPFS2015_IBM_031315_final.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Chen-Fei_OPFS2015_IBM_031315_final.pdf)

[Back to Summit Details](javascript:history.back())
