---
title: "Turbulence Simulations and Fine Grained Asynchronism for Pseudo-Spectral Codes"
date: "2019-04-01"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "summit"
  - "openpower-foundation"
  - "georgia-institute-of-technology"
  - "pseudo-spectral-codes"
  - "oak-ridge-national-laboratory"
---

By [Ganesan Narayanasamy](https://www.linkedin.com/in/ganesannarayanasamy/), senior technical computing solution and client care manager, IBM

Continuing our series of posts coming out of the [3](https://www.linkedin.com/pulse/openpower-3rd-academia-workshop-updates-ganesan-narayanasamy/)[rd](https://www.linkedin.com/pulse/openpower-3rd-academia-workshop-updates-ganesan-narayanasamy/) [OpenPOWER Academic Discussion Group Workshop](https://www.linkedin.com/pulse/openpower-3rd-academia-workshop-updates-ganesan-narayanasamy/), Kiran Ravikumar, a PhD student at the Georgia Institute of Technology spoke about fine grained asynchronism for pseudo-spectral codes and how it applies to turbulence.

Ravikumar discussed how turbulence is found everywhere in nature and engineering and covered the importance of performing huge turbulence simulations to better understand the fundamental physics in turbulent flows under conditions with disorderly fluctuations arising over a wide range of scales.

To do this effectively, Ravikumar emphasized the value of using [Summit](https://www.olcf.ornl.gov/summit/), [the most powerful supercomputer in the world](https://www.top500.org/news/us-regains-top500-crown-with-summit-supercomputer-sierra-grabs-number-three-spot/). With Summit, his team can benefit from 512 GB host memory per node and 16 GB GPU memory per GPU. This is a huge factor of difference between amount of memory on GPU and amount of memory on CPU. He also covered how Summit will allow for both faster copies and communication. Essentially, they’ll be able to run massive problem sizes with fewer nodes than any other machine.

Ravikumar detailed the successful development of a highly scalable GPU-accelerated algorithm for turbulence and 3DFFT exploiting unique features of Summit. He also emphasized the CUDA Fortran implementation that increases GPU speed by four at smaller problem sizes, with belief that it will hold up to larger problems using Summit.

Ravikumar and his team are excited by the potential for performing turbulence simulations at unprecdented resolution on Summit.

View Ravikumar’s full session [video](https://www.youtube.com/watch?v=_TlyHtqwc_4) and [slides](https://www.slideshare.net/ganesannarayanasamy/fine-grained-asynchronism-for-pseudospectral-codes-with-application-to-turbulence?ref=https://www.linkedin.com/pulse/openpower-3rd-academia-workshop-updates-ganesan-narayanasamy/).
