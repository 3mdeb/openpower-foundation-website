---
title: "eASIC Brings Advanced FPGA Technology to OpenPOWER"
date: "2016-05-19"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Anil Godbole, Senior Marketing Manager, eASIC Corp._ 

![easic logo](images/easic-logo.png) [eASIC](http://www.easic.com) is very excited to join the OpenPOWER Foundation. One of the biggest value propositions of the [eASIC Platform](http://www.easic.com/products/) is to offer an FPGA design flow combined with ASIC-like performance and up to 80% lower power consumption. This allows the community to enable custom designed co-processor and accelerator solutions in datacenter applications such as searching, pattern-matching, signal and image processing, data analytics, video/image recognition, etc.

## **Need for Power-efficient CPU Accelerators**

The advent of multi-core CPUs/GPUs has helped to increase the performance of modern datacenters. However, this performance is being limited by a non-proportional increase in energy consumption. As workloads like Big Data analytics and Deep Neural Networks continue to evolve in size, there is a need for new computing paradigm which will continue scaling compute performance while keeping power consumption low.

A key technique is to exploit parallelism during program execution. While multi-core processors can also execute in parallel, they burn a lot of energy when sharing data/messages between processors. That is because such data typically resides in off-chip RAMs and their accesses are very power hungry.

## **eASIC Platform**

The eASIC Platform uses distributed logic blocks with associated local memories which enable highly parallel and power efficient implementations of the most complex algorithms. With up to twice the performance of FPGAs and up to 80% lower power consumption the eASIC Platform can provide a highly efficient performance per watt for the most demanding algorithm.  The vast amount of storage provided by the local memories allows fast message and data transfers between the compute elements reducing latency and without incurring the power penalty of accessing off-chip RAM.

## **CAPI Enhancements**

CAPI defines a communication protocol for command/data transfers between the main processor and the accelerator device based on shared, coherent memory. Compared to traditional I/O- based protocols, CAPI’s approach precludes the need for O/S calls thereby significantly reducing the latency of program execution.

Combining the benefits of eASIC Platform and CAPI protocol can lead to high performance and power-efficient Co-processor/Accelerator solutions. For more details on the eASIC Platform please feel free to contact us [www.easic.com](http://www.easic.com) or follow us on Twitter [@eASIC](https://twitter.com/easic).
