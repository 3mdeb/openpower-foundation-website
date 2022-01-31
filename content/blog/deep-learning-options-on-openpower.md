---
title: "Deep Learning Options on OpenPOWER Expand with New Distributions"
date: "2016-09-14"
categories: 
  - "blogs"
tags: 
  - "featured"
  - "deep-learning"
  - "machine-learning"
  - "cognitive"
---

_By Michael Gschwind, Chief Engineer, Machine Learning and Deep Learning, IBM Systems_

![open key new 5](images/open-key-new-5.jpg)

I am pleased to announce a major update to the deep learning frameworks available for OpenPOWER as software “distros” (distributions) that are as easily installable as ever using the Ubuntu system installer.

## Significant updates to Key Deep Learning Frameworks on OpenPOWER

Building on the great response to our first release of the Deep Learning Frameworks, we have made significant updates by refreshing all the available frameworks now available on OpenPOWER as pre-built binaries optimized for GPU acceleration:

- [**Caffe**](http://caffe.berkeleyvision.org/), a dedicated artificial neural network (ANN) training environment developed by the Berkeley Vision and Learning Center at the University of California at Berkeley is now available in two versions: the leading edge Caffe development version from UCB’s BVLC, and a Caffe version tuned Nvidia to offer even more scalability using GPUs.
- [**Torch**](http://torch.ch/), a framework consisting of several ANN modules built on an extensible mathematics library
- [**Theano**](http://deeplearning.net/software/theano/), another framework consisting of several ANN modules built on an extensible mathematics library

The updated Deep Learning software distribution also includes [**DIGITS**](http://deeplearning.net/software/theano/)**,** a graphical user interface to make users immediately productive at using the Caffe and Torch deep learning frameworks.

As always, we’ve ensured that these environments may be built from the source repository for those who prefer to compile their own binaries.

## New Distribution, New Levels of Performance

The new distribution includes major performance enhancements in all key  areas:

- **The** **OpenBLAS** linear algebra library includes enhancement to take full advantage of the [POWER vector-scalar instruction set](https://www.researchgate.net/publication/299472451_Workload_acceleration_with_the_IBM_POWER_vector-scalar_architecture) offering a manifold speedup to processing on POWER CPUs.
- **The Mathematical Acceleration Subsystem (****MASS****) for Linux** high-performance mathematical libraries are made available in freely distributable form and free of charge to accelerate cognitive and other Linux applications by exploiting the latest advances in mathematical algorithm optimization and advanced POWER processor features and in particular the [POWER vector-scalar instruction set](https://www.researchgate.net/publication/299472451_Workload_acceleration_with_the_IBM_POWER_vector-scalar_architecture).
- **cuDNN** v5.1 enables Linux on Power cognitive applications to take full advantage of the latest GPU processing features and the newest GPU accelerators.

## [To get started with or upgrade to the latest version of the MLDL frameworks, download the installation instructions](http://ibm.co/1YpWn5h).
