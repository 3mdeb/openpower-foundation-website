---
title: "Targeting GPUs using OpenMP Directives on Summit with GenASiS"
date: "2018-12-18"
categories: 
  - "blogs"
tags: 
  - "featured"
---

By [Ganesan Narayanasamy](https://www.linkedin.com/in/ganesannarayanasamy/), senior technical computing solution and client care manager, IBM

In the lead up to SC18 we held the [3rd OpenPOWER Academic Discussion Group Workshop](https://www.linkedin.com/pulse/openpower-3rd-academia-workshop-updates-ganesan-narayanasamy/). It was a perfect opportunity for members of academia working in supercomputing to share recent successes they have had developing on OpenPOWER platforms.

One such session was led by [Reuben Budiardja](https://www.olcf.ornl.gov/directory/staff-member/reuben-budiardja/), a computational scientist in the National Center for Computational Sciences at Oak Ridge National Laboratory. He is the lead developer of GenASiS, the General Astrophysics Simulation System, which has been used to study the role of fluid instabilities in supernova dynamics. GenASiS is written entirely in modern Fortran and, until recently, was CPU-only code.

Budiardja and his colleague [Christian Cardall](https://www.ornl.gov/staff-profile/christian-y-cardall) identified three potential paths that could be explored to transition to GPUs:

- CUDA – would require a rewrite of all computational kernels, a loss of Fortran semantics and interfacing with the rest of the Fortran code.
- CUDA Fortran – would be a non-standard extension to Fortran and would not easily fall back to standard Fortran.
- Directives (OpenMP) – would allow retention of Fortran semantics, and OpenMP 4.5 has excellent support for modern Fortran.

Using OpenMP Directives on [Summit](https://www.olcf.ornl.gov/summit/), [the most powerful supercomputer in the world](https://www.top500.org/news/us-regains-top500-crown-with-summit-supercomputer-sierra-grabs-number-three-spot/), produced strong results. In testing the 3D scaling of the [RiemannProblem](https://en.wikipedia.org/wiki/Riemann_problem), **the team realized a speed-up from 3.92X – 6.71X from 7 CPU to GPU**.

Pinned Memory was then used to take these results even further. While there is not yet a mechanism by which to use Pinned Memory in OpenMP, the team added a Fortran wrapper in GenASiS to optimize data transfers. Doing so provided an **additional speed-up of 1.7X – 2.0X**, providing an **overall speed-up of over 9X from 7 CPU threads**.

Budiardga concluded that OpenMP allows simple and effective porting of Fortran code to target GPUs, and this work has many implications. It will enable the team to perform higher-fidelity simulations and ensemble studies for trends in observables. In fact, the team is planning to perform ~200 2D grey transport supernova simulations, tens of 3D grey transport, and a handful of 3D spectral transport simulations. Moreover, this is the first step towards full [Boltzmann radiation transport](https://en.wikipedia.org/wiki/Boltzmann_equation) with exascale computing.

View Mr. Budiardga’s full session video and slides below.

<iframe src="https://www.youtube.com/embed/q3iN_EWTvqg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

<iframe style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/key/CTwRbjwNLrHMvz" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>

**[Targeting GPUs using OpenMP Directives on Summit with GenASiS: A Simple and Effective Fortran Experience](//www.slideshare.net/ganesannarayanasamy/targeting-gpus-using-openmp-directives-on-summit-with-genasis-a-simple-and-effective-fortran-experience "Targeting GPUs using OpenMP Directives on Summit with GenASiS: A Simple and Effective Fortran Experience")** from **[Ganesan Narayanasamy](https://www.slideshare.net/ganesannarayanasamy)**
