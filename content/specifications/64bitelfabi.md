---
title: 64-bit ELF ABI Specification for OpenPOWER Architecture
group: systemsoftware
publicreview: false
aliases:
  - "64bitelfv2abi/"
  - "64bitelfv2/"
tags:
  - specifications
  - systemsoftware
  - abi
  - toolchain
  - compiler
date: 2021-03-15
draft: false
---

The ABI (application binary interface) specification provides the definitions for the machine interface and
inter-object interfaces for the little-endian POWER architecture.  

This specification defines the OpenPOWER ELF ABI which is derived from and represents the first major update to the Power ABI
since the original release of the IBM® RS/6000® ABI.
It was developed to make extensive use of new functions available in OpenPOWER-compliant processors.
It expects an OpenPOWER-compliant processor to implement at least Power ISA v2.07B with all OpenPOWER Architecture instruction categories
as well as OpenPOWER-defined implementation characteristics for some implementation-specific features.  

The Executable and Linking Format (ELF) defines a linking interface for executables and shared objects in two parts :
the first part is the generic System V ABI, the second part is a processor-specific supplement.
This document, the OpenPOWER ABI for Linux Supplement for the Power Architecture 64-bit ELF V2 ABI,
is the OpenPOWER-compliant processor-specific supplement for use with ELF on 64-bit IBM Power Architecture® systems.
This is not a complete System V ABI supplement because it does not define any library interfaces.
This document establishes both big-endian and little-endian application binary interfaces.
OpenPOWER-compliant processors in the 64-bit Power Architecture can execute in either big-endian or little-endian mode.
Executables and executable-generated data (in general) that subscribes to either byte ordering is not portable to a system running in the other mode.  

Comments, questions, etc. can be submitted to the public mailing list for this document at
<syssw-elfv2abi@mailinglist.openpowerfoundation.org>.
