---
title: "Evaluating Julia for Deep Learning  on Power Systems + NVIDIA Hardware"
date: "2016-11-14"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Deepak Vinchhi, Co-Founder and Chief Operating Officer, Julia Computing, Inc._ 

Deep Learning is now ubiquitous in the machine learning world, with useful applications in a number of areas. In this blog post, we explore the use of Julia for deep learning experiments on Power Systems + NVIDIA hardware.

We shall demonstrate:

1. The ease of specifying deep neural network architectures in Julia and visualizing them. We use MXNet.jl, a Julia package for deep learning.
2. The ease of running Julia on Power Systems. We ran all our experiments on a PowerNV 8335-GCA, which has 160 CPU cores, and a Tesla K80 (dual) GPU accelerator. IBM and [OSUOSL](http://osuosl.org/) have generously provided us with the infrastructure for this analysis.

## **Introduction**

Deep neural networks have been around since the [1940s](http://www.psych.utoronto.ca/users/reingold/courses/ai/cache/neural4.html), but have only recently been deployed in research and analytics because of strides and improvements in computational horsepower. Neural networks have a wide range of applications in machine learning: vision, speech processing, and even [self-driving cars](https://blogs.nvidia.com/blog/2016/06/10/nyu-nvidia/). An interesting use case for neural networks could be the ability to drive down costs in medical diagnosis. Automated detection of diseases would be of immense help to doctors, especially in places around the world where access to healthcare is limited.

[Diabetic retinopathy](https://en.wikipedia.org/wiki/Diabetic_retinopathy) is an eye disease brought on by diabetes. There are over 126.2 million people in the world (as of 2010) with diabetic retinopathy, and this is [expected](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3491270/) to rise to over 191.2 million by 2030. According to the WHO in 2006, it [accounted](http://www.who.int/blindness/causes/priority/en/index5.html) for 5% of world blindness.

Hence, early automatic detection of diabetic retinopathy would be desirable. To that end, we took up an image classification problem using real clinical data. The data was provided to us by [Drishti Care](http://drishticare.org), which is a social enterprise that provides affordable eye care in India. We obtained a number of eye [fundus](https://en.wikipedia.org/wiki/Fundus_(eye)) images from a variety of patients. The eyes affected by retinopathy are generally marked by inflamed veins and cotton spots. The following picture on the left is a normal fundus image whereas the one on the right is affected by diabetic retinopathy.

![julia-1](images/Julia-1.png)

## **Setup**

We built MXNet from source with CUDA and OpenCV. This was essential for training our networks on GPUs with CUDNN, and reading our image record files. We had to build GCC 4.8 from source so that our various libraries could compile and link without error, but once we did, we were set up and ready to start working with the data.

## **The Hardware: IBM Power Systems**

We chose to run this experiment on an IBM Power System because, at the time of this writing, we believe it is the best environment available for this sort of work. The Power platform is ideal for deep learning, big data, and machine learning due to its high performance, large caches, 2x-3x higher memory bandwidth, very high I/O bandwidth, and of course, tight integration with GPU accelerators. The parallel multi-threaded Power architecture with high memory and I/O bandwidth is particularly well adapted to ensure that GPUs are used to their fullest potential.

We’re also encouraged by the industry’s commitment to the platform, especially with regard to AI, noting that NVIDIA made its premier machine learning-focused GPU (the Tesla P100) available on Power well before the x86, and that innovations like NVLink are only available on Power.

## **The Model**

The idea is to train a deep neural network to classify all these fundus images into infected and uninfected images. Along with the fundus images, we have at our disposal a number of training labels identifying if the patient is infected or not.

We used [MXNet.jl](https://github.com/dmlc/MXNet.jl), a powerful Julia package for deep learning. This package allows the user to use a high level syntax to easily specify and chain together large neural networks. One can then train these networks on a variety of heterogeneous platforms with multi-GPU acceleration.

As a first step, it’s good to load a pretrained model which is known to be good at classifying images. So we decided to download and use the [ImageNet model called Inception](https://research.googleblog.com/2016/03/train-your-own-image-classifier-with.html) with weights in their 39th epoch. On top of that we specify a simple classifier.

\# Extend model as we wish
 arch = mx.@chain mx.get\_internals(inception)\[:global\_pool\_output\] =>
 mx.Flatten() =>
 mx.FullyConnected(num\_hidden = 128) =>
 mx.Activation(act\_type=:relu) =>
 mx.FullyConnected(num\_hidden = 2) =>
 mx.WSoftmax(name = :softmax)

And now we train our model:

mx.fit(
 model,
 optimizer,
 dp,
 n\_epoch = 100,
 eval\_data = test\_data,
 callbacks = \[
 mx.every\_n\_epoch(save\_acc, 1, call\_on\_0=false),
 mx.do\_checkpoint(prefix, save\_epoch\_0=true),
 \],
eval\_metric = mx.MultiMetric(\[mx.Accuracy(), WMultiACE(2)\])
)

One feature of the data is that it is highly [imbalanced](http://machinelearningmastery.com/tactics-to-combat-imbalanced-classes-in-your-machine-learning-dataset/). For every 200 uninfected images, we have only 3 infected images. One way of approaching that scenario is to penalize the network heavily for every infected case it gets wrong. So we replaced the normal Softmax layer towards the end of the network with a _weighted_ softmax. To check whether we are overfitting, we selected multiple [performance metrics](http://machinelearningmastery.com/classification-accuracy-is-not-enough-more-performance-measures-you-can-use/).

However, from our [cross-entropy](https://www.wikiwand.com/en/Cross_entropy) measures, we found that we were still overfitting. With fast training times on dual GPUs, we trained our model quickly to understand the drawbacks of our current approach.

\[caption id="attachment\_4362" align="aligncenter" width="625"\]![Performance Comparison between CPU and GPU on Training](images/julia-2-1024x587.png) Performance Comparison between CPU and GPU on Training\[/caption\]

Therefore we decided to employ a different approach.

The second way to deal with our imbalanced dataset is to generate smaller, more balanced datasets that contained roughly equal numbers of uninfected images and infected images. We produced two datasets: one for training and another for cross validation, both of which had the same number of uninfected and infected patients.

Additionally, we also decided to shuffle our data. Every epoch, we resampled the uninfected images from the larger pool of uninfected images (and they were many in number) in the training dataset to expose the model to a range of uninfected images so that it can generalize well. Then we started doing the same to the infected images. This was quite simple to implement in Julia: we simply had to overload a particular function and modify the data.

Most of these steps were done incrementally. Our Julia setup and environment made it easy for us to quickly change code and train models and incrementally add more tweaks and modifications to our models as well as our training methods.

We also augmented our data by adding low levels of Gaussian noise to random images from both the uninfected images and the infected images. Additionally, some images were randomly rotated by 180 degrees. Rotations are quite ideal for this use case because the important spatial features would be preserved. This artificially expanded our training set.

However, we found that while these measures stopped our model from overfitting, we could not obtain adequate performance. We explore the possible reason for this in the subsequent section.

## **Challenges**

Since the different approaches we outlined in the previous section were easy to implement within our Julia framework, our experimentation could be done quickly and these various challenges were easy to pinpoint.

The initial challenge we faced was that our data is imbalanced, and so we experimented with penalizing incorrect decisions made by the classifier. We tried generating a balanced (yet smaller) dataset in the first place and then it turned out that we were overfitting. To counter this, we performed the shuffling and data augmentation techniques. But we didn’t get much performance from the model.

Why is that so? Why is it that a model as deep as Inception wasn’t able to train effectively on our dataset?

The answer, we believe, lies in the data itself. On a randomized sample from the data, we found that there were two inherent problems with the data: firstly, there are highly blurred images with no features among both healthy and infected retinas.

\[caption id="attachment\_4363" align="alignnone" width="300"\]![Images such as these make it difficult to extract features](images/Julia-3-300x225.png) Images such as these make it difficult to extract features\[/caption\]

Secondly, there are some features in the healthy images that one might expect to find in the infected images. For instance, in some images the veins are somewhat puffed, and in others there are cotton spots. Below are some examples. While we note that the picture on the left is undoubtedly infected, notice that one on the right also has a few cotton spots and inflamed veins. So how does one differentiate? More importantly, how does our model differentiate?

![julia-4](images/Julia-4.png)

So what do we do about this? For the training set, it would be helpful to have each image, rather than each patient, independently diagnosed as healthy or infected by a doctor or by two doctors working independently. This would likely improve the model’s predictions.

## **The Julia Advantage**

Julia provides a distinct advantage at every stage for scientists engaged in machine learning and deep learning.

First, Julia is very efficient at preprocessing data. A very important first step in any machine learning experiment is to organize, clean up and preprocess large amounts of data. This was extremely efficient in our Julia environment, which is known to be orders of magnitude faster in comparable environments such as Python.

Second, Julia enables elegant code. Our models were chained together using Julia’s flexible syntax. Macros, metaprogramming and syntax familiar to users of any technical environment allows for easy-to-read code.

Third, Julia facilitates innovation. Since Julia is a first-class technical computing environment, we can easily deploy the models we create without changing any code. Julia hence solves the famous “two-language” problem, by obviating the need for different languages for prototyping and production.

Due to all the aforementioned advantages, we were able to complete these experiments in a very short period of time compared with other comparable technical computing environments.

## **Call for Collaboration**

We have demonstrated in this blog post how to write an image classifier based on deep neural networks in Julia and how easy it is to perform multiple experiments. Unfortunately, there are challenges with the dataset that required more fine-grained labelling. We have reached out to appropriate experts for assistance in this regard.

Users who are interested in working with the dataset and possibly collaborating on this with us are invited to reach out via email to [ranjan@juliacomputing.com](mailto:ranjan@juliacomputing.com) to discuss access to the dataset.

## **Acknowledgements**

I should thank a number of people for helping me with this work: [Valentin Churavy](https://github.com/vchuravy) and [Pontus Stenetorp](https://github.com/ninjin) for guiding and mentoring me, and [Viral Shah](https://github.com/ViralBShah) of Julia Computing. Thanks to IBM and OSUOSL too for providing the hardware, as well as Drishti Care for providing the data.
