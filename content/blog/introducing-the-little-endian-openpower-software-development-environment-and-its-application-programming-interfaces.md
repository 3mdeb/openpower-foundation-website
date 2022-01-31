---
title: "Introducing the Little-Endian OpenPOWER Software Development Environment  and its application programming interfaces"
date: "2015-01-16"
categories: 
  - "blogs"
---

Presented by: [Michael Gschwind](https://www.linkedin.com/profile/view?id=7012740&authType=NAME_SEARCH&authToken=oq4A&locale=en_US&srchid=32272301421438067339&srchindex=1&srchtotal=9&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A32272301421438067339%2CVSRPtargetId%3A7012740%2CVSRPcmpt%3Aprimary)

Over the past three decades, the Power Architecture has been an important asset in IBM’s systems strategy.  During the time, Power-based systems powered desktops, technical workstations, embedded devices, game consoles, supercomputers and commercial UNIX servers.

The ability to adapt the architecture to new requirements has been key to its longevity and success.  Over te past several years, a new class of computing solutions has emerged in the form of dedicated data center scale computing platforms to power services such as search and social computing. Data center-level applications most often involve data discovery and/or serving from large repositories.  Applications may either be written in traditional object-oriented languages such as C++, or in new dynamic scriptiong languages such as JavaScript, PHP, Python, Ruby, etc.

Because many datacenters use custom-designed servers, these applications have suffered from lock-in into merchant-silicon processors optimized for desktop environments.  The new Open Power consortium creates an alternative to the x86 lock in, by creating an open source ecosystem that offers ease of porting from processors currently used in datacenters.

Unix and Linux applications have offered great portability in the past, but required some investment to avoid processor-specific code patterns.  To simplify porting of applications to the new Open Power environment, we reengineered the Open Power environment to simplify porting of software stacks and entire systems.

One particularly pervasive dependence is  byte ordering of data.  Byte ordering affects both the layout of data in memory, and of disk-based data repositories. While Power had supported both big-endian (most significant byte first) and little-endian (least significant byte first) data orderings, common Power environments have always used big-endian ordering.  To address endian-ness, Power8 was defined to offer the same high performance for big- and little-endian applications.  Building on that hardware capability, Open Power defines a new little-endian execution environment.  The new little-endian environment exploits little-endian execution.  In addition compiler built-ins functions handle transformation of data orderings that cannot be readily changed with a endian configuration switch, such as the ordering of vector elements in the SIMD execution units.

Introducing a new data layout necessarily breaks binary compatibility which created an opening to create a new Application Binary Interface governing the interoperation of program modules, such as data layout and function calling conventions.

To respond to changes in workload behavior and programming patterns, we co-optimized hardware and software to account for evolution of workloads since the original introduction of Power: 1.        Growth in memory and data sizes: In modern applications, external variables are accessed via data dictionaries (GOT or TOC) holding the address of all variables.  The original IBM GOT to access global variables was restricted to 64KB, or 8000 variables, per module reflecting the ability to use 16bit offsets in Power load and store instructions, which was becoming a limitation for enterprise applications and complicated the application build process and/or degraded performance.

Power8 can combine multiple instructions into a single internal instruction with a large 4GB offset  We introduced a new “medium code model” in the ABI which takes advantage of displacement fusion to support GOTs with up to 500 million variables.  By default, compilers and linkers generate fusable references for the medium code model.

2\.        Accelerate data accesses by “inlining” data in the dictionary: With the growth in dictionary size enabled by displacement fusion, it becomes possible to include data objects in the GOT rather than only including a pointer to the object.  This improves reduces the amount of accesses necessary to retrieve application data from emmory and improves cache locality.

3\.         Eliminate penalties for data abstraction: To make object oriented programs as efficient as their FORTRAN equivalent, we expanded the passing of input and output parameters  in registers to classes.  Classes can now use up to eight floating point or vector registers per input or output parameter.  This makes it possible to code classes for complex numbers, vertices, and other abstract types as efficient as built-in types.

4\.        Accelerate function calls: Object oriented programming has led to a marked shift in programming patterns in application programs with the average size of application programs dropping from millions of instructions per function for FORTRAN codes to tens of instructions in object oriented applications.  Consequently, reducing the fixed cost per function invocation is more important than before.

Previously, the Power ABI made initializing a callee’s entire environment the responsibility of glue code hidden from programmers and compilers on cross module calls.  To ensure environments are properly initialized for all languages, the generated glue code had to conservatively assume for these functions that addressability must be established for the new module.  Linux requires all externally visible functions to be resolved at runtime, extending the cost of dynamic linking to most functions that will ultimately resolve to calls within a module.

The new ABI makes the called function responsible to set up its own environment.  In addition, each function can have two entry points, one for local calls from within the same module to skip initialization code when no setup is necessary (this local entry point can be used either for direct calls, or via the dynamic linkage code).

5\.        Simplify and accelerate function pointer calls: The previous Power ABI had focused on providing functional completeness by representing each function pointer as a data structure (sometimes called a “function descriptor”) encapsulating static and dynamic environments with 3 pointers for instruction address, static and dynamic environment, to support a broad and diverse set of languages, including FORTRAN, Algol, PL/1, PL.8, PL.9, Pascal, Modula-2, and assembly.  Using such a function pointer structure, each caller could set up the environment for the callee when making a function pointer call.

Alas, with the introduction of self-initializing functions and no practical need to optimize performance for Pascal and Modula-2, the function descriptor offers little advantages, but incurs three extra memory references that must be made, and that are in the critical path of function call and data accesses.  Thus, the new ABI represents function pointers as the instruction address of a function’s first instruction.

In addition to these ABI improvements, the new OpenPOWER software environment also includes two new SIMD vector programming API optimized for the little-endian programming environment that uses fully little-endian conventions for referencing data structures and vector elements within the Power SIMD vector processing unit.  Where necessary, the compiler translates these new little-endian conventions to the underlying big-endian hardware conventions.  This is particularly useful to write native little-endian SIMD vector applications, or when porting SIMD vector code from other little-endian platforms.

In addition, the compilers can also generate code for big-endian vector conventions but using little-endian data – an environment that is particularly useful for porting libraries originally developed for big-endian Power, such as IBM’s tuned mathematics libraries which can support both big- and little-endian environments with a common source code.

In order to simplify programming and enable code portability, we define two SIMD vector programming models: a natively little-endian model and a portability model for code developed on or shared with big-endian Power platforms. To efficiently implement these models, we extend compiler optimizations to optimize vector intermediate representations to eliminate data reformatting primitives. In addition to describing a framework for SIMD portability and for optimizing SIMD vector refor-matting, we implement a novel vector operator optimization pass and measure its effectiveness: our implementation eliminates all data refor-matting from application vector kernels, resulting in a speedup of up 65% for a Power8 microarchitecture with two fully symmetric vector execution units.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Gschwind1_OPF2015_IBM_031315_final.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Gschwind1_OPF2015_IBM_031315_final.pdf)

[Back to Summit Details](javascript:history.back())
