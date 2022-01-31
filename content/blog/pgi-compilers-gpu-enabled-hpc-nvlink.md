---
title: "New PGI compilers enable seamless migration of GPU-enabled HPC applications from Linux/x86 to NVLink-enabled OpenPOWER+Tesla"
date: "2016-11-15"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Doug Miles, director of PGI compilers & tools, NVIDIA Corporation_

NVIDIA introduced the first production release of the PGI Fortran, C and C++ compilers with OpenACC targeting Linux/OpenPOWER and Tesla computing systems, including IBM’s OpenPOWER LC servers that combine POWER8 CPUs with NVIDIA NVLink interconnect technology and NVIDIA Tesla GPU accelerators.

## **Simplifying Migration from Linux/x86 to Linux/OpenPOWER Processor-based Servers**

PGI for OpenPOWER enables easy porting of PGI-compiled HPC applications from Linux/x86 to Linux/OpenPOWER, often through a simple re-compile, including support for OpenMP 3.1, OpenACC and CUDA Fortran parallel programming. A good example is the WRF weather research and forecasting model, which together with its various support packages is comprised of over 800,000 lines of mostly Fortran source code. The OpenMP version of WRF 3.8.1 can be compiled on either Linux/OpenPOWER or Linux/x86 using the new PGI 16.10 compilers with identical makefiles, compiler options, source code and open source support packages:

![pgi1](images/pgi1.png)

## **Use at Oak Ridge National Laboratory** 

The PGI compiler suite for OpenPOWER is among the available tools Oak Ridge National Laboratory will use to build and run large HPC applications on x86 CPUs, OpenPOWER CPUs and NVIDIA GPUs using the same source code base.

“Porting HPC applications from one platform to another is a significant and challenging effort in the adoption of new hardware technologies,” said Tjerk Straatsma, Scientific Computing Group Leader at Oak Ridge National Laboratory. “Architectural and performance portability like this is critical to our application developers and users as we move from existing CPU-only and GPU-enabled applications on machines like Titan to DOE’s upcoming major systems including the Summit system we’re installing at ORNL.” The upcoming CORAL Summit system at ORNL will be based on POWER9 CPUs and NVIDIA Volta GPUs.

## **OpenACC: The Easy On-ramp to GPU Computing**

