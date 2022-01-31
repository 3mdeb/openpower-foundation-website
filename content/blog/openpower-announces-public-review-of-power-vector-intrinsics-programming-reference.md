---
title: "OpenPOWER announces public review of Power Vector Intrinsics Programming Reference"
date: "2020-04-03"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "openpower-foundation"
  - "power-vector-intrinsics-programming-reference"
  - "pvipr"
---

_By_ [_Bill Schmidt_](https://www.linkedin.com/in/williamschmidtphd/)_, Ph.D., Toolchain Architect for Linux on Power, IBM_

The OpenPOWER Foundation System Software Work Group is happy to announce that the public review of the [Power Vector Intrinsics Programming Reference](https://openpowerfoundation.org/?resource_lib=power-vector-intrinsic-programming-reference-review-draft) (PVIPR) is now open!

The new PVIPR document provides developers with resources for effectively programming Power Instruction Set Architecture’s vector instructions. This document provides background on the vector architecture and the application binary interface (ABI), describes Power’s unique bi-endian vector programming model, discusses best practices for vector programming, and contains a complete reference for each vector intrinsic function available for Power ISA 2.7 and 3.0.

This information is also useful for compiler developers who want to be compliant with existing compilers for Power. To this end, PVIPR provides sample implementations of each vector intrinsic function.

Historically, some of this information is also available in the [64b ELFv2 ABI Specification](https://openpowerfoundation.org/?resource_lib=64-bit-elf-v2-abi-specification-power-architecture). Since the vector intrinsics are not truly part of the ABI, we moved the information into a new, expanded document, and improved its utility as a quality reference document. Future versions of the ELFv2 ABI specification will remove the now-redundant information and point to this document instead.

Comments and questions about this document can always be submitted to the public mailing list for this document at [syssw-programming-guides@mailinglist.openpowerfoundation.org](mailto:syssw-programming-guides@mailinglist.openpowerfoundation.org). Comments during this review period will help us complete version 1.0.0.

The commenting period for the Power Vector Intrinsic Programming Reference closes on May 15, 2020. In order for this document to be as useful as possible to the OpenPOWER community, we need your input! Thank you in advance for your support.
