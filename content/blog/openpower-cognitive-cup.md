---
title: "Develop Exciting Cognitive Applications in the OpenPOWER Developer Challenge"
date: "2016-07-05"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Mike Gschwind, Chief Engineer, Machine Learning and Deep Learning, IBM_

Cognitive Applications have transformed the face of computing and how humans interact with computers. Some examples are driver-assistive technologies for enhanced road safety, personalized assistants like Siri and Google Now for improved productivity; and enhanced public security through advanced threat detection. Reflecting the increasing importance of cognitive applications, when we launched the [OpenPOWER Developer Challenge](http://openpower.devpost.com) earlier this month we included a competition around developing cognitive applications: the Cognitive Cup!

## Deep Learning on OpenPOWER

Developers of many cognitive applications are no longer developing using imperative, functional, logic, or object-oriented programming languages, but in the language of the brain:  artificial neural networks, or ANNs. ANNs are the cognitive development infrastructure of choice, and with them, developers are “programming with data”.  Rather than coding desired outcomes, developers teach applications by training them with a training corpus by associating a desired outcome with each training sample.  This way of teaching a computer is a sub-branch of machine learning that is referred to as “deep learning”.

Like traditional programming environments, deep learning has its compilers and IDEs, known under the name of “Deep learning Frameworks”, and IBM recently released an entire application suite of [Deep Learning Frameworks optimized for OpenPOWER](http://bit.ly/1P3YBFi). These frameworks, hosted in the [SuperVessel OpenPOWER development cloud](http://www.ptopenlab.com), provide the development environment for the [Cognitive Cup](http://openpower.devpost.com/details/cognitive_cup).

OpenPOWER is all about creating a broad ecosystem with opportunities to accelerate your workloads.  For the Cognitive Cup, we provide two types of accelerators: GPUs and FPGAs.  GPUs are used by the Deep Learning framework to train your neural network.  When you want to use the neural network during the “classification” phase, you have a choice of Power CPUs, GPUs and FPGAs.  Learn more about FPGA acceleration for the classification at our upcoming [Google Hangout showcasing how you can use Xilinx FPGAs to accelerate deep neural networks using AccDNN in the Supervessel cloud](http://bit.ly/29aSrUY).

## Compete in the Cognitive Cup

The Cognitive Cup has three categories, varying in difficulty, to give newcomers an opportunity to develop their first cognitive applications or experienced developers the opportunity to showcase their advanced skills. The three categories are:

- **ArtNet****:** Develop an application that recognizes artworks, styles, periods, artists, and artistic techniques.  By defining a network and training it with existing artwork, create an application that speaks to the inner art connoisseur in you! We invite you to use your own imagination on what a cognitive application can do when meeting the world of Art. To get started, check out the [WikiArt](http://www.wikiart.org/) database.
- **TuneNet****:** Application development is a difficult undertaking, and TuneNet is an invitation to develop assistive programmer technologies.  Train a neural network to give developers recommendations about possible bugs and performance bottlenecks.  Initial academic work in this area is promising. Read more on this, here:
    - ["Recognizing Correct Code", Hardesty, MIT](http://news.mit.edu/2016/faster-automatic-bug-repair-code-errors-0129)
    - ["Automatic Patch Generation by Learning Correct Code", Long & Rinard, MIT CSAIL](https://people.csail.mit.edu/fanl/papers/prophet-popl16.pdf)
    - ["Building Program Vector Representations for Deep Learning", Mou, Li, Liu, Peng, Jin, Xu, & Zhang, Peking University](https://arxiv.org/pdf/1409.3358.pdf)
    - ["Combining Deep Learning with Information Retrieval to Localize Buggy FIles for Bug Reports, Lam, Nguyen, Nguyen, & Nguyen](https://www.computer.org/csdl/proceedings/ase/2015/0025/00/0025a476.pdf)
    - ["Deep Learning on Disassembly Data", Davis & Wolff](https://www.blackhat.com/docs/us-15/materials/us-15-Davis-Deep-Learning-On-Disassembly.pdf)
- **YourNet****:** If you find the previous categories too limiting, then you’ll love this category.  We’re letting you find your own challenge and solve it with a cognitive application! From recognizing animals based on their photos, birds based on ther song, or any number of other ideas; let your imagination fly!

While the Cognitive Cup is a track of its own in the OpenPOWER Developer Challenge, it is not isolated from the other application development opportunities, in fact, it’s quite the opposite!  TuneNet can create new applications to help application development for the The Open Road Test track, and the Spark Challenge to build scaleable accelerated applications can be combined with the Cognitive Cup to harness the power of clusters for your cognitive application. We’ll even reward bonus points to solutions that combine the Cognitive Cup and the Spark Rally.  To help you combine Spark parallelism with Cognitive Applications, these tracks use a common cloud image that includes both our deep learning frameworks and Spark.

### To learn more about the SuperVessel environment, [watch our Google Hangout](http://bit.ly/296L5Rw) and hear from experts on how to access and sign up for a SuperVessel virtual machine.

### To sign up for the Developer Challenge, visit [http://openpower.devpost.com](http://openpower.devpost.com).

* * *

[![](images/33601413.jpg)](https://openpowerfoundation.org/wp-content/uploads/2016/02/mkg.jpeg)_Dr. Michael Gschwind is Chief Engineer for Machine Learning and Deep Learning for IBM Systems where he leads the development of hardware/software integrated products for cognitive computing. During his career, Dr. Gschwind has been a technical leader for IBM's key transformational initiatives, leading the development of the OpenPOWER Hardware Architecture as well as the software interfaces of the OpenPOWER Software Ecosystem. In previous assignments, he was a chief architect for Blue Gene, POWER8, POWER7, and Cell BE. Dr. Gschwind is a Fellow of the IEEE, an IBM Master Inventor and a Member of the IBM Academy of Technology._
