---
title: "Key-Value Store Acceleration with OpenPOWER"
date: "2015-01-17"
categories: 
  - "blogs"
---

### Objective

- To show-case a broadly relevant data center application on FPGAs and OpenPOWER and the benefits it can bring
- To demonstrate the advantages that OpenPOWER’s shared virtual memory concept offers
- To entice partner companies to develop infrastructure and more sophisticated designs on top of our FPGA-based accelerator card

### Abstract

Distributed key-value stores such as memcached form a critical middleware application within today’s web infrastructure. However, typical x86-based systems yield limited performance scalability and high power consumption as their architecture with its optimization for single thread performance is not well-matched towards the memory-intensive and parallel nature of this application. In this talk, we present the architecture of an accelerated key-value store appliance that leverages a novel data-flow implementation of memcached on a Field Programmable Gate Array (FPGA) to achieve up to 36x in performance/power at response times in the microsecond range, as well as the coherent integration of memory through IBM’s OpenPOWER architecture, utilizing host memory and CAPI-attached flash as value store. This allows for economic scaling of value store density to terabytes while providing an open platform that can be augmented with additional functionality such as data analytics that can be easily partitioned between Power8 processor and FPGA.

### Biography

Michaela Blott graduated from the University of Kaiserslautern in Germany. She worked in both research institutions (ETH and Bell Labs) as well as development organizations and was deeply involved in large scale international collaborations such as NetFPGA-10G. Her expertise spreads high-speed networking, emerging memory technologies, data centers and distributed computing systems with a focus on FPGA-based implementations. Today, she works as a principal engineer at the Xilinx labs in Dublin heading a team of international researchers. Her key responsibility is exploring applications, system architectures and new design flows for FPGAs in data centers.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Blott-Michaela_OPFS2015_Xilinx_031615_v8_final.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Blott-Michaela_OPFS2015_Xilinx_031615_v8_final.pdf)

[Back to Summit Details](javascript:history.back())
