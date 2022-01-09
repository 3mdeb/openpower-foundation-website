---
title: Power Vector Library 


tags:
  - software
  - vector
  - vsx
  - vmx
  - powervector
  - library
date: 2022-01-08
draft: false
---

The Power Vector Library are header files that contain useful functions leveraging the PowerISA Vector Facilities :
Vector Multimedia Extension (VMX AKA Altivec) and Vector Scalar Extension (VSX). Larger functions like
quadword multiply and multiple quadword multiply and madd are large enough to justify CPU specific and tuned run-time libraries.
The user can choose to bind to platform specific static archives or dynamic shared object libraries which automatically
(dynamic linking with IFUNC resolves) select the correct implementation for the CPU it is running on.  

The goal of this project to provide well crafted implementations of useful vector and large number operations :

- Provide equivalent functions across versions of the PowerISA.
  For example the Vector Multiply-by-10 Unsigned Quadword operations introduced in PowerISA 3.0 (POWER9) can be
  implement in a few vector instructions on earlier PowerISA versions.
- Provide equivalent functions across versions of the compiler.
  For example builtins provided in later versions of the compiler can be implemented as inline functions with inline asm in earlier compiler versions.
- Provide higher order functions not provided directly by the PowerISA.
  For example vector SIMD implementation for ASCII ``__isalpha``, etc.
  Another example full ``__int128`` implementations of Count Leading Zeros, Population Count, and Multiply.
- Provide optimized run-time libraries for quadword integer multiply and multi-quadword integer multiply and add.

