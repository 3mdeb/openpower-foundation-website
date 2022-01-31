---
title: "Scaling-up Apache Spark"
date: "2017-12-06"
categories: 
  - "blogs"
tags: 
  - "capi"
  - "big-data"
  - "supercomputing"
  - "high-powered-computing"
  - "apache-spark"
  - "power-8"
  - "power-9"
  - "opencapi"
  - "big-data-analytics"
---

**By Ahsan Javed Awan, Research Associate, Imperial College London**

I recently completed my doctoral thesis, in which I characterize the performance of in-memory data analytics with Apache Spark on scale-up servers.

The sheer increase in the volume of data over the last decade has triggered research in cluster computing frameworks that enable web enterprises to extract big insights from big data. While Apache Spark defines the state of the art in big data analytics platforms for exploiting data-flow and in-memory computing and for exhibiting superior scale-out performance on the commodity machines, little effort has been devoted to understanding the performance of in-memory data analytics with Spark on modern scale-up servers.

Scale-out big data processing frameworks fail to fully exploit the potential of modern off-the-shelf commodity machines (scale-up servers) and require modern servers to be augmented with programmable accelerators near-memory and near-storage.

## **The Practicalities of Near Data Accelerators Augmented Scale-up Servers for In-Memory Data Analytics**

Traditionally, cluster computing frameworks like Apache Flink, Apache Spark and Apache Storm are being increasingly used to run real-time streaming analytics. These frameworks have been designed to use the cluster of commodity machines. Keeping in view the poor multi-core scalability of such frameworks, we hypothesize that scale-up machines augmented with coherently attached FPGA can deliver enhanced performance for in-memory big data analytics.

- ### **High level design**
    

The figure below shows our high-level solution. The naive approach of offloading the hot-spot functions identified by profiler like Intel Vtune does not work here, as our profiling experience with Apache Spark and Apache Flink reveals, there is no single hot-spot function that contributes to more than 50% of the total execution time, and instead there are different hot-spot functions, each contributing up to 10-15% of the total execution time.

Other ways of accelerating big data processing frameworks like Apache Spark are offloading the tasks or offloading the entire algorithm. By comparing previous studies, we find that offloading the entire algorithm incurs less JVM-FPGA communication overhead than offloading the individual tasks. Thus, we choose offloading the entire algorithm outside the Spark-framework, even though the algorithm is still written following the MapReduce programming model. The mapping decisions between CPU and FPGA are taken outside the JVM.

- ### **CAPI specific optimization**
    

CAPI allows to couple the hardware and software threads in a very fine-grained manner. Shared virtual memory is the key innovation of the OpenCL standard and allow host and device platforms to operate on shared data-structures using the same virtual address space. We pass the pointers to the CAPI accelerators to read the data directly from the Java heap, which removes the overhead of pinned buffers on host memory. Due to CAPI, the accelerators have access to the whole system memory of TB scale and thus accelerators can work on big data sets.

- ### **HDL vs. HLL**
    

The main obstacle for the adoption of FPGAs in big data analytics frameworks is the high programming complexity of hardware description language (HDL). In recent years, there have been several efforts from the main FPGA and system vendors to allow users to program FPGA using high-level synthesis (HLS), like OpenCL or specific-domain languages like OpenSPL. Although HDLs can provide the higher speedup, the low programming complexity of HLL makes them very attractive in the big data community. We use SDSoC to generate the hardware accelerators.  With the support of OpenCAPI in SDAccel, it would even become easier to integrate customized hardware accelerators with the Power 9 processors.

## **Contrasts from existing literature**

Our work differs from existing literature in five ways:

1. We focus on hiding the data communication overhead by offloading the entire algorithm and exploiting data-reuse on the FPGA side. In our work, data is read from the Java heap for optimized C++ processing on the CPUs and hardware acceleration of the FPGAs and final results are copied back into Spark using memory mapped byte buffers.
2. We exploit CAPI to further reduce the communication cost.
3. We use co-processing on the CPUs as well as FPGA to finish all the map tasks as quickly as possible.

## **Recommendations to improve performance of Spark on a scale-up server**

Our work finds that performance bottlenecks in Spark workloads on a scale-up server are frequent data accesses to DRAM, thread level load imbalance, garbage collection overhead and wait time on file I/O. To improve the performance of Spark workloads on a scale-up server, we make the following recommendations:

1. Spark users should prefer DataFrames over RDDs while developing Spark applications and input data rates should be large enough for real-time streaming analytics to exhibit better instruction retirement.
2. Spark should be configured to use executors with memory size less than or equal to 32GB and restrict each executor to use NUMA local memory.
3. GC scheme should be matched to the workload.
4. Next-line L1-D and adjacent cache line L2 prefetchers should be turned off and DDR3 speed should be configured to 1333 MT/s.
5. Hyper-threading should be turned on, SMT-4 mode in Power 8/9 processors is a sweet spot for Spark workloads.

## **Future Work:**

The recently released IBM Power System AC922 features Power9, NVLink, PCIe-Gen4 and OpenCAPI. The seamless integration of GPUs, FPGAs and CPUs in a single scale-up server clearly sets the stage of scale-in clusters (fewer powerful nodes connected over high-speed network) and we will explore the mapping of iterative MapReduce workloads like Apache Spark MLlib on such systems.

## **Further Reading**:

Awan, A. J. (2017). _Performance Characterization and Optimization of In-Memory Data Analytics on a Scale-up Server_ (Doctoral dissertation, KTH Royal Institute of Technology, Sweden and Universitat Politecnica de Catalunya, Spain)

[https://www.academia.edu/35196109/Performance\_Characterization\_and\_Optimization\_of\_In-Memory\_Data\_Analytics\_on\_a\_Scale-up\_Serv](https://www.academia.edu/35196109/Performance_Characterization_and_Optimization_of_In-Memory_Data_Analytics_on_a_Scale-up_Server)

https://databricks.com/session/near-data-computing-architectures-apache-spark-challenges-opportunities
