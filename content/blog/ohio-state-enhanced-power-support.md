---
title: "The Ohio State University Announces Enhanced Support of Power Systems for High-Performance Computing"
date: "2018-02-22"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "nvidia"
  - "infiniband"
  - "nvlink"
  - "openpower-foundation"
  - "ohio-state-university"
  - "department-of-computer-science-and-engineering"
  - "high-performance-mpi-and-deep-learning"
  - "rsma-hadoop-library"
  - "mvapich2"
---

By [Dhabaleswar](http://web.cse.ohio-state.edu/~panda.2/) K (DK) Panda, Professor and University Distinguished Scholar of Computer Science and Engineering, The Ohio State University

The [Department of Computer Science and Engineering](https://cse.osu.edu/) at The Ohio State University has made major contributions to the field of high-performance computing for many years. Recently, our [Network Based Computing Lab](http://nowlab.cse.ohio-state.edu/) introduced two enhancements to further support the growth of computing on Power Systems.

## **High-Performance MPI and Deep Learning on OpenPOWER**

Our MVAPICH team now provides optimized support for OpenPOWER platforms with NVIDIA GPUs and NVLink to extract high-performance and scalability for MPI and Deep Learning applications. The latest MVAPICH2-GDR 2.3a release supports efficient CUDA IPC by exploiting multiple CUDA streams for multi-GPU systems with and without NVLink.

Highlights of this release include:

- Excellent MPI-level point-to-point communication for Device-to-Device (D-D), Device-to-Host (D-H) and Host-to-Host (H-H) paths, in addition to the CUDA-aware MPI design in the MVAPICH2-GDR library
- Unidirectional bandwidth up to 35,390 Mbytes/sec for intra-node D-D communication
- Bidirectional bandwidth up to 23,400 Mbytes/sec for inter-node D-D communication
- High-performance and scalable collective communication support for broadcast, reduce and all-reduce, the common collective operations in Deep Learning.

These features provide novel ways to extract the highest performance and scalability on the emerging CORAL systems with OpenPOWER, NVIDIA GPUs and InfiniBand.

More than 2,800 organizations in 85 countries already use the MVAPICH2 library, including Sunway TaihuLight, the #1 SuperComputer in the world. For more information on the MVAPICH2-GDR 2.3 library and its performance figures, please [visit our website](http://mvapich.cse.ohio-state.edu/).

## **RDMA-Hadoop Library Empowering OpenPOWER**

Our HiBD (High-Performance Big Data) team now provides optimized designs and support in the RDMA-Hadoop library for OpenPOWER platforms with the InfiniBand network. New designs and optimized techniques are included in the latest RDMA-Hadoop 2.x 1.3.0 library to exploit the OpenPOWER architecture.

Highlights of this release include:

- The proposed designs can achieve up to 2.26X performance improvement for Hadoop workloads, compared to the default designs running on OpenPOWER platforms.
- These features provide novel ways to extract the highest performance and scalability for big data workloads on the emerging OpenPOWER platforms with InfiniBand interconnect, such as upcoming CORAL systems.

For more information on the RDMA-Hadoop 2.x 1.3.0 library and its performance figures, please [visit our website](http://hibd.cse.ohio-state.edu/).

We are excited for the opportunities provided by both these recent releases and look forward to future improvements to high-performance computing leveraging Power Systems.
