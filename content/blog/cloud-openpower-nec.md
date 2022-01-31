---
title: "Diversify Cloud Computing Services on OpenPOWER with NEC’s Resource Disaggregated Platform for POWER8 and GPUs"
date: "2016-05-24"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Takashi Yoshikawa and Shinji Abe, NEC Corporation_

The Resource Disaggregated (RD) Platform expands the use of cloud data centers in not only office applications, but also high performance computing (HPC) with the ability to simultaneously handle multiple demands for data storage, networks, and numerical/graphics processes. The RD platform performs computation by allocating devices from a resource pool at the device level to scale up individual performance and functionality.

Since the fabric is [ExpEther](http://www.expether.org/index.html), open standard hardware and software can be utilized to build custom computer systems that deliver faster, more powerful, and more reliable computing solutions effectively to meet the growing demand for performance and flexibility.

## Resource Disaggregated Computing Platform

The figure shown below is the RD computing platform at Osaka University. In use since 2013, it provides GPU computing power for university students and researchers at Osaka University and other universities throughout Japan.

![NEC RDCP 1](images/NEC-RDCP-1-1024x469.png)

The most differentiating point of the system is that the computing resource are custom-configured by attaching necessary devices in the standard PCIe level, meaning you can scale up the performance of a certain function by attaching PCIe standard devices without any modification of software or hardware.

For example, if you need the processing power of four GPUs for machine learning, you can attach them from the resource pool of GPUs to a single server, and when the job is finished, you can release them back into the pool. With this flexible reconfiguration of the system, you can use a standard 1U server as a GPU host. The resource disaggregated system is a very cost-effective architecture to use GPUs in cloud data centers.

## [ExpEther Technology](https://openpowerfoundation.org/blogs/nec-acceleration-for-power/)

![nec rdcp 2](images/nec-rdcp-2-1024x414.png)

From the software view, Ethernet is transparent. Therefore the combination of the ExpEther engine chip and Ethernet is equivalent to a single hop PCIe standard switch, even if multiple Ethernet switches exist in the network. By adopting this distributed switch architecture, the system can extend the connection distance to a few kilometers and thousands of port counts. And it is still just a standard PCI Express switch, so the customer can reutilize vast assets of PCIe hardware and software without any modification.

By using ExpEther technology as a fabric for interconnects, a RD computing system can be built not only in rack scale but also multi-rack and data center scale without performance degradation because all the functions are implemented into a single hardware chip.

## POWER8 Server and ExpEther

We have made an experimental set up with Tyan POWERR8 Server, Habanero, and ExpEther. The 40G ExpEther HBA is mounted into the POWER8 Server, with a NVIDIA K80 GPU and a SSD in remote locations connected through a standard 40GbE Mellanox switch.

![nec rdcp 3](images/nec-rdcp-3-1024x619.png)

We measured the GPU performance by using CUDA N-Body. The figure below shows that we can get comparable performance with ExpEther to the K80 directly inserted in the PCIe slot inside the server. This is because the most of the simulation process has been executed in the GPUs without interaction to the host node and other GPUs. Of course, results may vary depending on the workload.

![nec rdcp 4](images/nec-rdcp-4-1024x590.png)

As for the remotely mounted SSD, we saw about 463K IOPS in FIO benchmark testing (Random 4KB Read). This IOPS performance value is almost the same as the local mounted SSD, meaning that there is no performance degradation in the SSD Read.

![nec rdcp 5](images/nec-rdcp-5.jpg)

![nec rdcp 6](images/nec-rdcp-6-1024x652.png)

Conclusion

- The Resource Disaggregated Platform expands the use of cloud data centers not only office applications but also high performance computing
- The Resource Disaggregated Platform computation by allocating devices from a resource pool at the device level to scale up individual performance and functionality.
- Since the fabric is ExpEther (Distributed PCIe Switch over Ethernet), open standard hardware and software can be utilized to build customer’s computer systems.
- A combination of the latest x8 PCIe Gen3 – dual 40GbE ExpEther and POWER8 server shows potential for intensive computing power.

To learn more about the ExpEther Consortium, visit them at http://www.expether.org/index.html. To learn more about NECs ExpEther and OpenPOWER, go to https://openpowerfoundation.org/blogs/nec-acceleration-for-power/.
