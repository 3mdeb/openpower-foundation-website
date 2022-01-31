---
title: "DB2 BLU w/GPU Demo - Concurrent execution of an analytical workload on a POWER8 server with K40 GPUs"
date: "2015-02-25"
categories: 
  - "blogs"
---

### Abstract

In this technology preview demonstration, we will show the concurrent execution of an analytical workload on a POWER8 server with K40 GPUs. DB2 will detect both the presence of GPU cards in the server and the opportunity in queries to shift the processing of certain core operations to the GPU.  The required data will be copied into the GPU memory, the operation performed and the results sent back to the P8 processor for any remaining processing. The objective is to 1) reduce the elapsed time for the operation and 2) Make more CPU available to other SQL processing and increase overall system throughput by moving intensive CPU processing tasks to GPU

### Speaker names / Titles

Sina Meraji, PhD Hardware Acceleration Laboratory, SWG [Sinamera@ca.ibm.com](mailto:Sinamera@ca.ibm.com)

Berni Schiefer Technical Executive (aka DE) , Information Management Performance and Benchmarks DB2, BigInsights / Big SQL, BlueMix SQLDB / Analytics Warehouse  and Optim Data Studio [schiefer@ca.ibm.com](mailto:schiefer@ca.ibm.com) 

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Meraji_OPFS2015_IBM_031715.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Meraji_OPFS2015_IBM_031715.pdf)

[Back to Summit Details](javascript:history.back())
