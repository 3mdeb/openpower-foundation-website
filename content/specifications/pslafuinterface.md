---
title: PSL / AFU Interface Specification
group: accelerator
publicreview: false
tags:
  - powerservicelayer
  - psl
  - acceleratorfunctionalunit
  - afu
  - accelerator
  - capi1
  - capi2
  - pcie4
  - power8
  - power9
date: 2016-03-15
draft: false
---

A CAPI based accelerator interfaces to the POWER system through a logic unit called the Power Service Layer (PSL).
The Accelerator Function Unit (AFU) contains the logic that implements the unique acceleration function.  

The POWER Service Layer to Accelerator Functional Unit (PSL / AFU) interface communicates to the acceleration logic running on the FPGA.
Through this interface, the PSL offers services to the AFU.
The services offered are cache-line oriented and allow the AFU to make buffering versus throughput trade-offs.  

The interface to the AFU is composed of six independent interfaces :
- AFU Command Interface is the interface through which the AFU sends service requests to the PSL.
- AFU Buffer Interface is the interface through which the PSL moves data to and from the AFU.
- PSL Response Interface is the interface through which the PSL reports status about service requests.
- AFU MMIO Interface is the interface through which software reads and writes can access registers within the AFU.
- AFU Control Interface allows the PSL job management functions to control the state of the AFU.
- AFU DMA Interface allows the AFU to send native PCIe Writes and Reads and to receive Read Completion data.

Together these interfaces allow software to control the AFU state and allow the AFU to access data in the system.  

This document is a Standard Track, Work Group Specification work product owned by the Accelerator Workgroup and
handled in compliance with the requirements outlined in the OpenPOWER Foundation Work Group (WG) Process document.
It was created using the Master Template Guide version 1.0.0.
Comments, questions, etc. can be submitted to the public mailing list for this document at <aclwg-afu_psl@mailinglist.openpowerfoundation.org>.
