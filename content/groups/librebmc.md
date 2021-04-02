---
title: "LibreBMC Workgroup"
wgtype: sig
chair: paullecocq
members:
  - ibm
  - google
  - antmicro
  - raptorcomputingsystems
  - vantosh
  - yadro
participation: "Public"
git: https://git.openpower.foundation/librebmc/librebmc/
discussion: https://discuss.openpower.foundation/c/sig/librebmc/
chat: https://chat.openpower.foundation/opf/channels/librebmc
date: 2021-03-15
draft: false
---

The LibreBMC SIG is a project workgroup whose purpose is to design an open source Baseboard Management Controller (BMC)
based oncompatible with the Open Compute Project (OCP) DC-SCM specification.  

The goal of the SIG is to design the adapter, based on the POWERower ISA processor core,
and all required interfaces and controls using open source tools in order to contribute to their growth and usability.  

The purpose of LibreBMC is to create a fully open source BMC design which will enhance the security of server management control
by being fully open and created with fully open source tooling.  The use of an FPGA adds flexibility and security as well.  

The requirement of a POWERower ISA core will drive the design and open release of a new or improved POWER soft-core.  

The scope of the LibreBMC SIG is the creation of a BMC adapter.
The scope will include an adapter design with an FPGA controller.
The FPGA will consist of a POWERower ISA core(s) that can run the OpenBMC stack (including LSB) and
manage the interface between system-management software and platform hardware.
The FPGA will also have all controls and interfaces required of a typical BMC.  

The LibreBMC adapter will conform be compatible with to the OCP DC-SCM specification.
Any changes to the OCP DC-SCM specification is outside the scope of this workgroup and will be handled through OCP.  

The adapter should meet the requirements to manage a variety of server architectures,
including but not limited to POWERower, ARM, and x86 based systems.  
Any changes to system reference designs or specifications to use the adapter are outside the scope of this workgroup.  

The scope of the workgroup will require the use of Linux, OpenBMC, open source tools, interfaces, and components.
Any modifications of these are outside the scope of the workgroup and will be handled through their respective bodies.  
