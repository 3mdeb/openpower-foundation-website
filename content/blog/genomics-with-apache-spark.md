---
title: "Delft University Analyzes Genomics with Apache Spark and OpenPOWER"
date: "2015-12-14"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "power8"
  - "genomics"
  - "spark"
---

_By Zaid Al-Ars, Cofounder, Bluebee, Chair of the OpenPOWER Foundation Personalized Medicine Working Group, and Assistant Professor at Delft University of Technology_

The collaboration between the Computer Engineering Lab of the Delft University of Technology (TUDelft) and the IBM Austin Research Lab (ARL) started two years ago. Peter Hofstee invited me for a sabbatical visit to ARL to collaborate on big data challenges in the field of genomics and to investigate areas of common interest to work on together. The genomics field poses a number of challenges for high-performance computing systems and requires architectural optimizations to various subsystem components to effectively run the algorithms used in this field. Examples of such required architectural optimizations are:

- Optimizations to the I/O subsystem, due to the large data file sizes that need to be accessed repetitively
- Optimizations to the memory subsystem, due to the in-memory processing requirements of genomics applications
- Optimizations to the scalability of the algorithms to utilize the available processing capacity of a cluster infrastructure.

To address these requirements, we set out to implement such genomics algorithms using a scalable big data framework that is capable of performing in-memory computation on a high performance cluster with optimized I/O subsystem.

\[caption id="attachment\_2183" align="aligncenter" width="625"\][![Frank Liu and Zaid Al-Ars stand next to the ten-node POWER8 cluster running their tests](images/Delft-1-768x1024.jpg)](https://openpowerfoundation.org/wp-content/uploads/2015/12/Delft-1.jpg) Frank Liu and Zaid Al-Ars stand next to the ten-node POWER8 cluster running their tests\[/caption\]

## Sparking the Innov8 with POWER8 University Challenge

From this starting point, we had the idea of building a high-performance system for genomics applications and enter it in the [Innov8 with POWER8 University Challenge](http://www-03.ibm.com/systems/power/education/academic/university-challenge.html?cmp=IBMSocial&ct=C3970CMW&cm=h&IIO=BSYS&csr=blog&cr=casyst&ccy=us). In the process, the TUDelft would bring together various OpenPOWER technologies developed by IBM, Xilinx, Bluebee and others to create a solution for a computational challenge that has a direct impact in healthcare for cancer diagnostics as well as a scientific impact on genomics research in general. We selected Apache Spark as our big data software stack of choice, due to its scalable in-memory computing capabilities, and the easy integration it offers to a number of big data storage systems and programming APIs. However, a lot of work was needed in order to realize this solution, both related to the practicalities of installing and running Apache Spark on Power systems, something which has not yet been done at the time, as well as building the big data framework for genomics applications.

The first breakthrough came a couple of months after my sabbatical, when Tom Hubregtsen (a TUDelft student back then, working on his MSc thesis within ARL) was able to setup and run an Apache Spark implementation on a POWER8 system, by modifying and rewriting a whole host of libraries and middleware components in the software stack. Tom worked hard to achieve this important feat as a stepping-stone to his actual work on integrating Flash-based storage into the Spark software stack. He focused on CAPI connected Flash, and modified Apache Spark to spill intermediate data directly to the Flash system. The results were very promising, showing up to 70% reduction in the overhead as a result of the direct data spilling.

Building on Tom’s work, Hamid Mushtaq (a researcher in the TUDelft) successfully ran Spark on a five-node IBM Power cluster owned by the TUDelft. Hamid then continued to create a Spark-based big data framework that enables segmentation of the large data volumes used in the analysis, and enables transparent distribution of the analysis on a scalable cluster. He also made use of the in-memory computation capabilities of Spark to enable dynamic load balancing across the cluster, depending on the processing requirements of the input files. This enables efficient utilization of the available computation resources in the compute cluster. Results show that we can reduce the compute time of well-known pipelines by more than an order of magnitude, reducing the execution time from hours to minutes. This implementation is now being ported by Frank Liu at ARL on a ten-node POWER8 cluster to check for further scalability and optimization potential.

\[caption id="attachment\_2184" align="aligncenter" width="625"\][![Left to right: Hamid Mushtaq, Sofia Danko and Daniel Molnar](images/Delft-2-1024x683.jpg)](https://openpowerfoundation.org/wp-content/uploads/2015/12/Delft-2.jpg) Left to right: Hamid Mushtaq, Sofia Danko and Daniel Molnar\[/caption\]

## FPGA Acceleration

Keeping in mind the high computational requirements of the various genomics algorithms used, as well as the available parallelism in these algorithms, we identified early on the benefits of using FPGA acceleration approaches to improve the performance even further. However, it is rather challenging to use hardware acceleration in combination with Spark, something that has not yet been shown to work on any system so far, mainly because of the difficulty of integrating FPGAs into the Java-based Spark software stack. Daniel Molnar (an internship student at the TUDelft) took up this challenge and within a short amount of time was able to write native functions that connect Spark through the Java Native Interface (JNI) to FPGA hardware accelerators for specific kernels. These kernels are now being integrated and evaluated for their system requirements and the speedup they can achieve.

## Improving Genomics Data Compression

Further improvements to the genomics scalable Spark pipeline are being investigated by Sofia Danko (a TUDelft PhD student), who is looking at the accuracy of the analysis on Power and proposing approaches to ensure high-quality output that can be used in a clinical environment. She is also investigating state-of-the-art genomics data compression techniques to facilitate low-cost storage and transport of DNA information. Initial results of her analysis show that specialized compression techniques can reduce the size of genomics input files to a fraction of the original size, achieving compression ratios as low as 16%.

We are excited to be part of the Innov8 university challenge. Innov8 helps the students to work as a team with shared objectives, and motivates them to achieve rather ambitious goals that have relevant societal impact they can be proud of. The team is still working to improve the results of the project, by increasing both the performance as well as the quality of the output. We are also looking forward to present our project in the IBM InterConnect 2016 conference, and to compete with other world-class universities participating in the Innov8 university challenge

* * *

[![zaid](images/zaid-150x150.jpg)](https://openpowerfoundation.org/wp-content/uploads/2015/12/zaid.jpg)_Zaid Al-Ars is cofounder of Bluebee, where he leads the development of the Bluebee genomics solutions. Zaid is also an assistant professor at the Computer Engineering Lab of Delft University of Technology, where he leads the research and education activities of the multi/many-core research theme of the lab. Zaid is involved in groundbreaking genomics research projects such as the optimized child cancer diagnostics pipeline with University Medical Center Utrecht and de novo DNA assembly research projects of novel organisms with Leiden University._
