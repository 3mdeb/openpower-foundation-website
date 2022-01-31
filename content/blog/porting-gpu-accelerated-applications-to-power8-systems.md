---
title: "Porting GPU-Accelerated Applications to POWER8 Systems"
date: "2014-12-01"
categories: 
  - "blogs"
tags: 
  - "featured"
---

By Mark Harris

With the US Department of Energy’s announcement of plans to base [two future flagship supercomputers on IBM POWER CPUs, NVIDIA GPUs, and NVIDIA NVLink](http://devblogs.nvidia.com/parallelforall/how-nvlink-will-enable-faster-easier-multi-gpu-computing/) interconnect, many developers are getting started building GPU-accelerated applications that run on IBM POWER processors. The good news is that porting existing applications to this platform is easy. In fact, smooth sailing is already being reported by software development leaders such as Erik Lindahl, Professor of Biophysics at the Science for Life Laboratory, Stockholm University & KTH, developer of the[GROMACS](http://www.gromacs.org/) molecular dynamics package:

> The combination of POWER8 CPUs & NVIDIA Tesla accelerators is amazing. It is the highest performance we have ever seen in individual cores, and the close integration with accelerators is outstanding for heterogeneous parallelization. Thanks to the little endian chip and standard CUDA environment it took us less than 24 hours to port and accelerate GROMACS.

The [NVIDIA CUDA Toolkit version 5.5 is now available with POWER support](https://developer.nvidia.com/cuda-downloads-power8), and all future CUDA Toolkits will support POWER, starting with CUDA 7 in 2015. The Tesla Accelerated Computing Platform enables multiple approaches to programming accelerated applications: [libraries](https://developer.nvidia.com/gpu-accelerated-libraries) (cuBLAS, cuFFT, Thrust, AmgX, cuDNN and many more), compiler directives ([OpenACC](http://openacc.org/)), and [programming languages](https://developer.nvidia.com/language-solutions)(CUDA C++, CUDA Fortran, Python). You can use any of these approaches on GPU-accelerated systems based on x86, ARM, and now POWER CPUs, giving developers and system builders a choice of technologies for development and deployment.

![common_programming_approaches](images/common_programming_approaches.png)

The GPU portions of your application code don’t need to change when porting to POWER, and for the most part, neither do the CPU portions. GPU-accelerated code will generally perform the same on a POWER+GPU system compared to a similarly configured x86+GPU system (assuming the same GPUs in both systems).

Porting existing Linux applications to POWER8 Linux on Power (LoP) is simple and straightforward. The new POWER8 Little Endian (LE) mode makes application porting even easier by eliminating data conversion complications. Even so, when targeting a new CPU, it’s useful to know the tools available for achieving highest performance. By knowing a handful of useful compiler flags and directives, you can get performance improvements right out of the gate. The following flags and directives are specific to IBM’s xlc compiler.

## Useful Compiler Options and Directives

POWER8 is known for its low latency and its high-bandwidth memory and SMT8 capabilities (8 simultaneous hardware threads per core). The `-qarch` and `-qtune` flags come in handy for automatic exploitation of the POWER8 ISA.

\-qarch\=pwr8 \-qtune\=pwr8

For SMT-aware tuning, you can use sub-options to the `–qtune` option to specify the exact SMT mode. The options are `balanced`, `st` (single thread), `smt2`, `smt4` or `smt8`. SMT-aware optimizations allow for locality transformation and instruction scheduling.

In addition to SMT tuning, automatic data prefetching, automatic SIMDization and Higher-Order Transformations (HOT) on loops can be enabled using `-O3 –qhot`. For best out-of-the-box results, you can combine options.

\-O3 –qhot –qarch\=pwr8 –qtune\=pwr8

The automatic SIMDization compiler flag guarantees limited use of control flow pointers. The loop directive `#pragma independent`, can be used to tell the compiler a loop has no loop-carried dependencies. Use either the `restrict` keyword or the `disjoint` pragma when possible to tell the compiler that references do not share the same physical storage. Expose stride-one access when you can to limit strided accesses.

By adding these flags and directives to your bag of tricks, you can significantly improve your application performance out of the box.

## Get Started Now

![IBM Redbook on POWER8 optimization](images/IBM_Redbook_POWER8_cover.jpg)For more performance optimization and tuning techniques (e.g.: dynamic SMT selection, gcc specifics, etc.), please refer to Chapter 6 (Linux) in [“Performance Optimization and Tuning Techniques for IBM Processors, including IBM POWER8”](http://www.redbooks.ibm.com/abstracts/sg248171.html).

[Visit this IBM PartnerWorld page](https://www-304.ibm.com/partnerworld/wps/servlet/ContentHandler/stg_com_sys-hardware-for-solution-development) for information about developer access to POWER systems for evaluation, developing, and porting. POWER+GPU system access is available upon request.

Joining the [CUDA registered developer program](https://developer.nvidia.com/cuda-registered-developer-program) is your first step in establishing a working relationship with NVIDIA Engineering. Membership gives you access to the latest software releases and tools, notifications about special developer events and webinars, and access to report bugs and request new features.

The OpenPOWER Foundation was founded in 2013 as an open technical membership organization that will enable data centers to rethink their approach to technology. Member companies are enabled to customize POWER CPU processors and system platforms for optimization and innovation for their business needs. These innovations include custom systems for large-scale data centers, workload acceleration with GPUs, FPGAs or advanced I/O, platform optimization for SW appliances, and advanced hardware technology exploitation. Visit [openpowerfoundation.org](https://openpowerfoundation.org/) to learn more.
