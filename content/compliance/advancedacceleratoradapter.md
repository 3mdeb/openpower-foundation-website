---
title: Advanced Accelerator Adapter 25Gbps I/O Compliance Test Harness and Test Suite Specification
group: accelerator
publicreview: false
tags:
  - specification
  - compliance
  - testharness
  - testsuite
  - 25gbps
  - 25gio
  - advancedacceleratoradapter
  - accelerator
  - capi30
  - opencapi
date: 2018-11-05
draft: false
---

The purpose of the OpenPOWER Advanced Accelerator Adapter Compliance 25Gbps I/O Test Harness and Test Suite specification is
to provide the test suite requirements to demonstrate OpenPOWER Advanced Accelerator Adapter 25G I/O compliance for POWER9™ systems.  

The input to this specification is the following specification :
OpenPOWER Advanced Accelerator Adapter Electro-Mechanical Specification
which describes electro-mechanical specification for advanced accelerator adapters within the OpenPOWER ecosystem supported by IBM POWER9.  

There are two accelerator approaches for the 25Gbit/sec interface and
the compliance for each approach is defined in this document.
The first approach is a Mezzanine Adapter Card which is attached to the system planar via two connectors.
The Mezzanine Adapter Card for OpenPOWER systems based on the POWER9 processor attaches to the 25Gbit/sec interface native to
the POWER9 and plugs into the mezzanine card connectors.  

The second approach is a Cabled Interface Extension to an adapter card.
It uses a PCIe card as an example but the cabled extension does not require the adapter card be PCIe.
POWER9 platforms support the optional cabling of the 25Gbit/sec Advanced Accelerator Interface to
the advanced accelerator adapter in a riser card plugged into a PCIe slot in the same system.
In addition, the adapter could be located in different drawer of the rack.  

This document is a Standard Track, Work Group Specification work product owned by the Compliance Workgroup and
handled in compliance with the requirements outlined in the OpenPOWER Foundation Work Group (WG) Process document.
Comments, questions, etc. can be submitted to the public mailing list for this document at <openpower-25gio-thts@mailinglist.openpowerfoundation.org>.
