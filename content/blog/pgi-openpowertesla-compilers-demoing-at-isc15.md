---
title: "PGI OpenPOWER+Tesla Compilers Demo'ing at ISC'15"
date: "2015-07-13"
categories: 
  - "blogs"
tags: 
  - "featured"
---

By Patrick Brooks, PGI Product Marketing Manager

Last November at Supercomputing 2014, [we announced](http://nvidianews.nvidia.com/news/pgi-high-performance-computing-compilers-coming-to-ibm-power-systems) that the PGI compilers for high-performance computing were coming to the OpenPOWER platform. These compilers will be used on the [U.S. Department of Energy CORAL systems being built by IBM](http://www-03.ibm.com/press/us/en/pressrelease/45387.wss), and will be generally available on OpenPOWER systems in 2016. PGI compilers on OpenPOWER offer a user interface, language features, programming models and optimizations identical to PGI on Linux/x86. Any HPC application you are currently running on x86+Tesla using PGI compilers will re-compile and run with few or no modifications on OpenPOWER+Tesla, making your applications portable to any HPC systems in the data center based on OpenPOWER or x86 CPUs, with or without attached NVIDIA GPU compute accelerators. [PGI presented on this in detail](https://openpowerfoundation.org/blogs/pgi-compilers-for-openpower-platforms-which-will-enable-seamless-migration-of-multi-core-and-gpu-enabled-hpc-applications-from-linuxx86-to-openpower/) at the OpenPOWER foundation summit in March.

At ISC'15 in Frankfurt, Germany July 14-17, you can get a first peak at the PGI compilers for OpenPOWER at the PGI stand (#1051) in the ISC exhibition hall. An early version of the compilers is already in use at Oak Ridge National Laboratory (ORNL), one of the two DOE sites where the IBM-developed CORAL supercomputers will be installed. For the ISC demo, the PGI Accelerator C/C++ compilers are being shown running on a remote [IBM S824L OpenPOWER Linux server](http://www-03.ibm.com/systems/power/hardware/s824l/index.html) with an attached [NVIDIA Tesla K40 GPU](http://www.nvidia.com/object/tesla-servers.html). These are pre-production PGI compilers, but all GCC 4.9 compatibility features, [OpenACC 2.0](https://developer.nvidia.com/openacc) features and interoperability with CUDA Unified Memory are enabled. The system is running [Ubuntu Linux](https://openpowerfoundation.org/blogs/how-ubuntu-is-enabling-openpower-and-innovation-randall-ross-canonical/) and NVIDIA CUDA 7.0.

These compilers are being developed for future generation, closely coupled IBM OpenPOWER CPUs and NVIDIA GPUs. To demonstrate the capabilities they already have, PGI is showing how its pgc++ compiler for OpenPOWER can build an OpenACC version of the well-known Lulesh Hydrodynamics Proxy application (mini-app). [Lulesh](https://codesign.llnl.gov/lulesh.php) was developed at the Lawrence Livermore National Laboratory (LLNL), which is the other site where the IBM-developed CORAL supercomputers will be installed.

Like most mini-apps, Lulesh is a relatively small code of only a few thousand lines, so it can be built and executed pretty quickly. Within those few thousand lines of code, 45 OpenACC pragmas are sprinkled in to enable parallel execution. Any C++ compiler that doesn’t implement OpenACC extensions ignores the pragmas, but with an OpenACC-enbled compiler like the one from PGI, they enable parallelization and offloading of compute intensive loops for execution on the NVIDIA K40 GPU. Here's what a section of the Lulush code with OpenACC pragmas looks like:

```

3267 Real_t *pHalfStep = Allocate<Real_t>(length) ;
3268
3269 #pragma acc parallel loop
3270 for (Index_t i = 0 ; i < length ; ++i) {
3271 e_new[i] = e_old[i] - Real_t(0.5) * delvc[i] * (p_old[i] + q_old[i])
3272 + Real_t(0.5) * work[i];
3273
3274 if (e_new[i] < emin ) {
3275 e_new[i] = emin ;
3276 }
3277 }
3278
3279 CalcPressureForElems(pHalfStep, bvc, pbvc, e_new, compHalfStep, vnewc,
3280 pmin, p_cut, eosvmax, length, regElemList);
3281
3282 #pragma acc parallel loop
3283 for (Index_t i = 0 ; i < length ; ++i) {
3284 Real_t vhalf = Real_t(1.) / (Real_t(1.) + compHalfStep[i]) ;
3285
3286 if ( delvc[i] > Real_t(0.) ) {
3287 q_new[i] /* = qq_old[i] = ql_old[i] */ = Real_t(0.) ;
3288 }
3289 else {
3290 Real_t ssc = ( pbvc[i] * e_new[i]
3291 + vhalf * vhalf * bvc[i] * pHalfStep[i] ) / rho0 ;
3292
3293 if ( ssc <= Real_t(.1111111e-36) ) {
3294 ssc = Real_t(.3333333e-18) ;
3295 } else {
3296 ssc = SQRT(ssc) ;
3297 }
3298
3299 q_new[i] = (ssc*ql_old[i] + qq_old[i]) ;
3300 }
3301
3302 e_new[i] = e_new[i] + Real_t(0.5) * delvc[i]
3303 * ( Real_t(3.0)*(p_old[i] + q_old[i])
3304 - Real_t(4.0)*(pHalfStep[i] + q_new[i])) ;
3305 }
3306
```

The PGI compilers have a nice feature where they report back to the user whether and how loops are parallelized, and give advice on how source code might be modified to enable more or better parallelization or optimization. When the above loops are compiled, the corresponding messages emitted by the compiler look as follows:

```

3267, Accelerator kernel generated
3270, #pragma acc loop gang, vector(128) /* blockIdx.x threadIdx.x */
3267, Generating copyout(e_new[:length])
```

Generating copyin(delvc\[:length\],p\_old\[:length\],q\_old\[:length\],e\_old\[:length\],work\[:length\])

Generating Tesla code

```

3279, Accelerator kernel generated
3283, #pragma acc loop gang, vector(128) /* blockIdx.x threadIdx.x */
3279, Generating copyin(p_old[:length],q_old[:length],pHalfStep[:length],bvc[:length])
```

Generating copy(e\_new\[:length\])

Generating copyin(pbvc\[:length\],qq\_old\[:length\],ql\_old\[:length\],delvc\[:length\],compHalfStep\[:length\])

Generating copy(q\_new\[:length\])

Generating Tesla code

The compiler generates an executable that includes both OpenPOWER CPU code and GPU-optimized code for any loops marked with OpenACC pragmas. It is a single executable usable on any Linux/OpenPOWER system, but which will offload loops for acceleration on any such system that incorporates NVIDIA GPUs. You can see in the messages that the PGI compiler is generating copyin/copyout calls to a runtime library that moves data back and forth between CPU memory and GPU memory. However, in this case the code is compiled to take advantage of CUDA Unified Memory, and when the executable is run those calls are ignored and the system automatically moves data back and forth. When the lulesh executable is run on the IBM S824L system, the output looks as follows:

tuleta1% make run150

./lulesh2.0 -s 150 -i 100

Running problem size 150^3 per domain until completion

Num processors: 1

Total number of elements: 3375000 To run other sizes, use -s <integer>.

To run a fixed number of iterations, use -i <integer>.

To run a more or less balanced region set, use -b <integer>.

To change the relative costs of regions, use -c <integer>.

To print out progress, use -p

To write an output file for VisIt, use -v

See help (-h) for more options Run completed:

Problem size = 150

MPI tasks = 1

Iteration count = 100

Final Origin Energy = 1.653340e+08

Testing Plane 0 of Energy Array on rank 0:

MaxAbsDiff = 1.583248e-08

TotalAbsDiff = 7.488936e-08

MaxRelDiff = 8.368586e-14

...

If you're at ISC this week, stop by to see the demo live and give us your feedback. We're working to add full support for Fortran and all of our remaining programming model features and optimizations, and plan to show another demo of these compilers at the conference this coming November in Austin, Texas. Soon thereafter in 2016, more and more HPC programmers will be able to port their existing PGI-compiled x86 and x86+Tesla applications to OpenPOWER+Tesla systems quickly and easily, with all the same PGI features and user interface across both platforms.

We'll keep you posted on our progress.

## About Pat Brooks

Patrick Brooks has been a Product Marketing Manager at PGI since 2004. Previously, he held several positions in technology marketing including product and marketing management at Intel and Micron, account management at Regis McKenna and independent consultant.
