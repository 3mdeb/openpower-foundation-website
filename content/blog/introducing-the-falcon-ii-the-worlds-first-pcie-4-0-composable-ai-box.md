---
title: "Introducing the Falcon II, the World’s First PCIe 4.0 Composable AI Box"
date: "2019-06-17"
categories: 
  - "blogs"
tags: 
  - "featured"
---

[**Yomi Yeh**](https://www.linkedin.com/in/yomi-yeh-b70764b4/?originalSubdomain=tw)**, product manager, H3 Platform**

Computer systems are about to get a whole lot faster. For almost two decades, PCI Express has been the data interconnect standard, twisting together GPU, storage, and networking within systems from PCs to High Performance Computing systems. This year, starting with the high end of the market, a transition will begin toward systems based on PCI Express 4.0.

PCIe Gen4 offers cutting-edge system performance that doubles the interconnect bandwidth over PCIe Gen3. It provides 256 GT/s, or 31.5 GB/s in a x16 PCIe Gen4 slot, relieving system bottlenecks between CPU root complexes and accelerators, storage and IO devices. This speed increase will bring significant benefit across the full range of applications such as AI and machine learning, scientific simulation, high resolution visualization and rendering.

AI is one of the most booming industries in computer science. But companies are facing challenges in implementation, as AI requires a huge resource of accelerators for computing; professional accelerators for AI are very expensive; and different applications require different GPU allocations and ratios of CPU to GPU.

To help solve this implementation problem, H3 Platform, a pioneer of PCI Express switch, is introducing the world’s first PCIe 4.0 composable AI box with IBM Power9 systems, the **Falcon II**, to provide interconnect at PCIe 4.0 bandwidth for both the host side and device side. an end to end PCIe 4.0 performance. The Falcon II features four Gen4 x16 host connectors and sixteen Gen4 x16 double width PCIe 4.0 slots for GPUs, NVMe drives or network interfaces. Each Falcon II consists of two drawers along with eight double-width GPUs to create the next-generation HPC acceleration platform. The Falcon II can be connected to Power9 with PCIe 4.0 connections to aggregate GPU traffic from several Gen3 devices; it also provides bandwidth to the server at Gen4 speed. The box is Gen4-ready and will support all Gen 4 PCIe devices as they become available later this year.

A quick look at the outlook (Figure 1) and key features:

- 4U 19” disaggregated compute accelerator
- Support up to sixteen PCIe 4.0 GPGPU
- Support up to four Host servers
- Double Performance to Existing PCIe 3.0 Expansion Boxes
- AI Composability

\[caption id="attachment\_6900" align="alignleft" width="985"\]![](images/Figure-1-H3.png) Figure 1. Outlook of Falcon II\[/caption\]

 

 

 

 

 

 

 

 

 

To demonstrate the performance of PCIe Gen4, we are using a PCIe 4.0 NVMe SSD as the PCIe device to install in the Falcon II and connect it to Power9 (IBM Power Systems LC922). Please refer to Figure 2 for the architecture.

\[caption id="attachment\_6901" align="alignleft" width="939"\]![](images/Figure-2-H3.png) Figure 2. Connecting Power9 to the Falcon II, and Assign SSD to Power9\[/caption\]

 

 

 

 

 

 

Check the link speed of Power9 and PCIe Gen 4 NVMe SSD on Ubuntu 1804 (Figure 3). It shows “Speed 16GT/s, Width x16” at Power9 root complex port; and “Speed 16GT/s, Width x 4” at PCIe Gen4 NVMe SSD.

\[caption id="attachment\_6902" align="aligncenter" width="920"\]![](images/Figure-3-H3.png) Figure 3. Link Speed of P9 and PCIe Gen4 NVMe SSD\[/caption\]

Use FIO for the testing benchmark. The test was run at random read 4K. We get 4680MB/s (Figure 4) which is better than the theoretical bandwidth of PCIe 3.0 x4 (3940MB/s).

\[caption id="attachment\_6903" align="aligncenter" width="922"\]![](images/Figure-4-H3.png) Figure 4. Performance of PCIe Gen4 NVMe SSD at Random Read 4K\[/caption\]

The Falcon II extends the expansion ability of Power9 with 16 PCIe Gen4 ready expansion slots that double the interconnect bandwidth of Power9 to aggregate the traffic of PCIe Gen3 devices. Once the PCIe Gen4 GPU hits the market, the Falcon II will bring further improvement of IO transmission.

If you are attending [ISC in Frankfurt](https://www.isc-hpc.com/) this year, stop by the OpenPOWER Foundation booth (E-1054) to see the technology firsthand; and if you would like to know more information, please contact us at [sales@h3platform.com](mailto:sales@h3platform.com).
