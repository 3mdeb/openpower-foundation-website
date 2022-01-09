---
title: I/O Design Architecture Compliance Test Harness and Test Suite
group: compliance
publicreview: false
tags:
  - ioda
  - power8
  - power9
date: 2020-11-10
draft: false
---

This is the OpenPOWER I/O Design Architecture (IODA) Compliance Test Harness and Test Suite (TH/TS) specification.  

The purpose of the OpenPOWER I/O Design Architecture (IODA) Compliance Test Harness and Test Suite (TH/TS) specification is
to provide the test suite requirements to be able to demonstrate OpenPOWER I/O Design Architecture, compliance for POWER(TM) systems.
It describes the tests required in the test suite and a test harness needed to execute the test suite.
It also describes the successful execution of the test suite, including what it means for an optional feature to fail.  

The input to this specification is the OpenPOWER I/O Design Architecture (IODA) Specification
which describes the chip architecture for key aspects of PCI Express® (PCIe)-based host bridge (PHB) designs for POWER systems.

This specification defines the PHB hardware and firmware requirements for these functions:
1. MMIO Partitionable-Endpoint Number Determination,
1. DMA and MSI Partitionable-Endpoint Number Determination,
1. Partitionable-Endpoint State and Enhanced Error Handling,
1. Error-Injection,
1. DMA with No Page Migration,
1. DMA with Page Migration,
1. DMA with Multilevel TCE Tables,
1. DMA Read Sync Register,
1. Message-Signalled Interrupt,
1. PCIe Configura- tion Space, and
1. Partitionable-Endpoint State Table.

This document is proposed as a Standard Track, Work Group Specification work product owned by the Compliance Workgroup and
handled in compliance with the requirements outlined in the OpenPOWER Foundation Work Group (WG) Process document.
Comments, questions, etc. can be submitted to the public mailing list for this document at openpower-ioda-thts@mailinglist.openpowerfoundation.org.
