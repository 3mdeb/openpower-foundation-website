---
title: "NEC’s Service Acceleration Platform for Power Systems Accelerates and Scales Cloud Data Centers"
date: "2015-11-16"
categories: 
  - "blogs"
---

By Shinji Abe, Senior Manager for IT Platform Division of NEC

As usage of the cloud expands, cloud data centers will need to be able to accommodate a wide range of services, from office applications to on-premises services and in the future: the Internet of Things (IoT). To meet these needs, the modern data center requires the ability to simultaneously handle multiple demands for data storage, networks, numerical analysis, and image processing from various users.

NEC’s new Service Acceleration Platform addresses this need by working at the device level to assign resources to perform computation and scale up individual performance and functionality. Unifying standard hardware and software components, the Service Acceleration Platform delivers faster, more powerful, and more reliable computing solutions that meet customer performance demands.

## What is ExpEther?

The architecture of the Service Acceleration Platform is based on NEC-developed ExpEther technology ([http://www.expether.org/index.html](http://www.expether.org/index.html)).The ExpEther Technology can extend PCI Express beyond the confines of a computer chassis via Ethernet without any modification of existing hardware and software. Computer resources can be added on standard Ethernet fabric the same as adding into the chassis to provide scale-up flexibility. ExpEther can build a new type of computing environment without physical constraints, and is cost effective with the use of standard Ethernet.

[![image 1](images/image-1-1024x386.png)](https://openpowerfoundation.org/wp-content/uploads/2015/11/image-1.png)The CPU views the ExpEther engine as a PCI Express Switch rather than Ethernet. This means that the ExpEther is a implementation of PCI Express Switch, so it is fully compatible with PCI Express Spec.

## Service Acceleration Platform

In IoT data processing, various data with various characteristics are generated from the physical inputs. To accelerate the processing of these inputs, various accelerator engines are necessary depending on the workload.

[![image 2](images/image-2-1024x481.png)](https://openpowerfoundation.org/wp-content/uploads/2015/11/image-2.png)In NEC’s Service Acceleration Platform, all IO devices are disaggregated by ExpEther. The platform can flexibly configure versatile systems with the needed number of GPGPUs, Accelerator FPGAs and NVMe SSDs according to the workload.

## CAPI Capable ExpEther Engine

NEC extended the ExpEther functionality for CAPI compliance and confirmed that ExpEther technology can extend CAPI-attached devices remotely from the CPU via an Ethernet switch.

## [![image 3](images/image-3-1024x271.png)](https://openpowerfoundation.org/wp-content/uploads/2015/11/image-3.png)Product Lineup

NEC is currently shipping 1G and 10G version of ExpEther products and developing a high-performance version for demanding environments and workloads.

[![image 4](images/image-4-1024x189.png)](https://openpowerfoundation.org/wp-content/uploads/2015/11/image-4.png)

* * *

_Shinji Abe is a Senior Manager for IT Platform Division of NEC Corporation in Tokyo, Japan. He is in charge of development of the Service Acceleration Platform with ExpEther technology._
