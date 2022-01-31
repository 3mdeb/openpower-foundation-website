---
title: "Powerful Heterogeneous Computing Development Tool  Brought by New Technology"
date: "2019-03-14"
categories: 
  - "blogs"
tags: 
  - "featured"
---

**_An Interview With 2018 OpenPOWER / CAPI+OpenCAPI Competition Winners_**

By Yang Dai and Yong Lu, IBM

The 2018 OpenPOWER / CAPI + OpenCAPI heterogeneous computing design contest has come to an end. The 10 short-listed Chinese university teams who passed the semi-finals stage took three months of actual development, testing and tuning, and successfully developed ten FPGA prototypes based on CAPI / OpenCAPI and the POWER9 platform. Their accomplishments demonstrated the powerful and innovative strength of the heterogenous computing structure built by the deep integration of the POWER processor and FPGA.

This contest started in July 2018, with 27 teams from 17 universities enrolled. Ultimately, the prototype "WebP Image Compression Acceleration Design Based on OpenCAPI " developed by Fudan University Computing won first place. Other winning teams include:

- "CAPI-based 1080p@30fps H.265/HEVC Heterogeneous Computing Video Encoder," developed by Fudan University, Fudan VIP team won second place
- “Accelerated advertising click rate prediction algorithm based on CAPI interface” developed by Shenzhen University Cai Group team won third place
- “Pulsed neural network accelerator design” developed by Zhejiang University ZJU\_SNN team won the special award

“CAPI / OpenCAPI is a major innovation in the field of heterogeneous computing, and also a key technology of the OpenPOWER ecosystem. We are delighted to see that the teams explored innovative applications of CAPI/OpenCAPI technology in various areas, like video processing, encryption and decryption, artificial intelligence, deep learning, gene sequencing and so on. Teams also obtained a deeper understanding of the software and hardware based on OpenPOWER computational acceleration technology.

We hope that in the future, in the field of heterogeneous computing, they can gradually grow into the backbone of technological innovation!” said by Hugh Blemings, the executive chairman of OpenPOWER Foundation.

In the context of the prevalence of heterogeneous computing, mastering the CAPI tool makes the team members feel very excited. Let's see what these young students are saying.

## **WebP Image Compression Acceleration Design Based on OpenCAPI**

> "It's easy to use CAPI development to make software and hardware threads work together! " - Fudan University “Computing Team,” the first place winner of the competition said.

When IBM instructors introduced CAPI to us, they introduced two technical features of CAPI: One is the Cache Coherence Interface. With this interface, the FPGA has the same memory access rights as the CPU, and the software and hardware interface programming development of the FPGA and CPU interaction is greatly reduced. It allows us to use the CPU memory without having to develop the driver as if it were accessing on-chip memory.

Second is that CAPI-SNAP development framework supports high-level synthesis (HLS). It provides a convenient development environment for porting C program to CAPI heterogeneous platforms and shorten the development cycle. Specifically, engineers can save a lot of development time on hardware and software interactions, and do not need to consider the data storage problems on the host and FPGA.

The two major features are very impressive to our team. The topic we chose is WebP Image Compression Acceleration Design. This used to be a pure software design, but we are considering how to enable it with the hardware acceleration on the FPGA. Following traditional ideas, we need to think much about the FPGA hardware co-scheduling, such as to create specialized storage space for data exchange. And FPGA programming is also a cumbersome thing. The set-up of CAPI inspired us. These two features seem to be particularly suitable for our needs, so we made a multi-thread design combining hardware and software, two software threads with a hardware thread. The function of software and hardware is divided per the diagram below:

![](images/Capi-image-1-1024x569.png)

The first thread (software thread) is responsible for preparing the data to be processed. It reads the data into the memory from the hard disk and preprocess. Once finished, it puts the data pointer into the global variable, and then directly returns without waiting for the end of the hardware operation and starts preparing for next data. The second thread (hardware thread) can be conveniently controlled by semaphores so that it is started after the data is ready, and the data to be processed is retrieved from the global variables. The third thread (software thread) similarly gets data to be processed through global variables and then releases the memory space. The three threads are independent of each other and execute asynchronously, which greatly improves the overall efficiency.

![](images/Capi-image-2-1024x594.png)

