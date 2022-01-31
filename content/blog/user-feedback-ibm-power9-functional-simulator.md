---
title: "User Feedback on the IBM® POWER9 Functional Simulator"
date: "2018-02-14"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "openpower-foundation"
  - "power9"
  - "power9-functional-simulator"
---

By Leif Reinert, Bradford Thomasson and Saif Abrar

Earlier this week, we introduced the availability of the POWER9 Functional Simulator. Our team is proud to offer the simulation environment, which can be [downloaded from our website](https://www-304.ibm.com/webapp/set2/sas/f/pwrfs/pwr9/home.html).

The POWER9 Functional Simulator has already been put to the test for a variety of use cases. Two early users shared their feedback with us on how the tool helped solve a problem they were facing.

**User Testimony 1:** 

### **Compiler optimization of GCC on POWER9**

Problem: LZ4 compression in the pipeline driven by the improper instruction sequence neg-and-cntlzd-subfic on POWER8. Dependency on the previous instruction in the sequence resulted in many ISU rejections due to sources not readily available resulted in reduced performance.

Instruction traces generated on the POWER8 Functional Simulator, then post processed and analyzed by “sim\_ppc” tools revealed an FXU dependency chain delaying instruction completion for the mentioned sequence of instructions.

Solution: For POWER9, the new instruction cnttzd (Count Trailing Zeros Dword) was utilized as a single instruction replacement. A comparison between the LZ4 compression simulations on the POWER8 and the POWER9 Functional Simulator and their post processing “sim\_ppc” companion tools revealed a significant performance gain by implementing the new instruction on POWER9.

**User Testimony 2:**

### **Compiler Comparison of LLVM vs GCC (Eigen-Quatmul workload compilation)**

Problem: GCC compiled version is 36% slower than LLVM compiled version.

GCC Compiled version of the Quatmul workload was executed on the POWER9 Functional Simulator and instruction traces were generated. Instruction traces post processed and analyzed on “sim\_ppc” tools revealed vector load issues before all four scalar stores, this resulted in multiple store-hit-load flushes until eventually all the stores executed ahead of the load.

Solution: Inserting an isync instruction between the scalar stores and the vector load, similar to LLVM, prevents store hit load flushes. The load keeps rejecting until the data is fully contained and then executes. Observed performance improvement of ~30%.

In bringing the POWER9 Functional Simulator and its companion tools to the public, we are excited to provide an ideal platform for engineers and developers to explore and continue to build out the POWER9 platform. If you have any technical inquiries or suggestions, please reach out to our Cognitive Systems Simulation team through the [Customer Connect Support Channel](https://www.ibm.com/technologyconnect/issuemgmt/home.xhtml).
