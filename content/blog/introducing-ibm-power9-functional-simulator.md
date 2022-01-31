---
title: "Introducing IBM® POWER9 Functional Simulator"
date: "2018-02-09"
categories: 
  - "blogs"
tags: 
  - "openpower-foundation"
  - "power-systems"
  - "power9"
  - "power9-functional-simulator"
---

By Leif Reinert, Bradford Thomasson and Saif Abrar

As we launch POWER9, our IBM Cognitive Systems Simulation team is proud to introduce the POWER9 Functional Simulator as a new publicly available simulation environment. [Click here](https://www-304.ibm.com/webapp/set2/sas/f/pwrfs/pwr9/home.html) to download the POWER9 Functional Simulator from our website.

By implementing the functional behavior of all core units, as well as the generalized simulation of the memory, disk, network, and system console, our simulator enables execution of the entire software stack including loading, booting and running a little-endian Linux environment on a local x86 host. Using the TCL command-line interface then allows users to customize system initialization and processor state control.

Simulating the full Power ISA instruction set as implemented in POWER9, this tool serves as a vehicle for education, new application development, and porting of existing Linux applications to the POWER9 architecture.

Features/support available in the simulator include:

- POWER9 hardware reference model
- Full instruction set simulator for Power ISA as implemented in POWER9
- Models complex SMP effects
- Architectural modeled areas:
    - Functional behavior of all units (Load/Store, FXU, FPU, VMX, VSX, etc.)
    - Exceptions and Interrupt handling
    - Address translation, both Paravirtualized HPT and two-level Radix Tree
    - Memory and basic translation cache modeling (SLBs, TLBs, ERATs)
- Linux and Hypervisor development and debug platform
- TCL command-line interface provides:
    - Custom user initialization scripts
    - Processor state control for debug: Step, Run, Cycle run-to, Stop, etc.
    - Register and Memory R/W interaction

We have already seen how this capability, in addition to support for the Software Development Kit (SDK) for Linux on Power, has provided OpenPOWER partners with a powerful set of features for development projects such as:

- Optimization of compilers
- Testing of open-source firmware and upstream Linux kernels
- Development of execution-driven performance models
- Creation of early software prototyping environments

The POWER9 Functional Simulator’s instruction tracing feature and its companion tools allow users to optimize their code by analyzing the behavior on a microarchitectural level. User-controlled instruction traces, driven by workloads executed on the POWER9 Functional Simulator, can be digested by post-processing tools that generate a cycle accurate representation of the POWER9’s pipeline stages. Each instruction can be analyzed throughout the pipeline using graphical and statistical tools. This provides users with all the details necessary to optimize their code and maximize performance.

Our team is very open to feedback and questions. For all technical inquiries and suggestions, please reach out to our Cognitive Systems Simulation team through the [Customer Connect Support Channel](https://www.ibm.com/technologyconnect/issuemgmt/home.xhtml).
