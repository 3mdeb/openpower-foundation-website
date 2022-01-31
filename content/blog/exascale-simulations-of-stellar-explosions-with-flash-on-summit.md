---
title: "Exascale Simulations of Stellar Explosions with FLASH on Summit"
date: "2019-01-24"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_Featuring OpenPOWER Member: [Oak Ridge National Laboratory](https://www.ornl.gov/)_

By [Ganesan Narayanasamy](https://www.linkedin.com/in/ganesannarayanasamy/), senior technical computing solution and client care manager, IBM

At the [3rd OpenPOWER Academic Discussion Group Workshop](https://www.linkedin.com/pulse/openpower-3rd-academia-workshop-updates-ganesan-narayanasamy/), developers using OpenPOWER platforms shared case studies on the work they’re doing using OpenPOWER platforms. One particularly interesting session was led by [James Austin Harris](https://www.olcf.ornl.gov/directory/staff-member/james-harris/), postdoctoral research associate and member of the FLASH Center For Accelerated Application Readiness (CAAR) project at Oak Ridge National Laboratory (ORNL).

Harris and his group at ORNL study supernovae and their nucleosynthetic products to improve our understanding of the origins of the heavy elements in nature. His session focused on exascale simulations of stellar explosions using FLASH. FLASH is a publicly available, component-based MPI+OpenMP parallel, adaptive mesh refinement (AMR) code that has been used on a variety of parallel platforms from astrophysics, high-energy-density physics, and more. It’s ideal for studying nucleosynthesis in supernovae due to its multi-physics and AMR capabilities.

The work is primarily focused on increasing physical fidelity by accelerating the nuclear burning module and associated load balancing. And using [Summit](https://www.olcf.ornl.gov/summit/), [the most powerful supercomputer in the world](https://www.top500.org/news/us-regains-top500-crown-with-summit-supercomputer-sierra-grabs-number-three-spot/), had an enormous impact.

Summit GPU performance fundamentally changes the potential science impact by enabling large-network (160 or more nuclear species) simulations. Preliminary results on Summit indicate the time for 160-species run on Summit was roughly equal to 13-species previously run on Titan. In other words, greater than 100x the computation at an identical cost.

Overall the CAAR group has had a very positive experience with Summit, and still have more work to do including exploring hydrodynamics, gravity and radiation transport.

View Harris’ full session video and slides below.

https://www.youtube.com/watch?v=5e6IUzl6A6Q

<iframe style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/key/xZtUdi7A6afbi" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>

**[Towards Exascale Simulations of Stellar Explosions with FLASH](//www.slideshare.net/ganesannarayanasamy/towards-exascale-simulations-of-stellar-explosions-with-flash "Towards Exascale Simulations of Stellar Explosions with FLASH")** from **[Ganesan Narayanasamy](https://www.slideshare.net/ganesannarayanasamy)**
