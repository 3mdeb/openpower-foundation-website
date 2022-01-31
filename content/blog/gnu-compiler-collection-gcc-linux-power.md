---
title: "GNU Compiler Collection (GCC) for Linux on Power"
date: "2018-07-12"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_[This article was originally published by IBM](https://developer.ibm.com/linuxonpower/2018/06/28/gnu-compiler-collection-gcc-linux-power/)_.

By [Bill Schmidt](https://developer.ibm.com/linuxonpower/author/wschmidt-2/)

The GNU Compiler Collection (GCC) is the standard set of compilers shipped with all Enterprise Linux distributions. IBM’s Linux on Power Toolchain team supports GCC for Linux on Power, providing enablement and exploitation of new features for each processor generation, and improved code generation for better performance. GCC includes a C compiler (gcc), a C++ compiler (g++), a Fortran compiler (gfortran), a Go compiler (gccgo), and several others.

Because Linux distributors build all of their packages with the same GCC compilers that they ship, for stability reasons GCC is not updated to new versions over time on enterprise distributions. Thus it is often the case that the default GCC on a system is too old to support all features for the most modern processors. It is highly recommended that you use as recent a version of GCC as possible for compiling production quality code.

One way to obtain the most recent compilers (and libraries) is to install the [IBM Advance Toolchain](https://developer.ibm.com/linuxonpower/advance-toolchain/). A new version of the Advance Toolchain is released each August, based upon the most recent GCC compilers and core system libraries available. The Advance Toolchain is free to download, and is fully supported through IBM’s Support Line for Linux Offerings. IBM often includes additional optimizations in the Advance Toolchain that were not completed in time for the base release.

If you are a do-it-yourselfer, you can also download the source for the most recent official GCC releases from the Free Software Foundation’s website. A list of releases, and a link to the mirror sites from which the code can be downloaded, can be found here: [https://gcc.gnu.org/releases.html](https://gcc.gnu.org/releases.html) Instructions for installing the software can be found here: [https://gcc.gnu.org/install/](https://gcc.gnu.org/install/) A sample configuration command for compilers that will generate POWER8 code is available from [GCC for Linux on Power user community](https://developer.ibm.com/linuxonpower/compilers-linux-power/gnu-compiler-collection-gcc/).

Advice for compiler options for the best performance may be found here: [https://developer.ibm.com/linuxonpower/compiler-options-table/](https://developer.ibm.com/linuxonpower/compiler-options-table/)

Welcome to the [GCC for Linux on Power user community](https://developer.ibm.com/linuxonpower/compilers-linux-power/gnu-compiler-collection-gcc/)!
