---
title: "OpenPOWER ISA Compliance Definition"
date: "2020-02-24"
categories: 
  - "blogs"
tags: 
  - "ibm"
  - "power-isa"
  - "openpower-isa"
  - "compliance-work-group"
---

By: Sandy Woodward, OpenPOWER Foundation Compliance Work Group Chair, IBM Academy of Technology Member

There is much excitement in the August 2019 announcement of open-sourcing the POWER Instruction Set Architecture (ISA), which provides the opportunity for experimentation and collaboration. When the hardware implementation of the ISA matures into a product, OpenPOWER ISA Compliance Definition comes in to play to ensure that software shown to execute properly on one compliant processor implementation will execute properly on a different also compliant processor implementation. How will the Compliance Work Group handle ISA compliance with the POWER ISA being open-sourced? Let me start with two OpenPOWER Compliance ISA specifications that are already available to share OpenPOWER compliance concepts before delving into that question.

1. [The OpenPOWER ISA Compliance Definition, Revision 1.0](https://openpowerfoundation.org/?resource_lib=openpower-isa-compliance-definition) defines the test suite requirements to demonstrate OpenPOWER ISA Profile compliance for POWER8 systems and is based on the [IBM POWER ISA Version 2.07 B](https://openpowerfoundation.org/?resource_lib=ibm-power-isa-version-2-07-b).
2. [The OpenPOWER ISA Compliance Definition, Revision 2.0](https://openpowerfoundation.org/?resource_lib=openpower-isa-compliance-definition_review-draft) provides the test suite requirements to be able to demonstrate OpenPOWER ISA Profile compliance for POWER9 systems and is based on the [IBM POWER ISA Version 3.0 B](https://openpowerfoundation.org/?resource_lib=power-isa-version-3-0).

In both of these documents, the testing of a processor implementation's compliance is not intended to show that the processor implementation under test is robust under all possible operating conditions, inputs, or event time interactions. It is intended to show that the processor implementation under test implemented the ISA as specified and the specification was interpreted by the processor developers as intended by the specification authors.

The methodology for architectural compliance testing described in these two documents is based on scenarios. Each scenario describes a set of tests that should be performed, and the successful execution of all of these tests is necessary for complete compliance testing. There are two general categories of scenarios: instruction-driven scenarios and mechanism-driven scenarios.

Instruction-driven scenarios define tests that execute a single instruction and are based on definitions of instruction behavior in the architecture specification. Each scenario deals with an aspect of the instruction behavior, such as setting a specific register field. For each instruction, executing all of its related scenarios is necessary for fully testing the interpretation of the instruction description.

Mechanism-driven scenarios require execution of a sequence of one or more instructions and are based on definitions of mechanisms in the architecture specification, which may involve interactions between several instructions or architectural resources. Each scenario describes a different sequence of events related to the mechanism and executing all of the related scenarios is necessary for complete checking of the mechanism interpretation.

Now back to the question from the beginning of this blog: How will the Compliance Work Group handle ISA compliance with the POWER ISA be open-sourced? A new OpenPOWER Work Group will be formed to focus on the Power ISA activities, including documenting POWER ISA Subset definition and requirements. The Compliance Work Group will develop OpenPOWER ISA Compliance Definition specifications for the POWER ISA Subsets to give compliance guidance to ensure that software shown to execute properly on one compliant processor implementation will execute properly on a different also compliant processor implementation of the same ISA Subset.

If you have comments you would like to make on the OpenPOWER ISA Compliance Definition documents, you can submit them to the Compliance Work Group by emailing: [openpower-isa-thts@mailinglist.openpowerfoundation.org](mailto:openpower-isa-thts@mailinglist.openpowerfoundation.org).
