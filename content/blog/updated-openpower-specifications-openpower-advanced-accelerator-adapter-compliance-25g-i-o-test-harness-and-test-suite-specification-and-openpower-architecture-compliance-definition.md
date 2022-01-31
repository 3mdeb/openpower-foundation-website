---
title: "Updated OpenPOWER Specifications -- OpenPOWER Advanced Accelerator Adapter Compliance: 25G I/O Test Harness and Test Suite Specification and OpenPOWER Architecture Compliance Definition"
date: "2019-04-11"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Sandy Woodward, OpenPOWER Foundation Compliance Work Group Chair, IBM Academy of Technology Member_

The OpenPOWER Foundation board recently approved two updated Compliance Work Group documents that are posted on the OpenPOWER Foundation technical resources page. These documents serve as references to both OpenPOWER members and non-members alike who are interested in OpenPOWER.

1) [OpenPOWER Advanced Accelerator Adapter Compliance: 25G I/O Test Harness and Test Suite Specification](https://openpowerfoundation.org/?resource_lib=advanced-accelerator-adapter-compliance-25g-i-o-test-harness-and-test-suite-specification)

This document completed its public review and was approved for publish as a final Work Group Specification.

2) [OpenPOWER Architecture Compliance Definition](https://openpowerfoundation.org/?resource_lib=openpower-architecture-compliance-definition-review-draft)

The Compliance Work Group updated the 2016 document with current information including input OpenPOWER Specifications from other OpenPOWER Work Groups and overview of Compliance Test Harness and Test Suite specifications. This document completed it's public review on March 29, 2019.

**OpenPOWER Advanced Accelerator Adapter Compliance: 25G I/O Test Harness and Test Suite Specification**

The purpose of the _OpenPOWER Advanced Accelerator Adapter Compliance: 25G I/O Test Harness and Test Suite_ specification is to provide the test suite requirements to demonstrate OpenPOWER Advanced Accelerator Adapter 25G I/O compliance for POWER9™ systems, such as for the OpenCAPI 3.0 interconnect.

The input to this specification is the following specification:

- [_OpenPOWER Advanced Accelerator Adapter Electro-Mechanical Specification_](https://openpowerfoundation.org/?resource_lib=advanced-accelerator-adapter-electro-mechanical-specification) which describes electro-mechanical specification for advanced accelerator adapters within the OpenPOWER ecosystem supported by IBM POWER9.

There are two accelerator approaches for the 25Gbit/sec interface and the compliance for each approach is defined in this document. The first approach is a Mezzanine Adapter Card which is attached to the system planar via two connectors. The Mezzanine Adapter Card for OpenPOWER systems based on the POWER9 processor attaches to the 25Gbit/sec interface native to the POWER9 and plugs into the mezzanine card connectors.

The second approach is a Cabled Interface Extension to an adapter card. It uses a PCIe® card as an example but the cabled extension does not require the adapter card be PCIe. POWER9 platforms support the optional cabling of the 25Gbit/sec Advanced Accelerator Interface to the advanced accelerator adapter in a riser card plugged into a PCIe slot in the same system. In addition, the adapter could be located in different drawer of the rack.

**OpenPOWER Architecture Compliance Definition**

The purpose of the _OpenPOWER Architecture Compliance Definition_ document is to give a consistent approach to compliance under the guidance of the Compliance Work Group. It contains the following:

- Document the OpenPOWER specifications that contain the interfaces that are required to be OpenPOWER compliant
- Document an overview of the Compliance Test Harness and Test Suite Specifications that have been developed in the Compliance Work Group, and an outline of the contents expected in each specification
- Document procedures on how to measure and document compliance and where to submit the report for compliance

This version of the document is based on the POWER8™ systems and the POWER9™ systems. It is expected that this document shall be updated for additional POWER8 systems interfaces, additional POWER9 systems interfaces, and for next generation OpenPOWER systems.

The OpenPOWER Architecture Compliance Definition document and the OpenPOWER Advanced Accelerator Adapter Compliance: 25G I/O Test Harness and Test Suite Specification are Standards Track, Work Group Specifications owned by the Compliance Workgroup and handled in compliance with the requirements outlined in the OpenPOWER Foundation Work Group (WG) Process document.

If you have comments you would like to make on these new specification documents, comments can be submitted to the Compliance Workgroup by emailing <[openpower-arch-comp-def@mailinglist.openpowerfoundation.org](mailto:openpower-arch-comp-def@mailinglist.openpowerfoundation.org)­­> or <[openpower-25gio-thts@mailinglist.openpowerfoundation.org](mailto:openpower-25gio-thts@mailinglist.openpowerfoundation.org)\>.
