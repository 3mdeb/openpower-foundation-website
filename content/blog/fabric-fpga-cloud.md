---
title: "Managing Reconfigurable FPGA Acceleration in a POWER8-based Cloud with FAbRIC"
date: "2016-05-06"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Xiaoyu Ma, PhD Candidate, University of Texas at Austin_

_This post is the first in a series profiling the work developers are doing on the OpenPOWER platform. We will be posting more from OpenPOWER developers as we continue our [OpenPOWER Developer Challenge](http://openpower.devpost.com)._ 

![tacc](images/tacc.png)

FPGAs (Field-Programmable Gate Array) are becoming prevalent. Top hardware and software vendors have started making it a standard to incorporate FPGAs into their compute platforms for performance and power benefits. IBM POWER8 delivers CAPI (Coherent Accelerator Processor Interface) to enable FPGA devices to be coherently attached on the PCIe bus. Industries from banking and finance, retail, [healthcare](https://openpowerfoundation.org/blogs/genomics-with-apache-spark/) and many other fields are exploring the benefits of [FPGA-based acceleration](https://openpowerfoundation.org/blogs/capi-drives-business-performance/) on the OpenPOWER platform.

## FPGAs in the Cloud

When it comes to cloud compute, in-cloud FPGAs are appealing due to the combined benefits of both FPGAs and clouds. On one hand, FPGAs improve cloud performance and save power by orders of magnitude. On the other hand, the cloud infrastructure reduces cost per compute by resource sharing and large-scale FPGA system access without the user needing to own and manage the system. Furthermore, cloud enables a new level of collaboration as the identical underlying infrastructure makes it easier for users of the same cloud to share their work, to verify research ideas, and to compare experimental results.

While clouds with FPGAs are available in companies like IBM, there are, however, few FPGA clouds available for public, especially academic, use. To target this problem, we created [FAbRIC](https://wikis.utexas.edu/display/fabric/Home) (FPGA Research Infrastructure Cloud) a project led by Derek Chiou at The Unviersity of Texas at Austin. It enables FPGA research and development on large-scale systems by providing FPGA systems, tools, and servers to run tools in a cloud environment. Currently all FAbRIC clusters are equipped with reconfigurable fabric to run FPGA accelerated workloads. To be available for open use, FAbRIC systems are placed in the [Texas Advanced Computing Center](https://www.tacc.utexas.edu/systems/fabric) (TACC), the supercomputer center of The University of Texas at Austin.

![FaBRIC post](images/FaBRIC-post-1.jpg)

## Using FPGAs with FAbRIC

The FAbRIC POWER8+CAPI system (Figure A) is a cluster of several x86 servers and nine POWER8 servers. The x86 nodes serve as the gateway node, the file server and build machines for running FPGA tools. Each POWER8 node is a heterogeneous compute platform equipped with three accelerating devices (Figure b): a Nallatech 385 A7 Stratix V FPGA adapter, an Alpha-data 7V3 Virtex7 Xilinx-based FPGA adapter and a NVIDIA Tesla K40m GPGPU card. FPGA boards are CAPI-enabled to provide coherent shared memory between the processor and accelerators.

To use FPGA accelerators on POWER8 nodes, the user will design the FPGA accelerator source code typically in RTL such as Verilog or VHDL, push it through the FPGA compiler, program the FPGA with the generated FPGA configuration image and run with host programs. In addition to the conventional RTL design flow which has low programmability, Bluespec System Verilog and High-level Synthesis flows including OpenCL and Xilinx Vivado C-to-Gate are offered as alternatives to RTL in the synthesis of FPGA accelerators. Such flows allow users to abstract away the traditional hardware FPGA development flow for a higher level software development flow and therefore reduce the FPGA accelerator design cycle.

## Weaving FAbRIC

After months of work to ensure in-cloud FPGAs are manageable, which we discovered to be nontrivial since opening close to the metal access with reconfigurability creates vulnerabilities, FAbRIC POWER8+CAPI is up and available to the public research community upon request. Our early “family and friend” users have been running real-world applications reliably and generating promising results for their research projects. As another use case of the system, IBM will launch a CAPI design contest in the late spring of 2016.

* * *

_About Xiaoyu Ma Xiaoyu Ma is a PHD candidate of the Department of Electrical and Computer Engineering at The University of Texas at Austin. He is advised by Prof. Derek Chiou. His research areas include FPGA-based hardware specialization, hardware design programming models, FPGA cloud infrastructure and microprocessor architecture. He is also an employee of the Large Scale System group at Texas Advanced Computing Center, serving as the lead system administrator for the FPGA Research Infrastructure Cloud (FAbRIC) project._
