---
title: Field Replaceable Unit Service Interface Specification
aliases:
  - "/wp-content/uploads/resources/OpenFSI-spec/content/ch03.html"
group: hardwarearchitecture
publicreview: false
aliases:
  - "openfsi/"
  - "openfieldserviceinterface/"
  - "fieldserviceinterface/"
tags:
  - specification
  - fsi
  - fru
  - openfsi
  - hardware
date: 2016-10-13
draft: false
---

This document describes a Field Replaceable Unit (FRU) Support Interface (FSI) suited
to service all chips in a computer system via a common serial interface.
Key features are ease of use, easy scalability, robustness, and support for virtualization and
the tunneling of interrupts and DMA control signals across the interface.
FSI is superior to similar industry standard interfaces in these and many other features including speed, distance, data protection, and address range.  

FSI is a point to point two wire interface operating in half duplex mode,
which is capable of supporting distances of up to 4 meters at up to 166 MHz bus frequency.
All operations are fully CRC checked to allow error recovery.
With its versatile architecture, the FSI is suited for a wide range of applications from service access to in-system test.  
