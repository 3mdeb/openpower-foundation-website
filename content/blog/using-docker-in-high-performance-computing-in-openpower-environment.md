---
title: "Using Docker in High Performance Computing in OpenPOWER Environment"
date: "2015-01-16"
categories: 
  - "blogs"
---

### Introduction to Authors

Min Xue Bin: Male, IBM STG China, advisory software engineer, LSF developer, mainly focus on High Performance Computing. Ding Zhao Hui: Male, IBM STG China, Senior LSF architect, mainly focus on LSF road map. Wang Yan Guang: Male, IBM STG China, development manager for LSF/LS.

### Background

OpenPOWER will be one of major platforms in High Performance Computing (HPC). IBM Load Sharing Facility (LSF) is the most famous cluster workload management software aimed to explore computation capacity of clusters to the maximum in HPC, and LSF is proved running well on OpenPOWER platform. As an open platform for developers and system administrators to build, ship and run applications, Docker has been widely used in cloud. Could we extend Docker benefits to HPC? Yes, we do. By integrating LSF and Docker in OpenPOWER platform, we achieved better application Docking in OpenPOWER HPC.

### Challenges

In HPC, there are lots of complex customer workloads which depend on multi-packages, libraries, and environment. It is hard to control customer workload resource guarantee, performance isolation, application encapsulation, repeatability and compliance.

### Our experience

We enabled LSF work in openPOWER environment, starting from IBM Power8 Little Endian. We also port Docker to the platform too. Based on that, we finished integration between LSF and Docker to extend its benefits to openPOWER HPC area.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Sanjabi-Sam_OPFS2015_IBM_v2-2.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Sanjabi-Sam_OPFS2015_IBM_v2-2.pdf)

[Back to Summit Details](javascript:history.back())