In addition to ease of porting between Linux/x86 and Linux/OpenPOWER platforms, the new PGI compilers support OpenACC directive-based GPU programming in Fortran, C and C++ for an easy on-ramp to GPU-computing with NVIDIA Tesla accelerators. As an example, consider this code fragment from the OpenACC version of the [CloverLeaf](https://github.com/UK-MAC/CloverLeaf_OpenACC/tree/6e641da68033cbbb6ca099efc0afd8b7520b601b) mini-app, originally developed by AWE in the UK:

66 !$ACC DATA &
 67 !$ACC PRESENT(density0,energy0,pressure,viscosity,volume,xarea) &
 68 !$ACC PRESENT(xvel0,yarea,yvel0) &
 69 !$ACC PRESENT(density1,energy1) &
 70 !$ACC PRESENT(xvel1,yvel1) &
 71 !$ACC PRESENT(volume\_change)
 72
 73   IF(predict)THEN
 74
 75 !$ACC KERNELS
 76     DO k=y\_min,y\_max
 77       DO j=x\_min,x\_max
 78
 79         left\_flux=  (xarea(j  ,k  )\*(xvel0(j  ,k  )+xvel0(j  ,k+1) &
 80                                     +xvel0(j  ,k  )+xvel0(j  ,k+1)))\*0.25\_8\*dt\*0.5
 81         right\_flux= (xarea(j+1,k  )\*(xvel0(j+1,k  )+xvel0(j+1,k+1) &
 82                                     +xvel0(j+1,k  )+xvel0(j+1,k+1)))\*0.25\_8\*dt\*0.5
 83         bottom\_flux=(yarea(j  ,k  )\*(yvel0(j  ,k  )+yvel0(j+1,k  ) &
 84                                     +yvel0(j  ,k  )+yvel0(j+1,k  )))\*0.25\_8\*dt\*0.5
 85         top\_flux=   (yarea(j  ,k+1)\*(yvel0(j  ,k+1)+yvel0(j+1,k+1) &
 86                                     +yvel0(j  ,k+1)+yvel0(j+1,k+1)))\*0.25\_8\*dt\*0.5
 87         total\_flux=right\_flux-left\_flux+top\_flux-bottom\_flux
 88
 89         volume\_change(j,k)=volume(j,k)/(volume(j,k)+total\_flux)
 90
 91         min\_cell\_volume=MIN(volume(j,k)+right\_flux-left\_flux+top\_flux-bottom\_flux &
 92                            ,volume(j,k)+right\_flux-left\_flux                      &
 93                            ,volume(j,k)+top\_flux-bottom\_flux)
 94
 95         recip\_volume=1.0/volume(j,k)
 96
 97         energy\_change=(pressure(j,k)/density0(j,k)+viscosity(j,k)/density0(j,k))\*   
            total\_flux\*recip\_volume
 98
 99         energy1(j,k)=energy0(j,k)-energy\_chang
 10
 101         density1(j,k)=density0(j,k)\*volume\_change(j,k
 10
 103       ENDD
 104     ENDD
 105 !$ACC END KERNELS
 106 ...

Compiling the code above targeting a Tesla GPU on a Linux/OpenPOWER IBM Minsky system with the PGI OpenACC Fortran compiler yields the following output from the compiler:

% pgfortran -fast -ta=tesla -Minfo -c PdV\_kernel.f90
 pdv\_kernel:
      66, Generating present(density1(:,:),energy1(:,:),
          pressure(:,:),viscosity(:,:),volume\_change(:,:),
          xarea(:,:),xvel1(:,:),yarea(:,:),density0(:,:),
          energy0(:,:),xvel0(:,:),yvel1(:,:),yvel0(:,:),volume(:,:))
      76, Loop is parallelizable
      77, Loop is parallelizable
          Accelerator kernel generated
          Generating Tesla code
          76, !$acc loop gang, vector(4) ! blockidx%y threadidx%y
          77, !$acc loop gang, vector(32) ! blockidx%x threadidx%x
       ...

The compiler scans the code between the OpenACC KERNELS and END KERNELS directives, determines the loops are parallelizable, and parallelizes the code for execution on a Tesla GPU.

The same code can be compiled for serial execution on any platform by any standard Fortran compiler, or with the PGI compiler on the IBM system the OpenACC directives can be processed to generate parallel code targeting the multicore OpenPOWER CPUs:

% pgfortran -fast -ta=multicore -Minfo -c PdV\_kernel.f90
 pdv\_kernel:
      76, Loop is parallelizable
          Generating Multicore code
          76, !$acc loop gang
      77, Loop is parallelizable
          3 loop-carried redundant expressions removed with 
               9 operations and 9 arrays
          Generated vector simd code for the loop
      ...

Cloverleaf compiled for OpenACC parallel execution across all 20 OpenPOWER CPU cores of an IBM Minsky server runs in about **17 seconds**. The identical source code compiled for execution on one Tesla Pascal P100 GPU in the same system runs in about **4 seconds**, providing a **4x speed-up** over multicore CPU execution.

## **NVLink: Tearing Down the Memory Wall Between CPUs and GPUs**

In addition to ease of porting between Linux/x86 and Linux/OpenPOWER platforms, the new PGI compilers enable interoperability of OpenACC and NVIDIA’s CUDA 8.0 Unified Memory features for Pascal GPUs. Specifying the -ta=tesla:managed option to the PGI OpenACC compilers enables this feature, in which most types of allocatable data are placed in CUDA Unified Memory. Movement of these variables and data structures between CPU main memory and GPU device memory is then managed by the CUDA memory manager on a page-by-page basis, rather than by the programmer using OpenACC directives or the compiler runtime system.

Programs developed in this mode can decrease initial development time substantially, as shown in a recent joint [webinar presented by NVIDIA and IBM](http://on-demand.gputechconf.com/gtc/2016/webinar/ibm-power-minsky-nvlink-webinar.mp4). The chart below shows the performance of the SPEC ACCEL 1.0 OpenACC benchmarks running on one Pascal-based Tesla P100 GPU when compiled using CUDA Unified Memory relative to the performance with user-directed and optimized data movement. On a Minsky system with NVLink between the POWER8 CPUs and Tesla P100 GPUs, the versions of the 15 SPEC ACCEL benchmarks compiled to use CUDA Unified Memory averages within 10% of the versions with user-directed data movement of all allocatable data:

![pgi2](images/pgi2-1024x535.png)

Three of the benchmarks (354.cg, 357.csp and 370.bt) use only static data, so the CUDA Unified Memory feature does not apply. The other 12 benchmarks all make substantial use of allocatable data.

"Easier programming methodologies like OpenMP and OpenACC are critical for the widespread adoption of GPU-accelerated systems," said Sumit Gupta, Vice President of High Performance Computing & Data Analytics, IBM. "The new PGI compilers take advantage of the high-speed NVIDIA NVLink connection between the POWER8 CPU and the NVIDIA Tesla P100 GPU accelerators, along with the page migration engine, to make it much easier to accelerate and enhance performance of high performance computing and data analytics workloads.”

PGI is demonstrating the PGI Accelerator compilers for OpenPOWER in booth 2131 at SC16 in Salt Lake City, Nov. 14–17. Additional information is available and the new PGI compilers are downloadable at [www.pgroup.com/openpower](http://www.pgroup.com/openpower).
