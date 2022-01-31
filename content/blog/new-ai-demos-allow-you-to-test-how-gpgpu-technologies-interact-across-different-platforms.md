---
title: "New AI demos allow you to test how GPGPU technologies interact across different platforms"
date: "2019-12-12"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "nvidia"
  - "gpu"
  - "nvlink"
  - "artificial-intelligence"
  - "ai"
  - "center-for-genome-research-and-biocomputing"
  - "oregon-state-university"
  - "pci"
---

_This article was originally published by [IBM on its Power Developer Portal](https://developer.ibm.com/linuxonpower/2019/12/06/new-ai-demos-allow-you-to-test-how-gpgpu-technologies-interact-across-different-platforms/)._ _Oregon State University is a member of the OpenPOWER Foundation._

 

The [Center for Genome Research and Biocomputing](https://cgrb.oregonstate.edu/) (CGRB) at Oregon State University works closely with hardware vendors to test different configurations. Many of these configurations push the limits of processing hardware because they are used for cutting-edge research across a gamut of disciplines. Through the process of working with NVIDIA general-purpose computing on graphics processing unit (GPGPU) technologies, we realized a difference around architecture such as SXM2, NVLink and PCI interconnections, and PPC64LE and x86. Changing these architecture interactions helps remove data congestion through the bus when interacting with GPGPU technologies. For example, SXM2 with NVLink on the PPC64LE system can use system memory with GPGPU hardware where SXM2 with NVLink on x86 provides GPGPU to GPGPU throughput but no access to system memory.

Through extensive testing using the same GPGPU located in different systems with different hardware architectures, while processing, we found a set of pathways that can reduce time and change the scope of work. Working with Tech Data and other hardware vendors, we are able to provide a set of AI demos for users who want to test how GPGPU technologies interact across different systems. The demo runs real algorithms used for research on real systems in real time. For example users will be able to watch a recently published tool used to identify owls in the forest from sound ([https://doi.org/10.1002/rse2.125](https://doi.org/10.1002/rse2.125)) run classification of over 100,000 images on two different architectures at the same time. This research generally produces hundreds of terabytes of data per season to process so finding the best architecture for pushing data through the GPGPU was important. During each demo users are provided different information about how the systems are performing like GPU load, GPU memory usage and GPU throughput. There are several different demos each showing different types of interactions with GPGPU technologies. Because this is a resource that runs in real time on real systems, we ask users to sign up for a time slot to access the demo.

Go to the demo portal page to get started:

[http://aidemo.cgrb.oregonstate.edu/](http://aidemo.cgrb.oregonstate.edu/)
