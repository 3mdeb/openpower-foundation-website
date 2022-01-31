---
title: "New OpenPOWER Software Distribution Puts Deep Learning a Click Away"
date: "2016-05-27"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Michael Gschwind, Chief Engineer, Machine Learning and Deep Learning, IBM Systems_

I am pleased to announce that several major deep learning frameworks are **[now available](http://ibm.co/1YpWn5h)** on OpenPOWER as software "distros" (distributions) that are easily installable using the Ubuntu system installer.

![open key new 5](images/open-key-new-5.jpg)

As evidenced by new deep learning announcements and use cases from IBM Power Systems users like [University of Maryland Baltimore County](http://www.techtimes.com/articles/157356/20160510/umbc-ibm-collaborate-cybersecurity.htm), [the University of Illinois](http://www.zdnet.com/article/ibm-is-building-a-cognitive-computing-research-center-with-the-university-of-illinois/), and the [STFC-Hartree Centre](http://insidehpc.com/2015/06/uk-hartree-center-partners-with-ibm-on-big-data/), OpenPOWER is fast emerging as the premier platform for cognitive computing.

## Why Deep Learning?

Deep learning, or the use of multi-layer neural networks, has revolutionized speech recognition, natural language processing, and computer vision, and continues to revolutionize IT due to availability of rich data sets, new methods for accelerating neural network training and extremely fast hardware with GPU accelerators.

Deep Learning can be used from safety systems to personal assistants to enterprise systems. For example, driver assist technologies rely on machine and deep learning patterns to recognize objects in a rapidly changing environment and personal digital assistant technology is learning to categorize e-mail, text messages, and other content based on context.  In the enterprise, machine and deep learning applications can identify high value sales opportunities, enable smart call center automation, detect and react to intrusion or fraud, and suggest solutions to technical or business problems.

## Key Deep Learning Frameworks on OpenPOWER

Frameworks now available on OpenPOWER as pre-built binaries optimized for GPU acceleration include:

- **[Caffe](http://caffe.berkeleyvision.org/)**, a dedicated artificial neural network (ANN) training environment developed by the Berkeley Vision and Learning Center at the University of California at Berkeley
- **[Torch](http://torch.ch/)**, a framework consisting of several ANN modules built on an extensible mathematics library
- **[Theano](http://deeplearning.net/software/theano/)**, another framework consisting of several ANN modules built on an extensible mathematics library

In addition to pre-built and optimized binaries for OpenPOWER with acceleration we’ve ensured that these environments may be built from the source repository for those who prefer to compile their own binaries.   We've also enabled the DL4J (Deep Learning 4 Java), TensorFlow and CNTK frameworks for POWER and are working with these communities to ensure POWER support for these environments out-of-the-box.

## POWER8: Ideal for Deep Learning

POWER8 is ideal for deep learning, big data, and machine learning due to its high performance, large caches, 2x-3x higher memory bandwidth, very high I/O bandwidth, and of course, tight integration with GPU accelerators. POWER8’s parallel, multi-threaded architecture with high memory and I/O bandwidth is particularly well adapted to ensure that GPUs are used to their fullest potential. Today, these software packages are available on the [IBM Power System 822LC](https://www.ibm.com/marketplace/cloud/high-performance-computing/us/en-us) server that features two POWER8 CPUs along with two NVIDIA Tesla K80s.

We are currently working on optimizing the deep learning software to take advantage of the [next generation IBM Power Systems server that will have POWER8 CPUs connected by the high-speed NVLink interface directly to NVIDIA Tesla P100 (Pascal) GPU accelerators](https://www.ibm.com/blogs/systems/ibm-power8-cpu-and-nvidia-pascal-gpu-speed-ahead-with-nvlink/). This brings a huge advantage to cognitive computing applications like deep learning by giving applications running on the GPU fast access to large system memory via the NVLink interface to the CPU.

Coupled with the higher performance POWER8 CPUs, the overall workflow for applications like voice recognition, natural language processing, and computer vision that employ deep learning benefits from a massive performance leap thanks to data-centric system design and optimization.

## [To get started with the MLDL frameworks, download the installation instructions here](http://ibm.co/1YpWn5h).

Contact me at [mkg@us.ibm.com](mailto:mkg@us.ibm.com) to get started with an evaluation.

* * *

[![](images/33601413.jpg)](https://openpowerfoundation.org/wp-content/uploads/2016/02/mkg.jpeg)_Dr. Michael Gschwind is Chief Engineer for Machine Learning and Deep Learning for IBM Systems where he leads the development of hardware/software integrated products for cognitive computing. During his career, Dr. Gschwind has been a technical leader for IBM's key transformational initiatives, leading the development of the OpenPOWER Hardware Architecture as well as the software interfaces of the OpenPOWER Software Ecosystem. In previous assignments, he was a chief architect for Blue Gene, POWER8, POWER7, and Cell BE. Dr. Gschwind is a Fellow of the IEEE, an IBM Master Inventor and a Member of the IBM Academy of Technology._