In this multi-threaded framework, although the FPGA is still called by the CPU, it is approximately uninterrupted doing data processing, which maximizes the efficiency of FPGA. Scheduling control between threads is implemented at the software level (on the host), and no modification is required at the hardware level. That is to say, the hardware is actually a component that responds to CPU scheduling and can be considered as a normal function, so it is equivalent to three software threads executing asynchronously. This convenience is achieved by the Cache consistency of CAPI.

Looking at the entire design of the project, the use of CAPI is very natural, and make people feel pleasant about developing on CAPI. In the traditional case of FPGA heterogeneous computing, data scheduling design between FPGA and host usually take a lot of time, cannot be so smooth.

## **CAPI-based 1080p@30fps H.265/HEVC Heterogeneous Computing Video Encoder**

> “The CAPI-SNAP framework is very fast, and most of the time we can focus on our own function design” – Fudan University VIP team, the second place winner of the competition, said.

We are a team from the Video Image Processing Laboratory of Fudan University. During the summer vacation last year, we heard about the CAPI Heterogeneous Computing Contest. After a deep understanding of CAPI technology and the SNAP framework, we noticed that CAPI can be easily combined with our existing H.265/HEVC video encoder in the lab and can help improve the performance of the video encoding solution, so we decided to participate in it.

#### **CAPI experiences**

At the beginning of October last year, we started the related work of the competition. In just two weeks, we completed functional simulation on CAPI. Such rapid development speed is beyond our imagination, mainly due to the ease of use of the CAPI-SNAP framework.

During the development, we found that CAPI-SNAP gives developers considerable convenience both at the software level and at the hardware level. On the software side, we don't need to pay attention to how the underlying driver works. We just need to call the API provided by the SNAP library to interact with the PSL. On the hardware side, data exchange between the FPGA and the CPU can be easily carried out through shared memory. Moreover, the software and hardware co-simulation environment provided by SNAP is also convenient to use. In fact, we can spend most of our time focusing on perfecting our designs. At the CAPI system level, we only need a small amount of time to complete the environment construction, simulation and other work.

#### **Advantages of CAPI**

In the CAPI system, thanks to use of PSL, the FPGA and CPU can easily share the memory on the host. In the previous FPGA verification scheme, the memory sharing between the FPGA and the CPU was very complex, so we usually store the image data in the memory on the FPGA. Since the memory capacity on the FPGA is usually small and I/O performance is weak, it limits the performance of the IP deployed on the FPGA. Therefore, in this design, we store the original image pixel and the encoder intermediate data directly in the memory of the host. On the one hand, it improves the encoder’s reading and writing speed, and on the other hand greatly facilitates the data exchange between the FPGA and the CPU.

## **Accelerated advertising click rate prediction algorithm based on CAPI interface**

> "The interface between the FPGA and the host is simplified, and with a large bandwidth and low latency" - Shenzhen University Cai Da Group team, the third place winner of the competition, said.

Talking about CAPI technology and products, the research group I am in has been working on this area for years. There are three Power8 servers in our lab. Before CAPI2.0 released, we already had 4 Alpha data KU3 CAPI1.0 FPGA cards. We can be called as the earliest batch of CAPI users. When I first came to the lab in 2017, the team members did not use CAPI SNAP on CAPI-based projects. At that time, they directly wrote the communication protocol between the user logic and the PSL layers. In this case, there were two problems. The first is that the logic is relatively complicated. In the development process, not only the custom logic but also the communication interface with the PSL layer must be considered. The second is bandwidth is still a little limited.

The first time we used the CAPI-SNAP framework was in the 2018 OpenPOWER / CAPI + OpenCAPI Heterogeneous Computing Design Contest. The framework is easy to learn. IBM published a lot of documentation and technical information. After reading the case provided, I quickly mastered the data path and data control methods.

The topic of our project in the competition is “Accelerated advertising click rate prediction algorithm based on CAPI interface.” The reason for choosing this topic is because advertising is one of the key profitable methods of many internet companies. In order to obtain a high rate of advertising returns, it is necessary to quickly analyze the popularity of a large number of users. According to the attributed characteristics of the user, the user's click probability of the advertisement is analyzed, and the preferred algorithm using deep learning is the DeepFM model. In the application scenario, the amount of user data is often very large. In a large amount of data transmission, it requires high transmission bandwidth and low latency. These problems can be well resolved based on the CAPI mechanism when actually programming with CAPI-SNAP. I think the advantages of CAPI are as follows:

