---
title: "Deep Learning Goes to the Dogs"
date: "2016-11-10"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Indrajit Poddar, Yu Bo Li, Qing Wang, Jun Song Wang, IBM_

These days you can see machine and deep learning applications in so many places. Get driven by a [driverless car](http://www.bloomberg.com/news/features/2016-08-18/uber-s-first-self-driving-fleet-arrives-in-pittsburgh-this-month-is06r7on). Check if your email is really conveying your sense of joy with the [IBM Watson Tone Analyzer](https://tone-analyzer-demo.mybluemix.net/), and [see IBM Watson beat the best Jeopardy player](https://www.youtube.com/watch?v=P0Obm0DBvwI) in the world in speed and accuracy. Facebook is even using image recognition tools to suggest tagging people in your photos; it knows who they are!

## Barking Up the Right Tree with the IBM S822LC for HPC

We wanted to see what it would take to get started building our very own deep learning application and host it in a cloud. We used the open source deep learning framework, [Caffe](http://caffe.berkeleyvision.org/), and example classification Jupyter notebooks from GitHub, like [classifying with ImageNet](http://nbviewer.jupyter.org/github/BVLC/caffe/blob/master/examples/00-classification.ipynb). We found several published trained models, e.g. GoogLeNet from the [Caffe model zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo). For a problem, we decided to use dog breed classification. That is, given a picture of a dog, can we automatically identify the breed? This is actually a [class project](http://cs231n.stanford.edu/) from Stanford University with student reports, such as [this one](http://cs231n.stanford.edu/reports/fcdh_FinalReport.pdf) from David Hsu.

We started from the [GoogLeNet model](https://github.com/BVLC/caffe/tree/master/models/bvlc_googlenet) and created our own model trained on the [Stanford Dogs Dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/) using a system similar to the [IBM S822LC for HPC systems with NVIDIA Tesla P100 GPUs](https://blogs.nvidia.com/blog/2016/09/08/ibm-servers-nvlink/) connected to the CPU with NVIDIA NVLink. As David remarked in his report, without GPUs, it takes a very long time to train a deep learning model on even a small-sized dataset.

Using a previous generation IBM S822LC OpenPOWER system with a NVIDIA Tesla K80 GPU, we were able to train our model in only a few hours. The [IBM S822LC for HPC systems](http://www-03.ibm.com/systems/power/hardware/s822lc-hpc/) not only features the most powerful NVIDIA Tesla P100 GPUs, but also two IBM POWER8 processors interconnected with powerful [NVIDIA NVLink adapters](https://en.wikipedia.org/wiki/NVLink). These systems make data transfers between main memory and GPUs significantly faster compared to systems with PCIe interconnects.

## Doggy Docker for Deep Learning

We put [our Caffe model and our classification code](https://github.com/Junsong-Wang/pet-breed) written in Python into a web application inside a Docker container and deployed it with Apache Mesos and Marathon. Apache Mesos is an open source cluster management application with fine-grained resource scheduling features which now recognize [GPUs](http://www.nvidia.com/object/apache-mesos.html) as cluster-wide resources.

In addition to Apache Mesos, it is possible to run cluster managers, such as Kubernetes, Spectrum Conductor for Containers, and Docker GPU management components, such as [nvidia-docker](https://github.com/NVIDIA/nvidia-docker) on OpenPOWER systems (see [presentation](http://www.slideshare.net/IndrajitPoddar/enabling-cognitive-workloads-on-the-cloud-gpus-with-mesos-docker-and-marathon-on-power)). In addition to Caffe, it is possible to run other [popular deep learning frameworks and tools](https://openpowerfoundation.org/blogs/deep-learning-options-on-openpower/) such as Torch, Theano, DIGITS and [TensorFlow](https://www.ibm.com/developerworks/community/blogs/fe313521-2e95-46f2-817d-44a4f27eba32/entry/Building_TensorFlow_on_OpenPOWER_Linux_Systems?lang=en) on OpenPOWER systems.

This [lab tutorial](http://www.slideshare.net/IndrajitPoddar/fast-scalable-easy-machine-learning-with-openpower-gpus-and-docker) walks through some simple sample use cases. In addition, some cool examples can be seen from the results of the recently concluded [OpenPOWER Developer Challenge](https://openpowerfoundation.org/blogs/openpower-developer-challenge-finalists/).

## This Dog Will Hunt

Our little GPU-accelerated pet breed classification micro-service is running in a Docker container and can be accessed at this [link](http://129.33.248.88:31001/) from a mobile device or laptop. See for yourself!

For example, given this image link from a Google search for "dog images", [https://www.petpremium.com/pets-pics/dog/german-shepherd.jpg](https://www.petpremium.com/pets-pics/dog/german-shepherd.jpg), we got this correct classification in 0.118 secs:

![German Shepard Deep Learning Dogs](images/dl-dogs-1.png)

You can also spin up your own GPU Docker container with deep learning libraries (e.g. Caffe) in the [NIMBIX cloud](https://platform.jarvice.com/landing) and train your own model and develop your own accelerated classification example.

![dl-dogs-2](images/dl-dogs-2.png)

Give it a try and share your screenshots in the comments section below!
