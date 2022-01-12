---
title: 64-bit ELF ABI Compliance TH/TS Specification for OpenPOWER
group: compliance
publicreview: false
tags:
  - specifications
  - systemsoftware
  - abi
  - toolchain
  - compliler
  - testsuite
  - testharness
date: 2017-06-27
draft: false
---

This document provides requirements on a test implementation targeting the Application Binary Interface (ABI) for OpenPOWER.
Currently, this test implementation is shipped with the gcc sources, and so forms part of the official gcc build and test process.  

The OpenPOWER ELFv2 Application Binary Interface (ABI) Compliance Test Harness and Test Suite (TH/TS) Specification provides
the test suite requirements to demonstrate compliance with the OpenPOWER 64-bit ELFv2 ABI Specification.
It describes the tests required in the test suite and a test harness needed to execute the test suite.
It also describes the successful execution of the test suite, including what it means for an optional feature to fail.  

This document is a Standard Track, Work Group Specification work product owned by the Compliance Workgroup and
handled in compliance with the requirements outlined in the OpenPOWER Foundation Work Group (WG) Process document.
It was created using the Master Template Guide version 1.0.0.  

Comments, questions, etc. can be submitted to the public mailing list for this document at
<openpower-elfv2abi-thts@mailinglist.openpowerfoundation.org>.