First, the CAPI-SNAP framework simplifies the data transmission interface between the host and the FPGA, so that users do not need to care about the underlying interface protocol. We are deeply touched by this advantage. Compared with the previous communication with the PSL layer, CAPI-SNAP provides a more complete data path. We only need to care about where the data is located and how much data is transmitted. This allows us to be more focus on hardware logic development, greatly improving work efficiency.

Second, CAPI has a proper large bandwidth and low latency. In our project, large bandwidth reduces data transmission time, and low latency allows our algorithm model to meet the requirements of “high concurrency and low latency.”

Third, CAPI-SNAP provides a completed tool chain, including code writing, simulation, synthesis, programming and other operations and all of them can be done on one platform. This makes the actual use simple and efficient.

Certainly, as a newly released product, there are also some inadequacies that I hope will continuously be optimized. First, I hope that the SNAP framework can support different Vivado versions or can give hints when hit unsupported Vivado version, as I used to spend a long time to root cause a problem caused by Vivado version incompatibility. Second, I hope the simulation can be sped up. In our experiment, if the calculation is complicated, the simulation time is particularly long. Finally, I hope the CAPI-SNAP framework can be continuously maintained and enhanced and, in the future, it can support some algorithmic of artificial intelligence (such as CNN). It is also a cool thing to use CAPI for artificial intelligence research.

## **Pulsed neural network accelerator design**

> "CAPI makes it possible to dynamically load the network structure in the main memory. AXI interface and software and hardware co-simulation are very convenient" - Zhejiang University ZJU\_SNN team, the winner of the special prize of the competition, said.

In this CAPI competition, the topic we chose was “CAPI-based FPGA pulse neural network accelerator design.” Through the design and development of this competition, we deeply feel, CAPI as an acceleration interface with consistency, its primary advantage is ease of use. According to our previous experience in heterogeneous computing development, the programming and debugging of CPU and accelerator based on the I/O interface is very difficult and requires more time and effort. Therefore, after IBM’s education, we learned that the CAPI acceleration interface has memory consistency, which can greatly reduce the difficulty of software designs, we decided to participate in this competition, and try CAPI to implement our design.

Due to the consistency of the CAPI, the CPU can logically share with the accelerator the memory space dynamically allocated, therefore facilitating communication programming between them. From the software perspective, the CPU can use very simple APIs to read/write to accelerator.

From the hardware side, CAPI-SNAP are an AXI interface and an AXI-Lite interface, so for those familiar with SOC design, there is no need to know a new interface protocol. In the design process, we can completely focus on the acceleration unit and the master CPU control process itself, without having to worry about the interface.

The pulse neural network accelerator designed by us in this competition is calculated in units of time steps according to the control instructions of the main control CPU, and not all calculations are completed at one time. On one hand, this can make full use of the low-latency characteristics of the CAPI interface, and the master CPU can send commands to the accelerator to read some calculation results at the intermediate time, and then to dynamically adjust. On the other hand, at the same logical moment, the data of the network structure and state variables stored in the CPU main memory can be dynamically loaded onto the acceleration unit of the accelerator and calculated. This can take advantage of the high bandwidth of CAPI, occupying a small SRAM resource, and supporting a pulsed neural network of a scale much larger than this. However, due to time, the design hasn’t been fully implemented in this contest. However, the data bandwidth advantages of CAPI, and the design method we use to calculate in time steps, make it possible.

Finally, we feel that CAPI's tool chain and development process are also very convenient and practical for designers, especially its support for hardware and software co-simulation. The co-simulation environment is built automatically based on the hardware design code, and it can automatically record some intermediate data of the simulation process, such as the waveform data of the hardware module. This saves a lot of verification time and also makes it easy to locate bugs.

## **Conclusion**

Obviously, POWER9 combines CAPI technology with the CAPI-SNAP development platform to provide extreme ease of use, high efficiency, high bandwidth and low latency. If your application requires high bandwidth and low latency, then CAPI and OpenCAPI are the best choices during development.

Using CAPI/OpenCAPI for FPGA accelerated application development is much easier than you might think. Start your learning with the examples of CAPI-SNAP, it’s time to embrace this era of heterogeneous computing! Check them out at “actions” folder in the [CAPI-SNAP git project](https://github.com/open-power/snap/).

If you would like to know more information, please contact us at [luyong@cn.ibm.com](mailto:luyong@cn.ibm.com) or [yangdai@cn.ibm.com](mailto:yangdai@cn.ibm.com).
