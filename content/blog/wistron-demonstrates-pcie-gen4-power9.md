---
title: "Wistron Demonstrates PCIe Gen4 on Power9"
date: "2018-06-20"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Wistron Corporation_

[![Wistron P9 products with PCIe Gen4 ](images/Wistron-1-300x145.png)](https://openpowerfoundation.org/wp-content/uploads/2018/06/Wistron-1.png)[![Wistron P9 products with PCIe Gen4 ](images/Wistron-2-300x160.png)](https://openpowerfoundation.org/wp-content/uploads/2018/06/Wistron-2.png)

Wistron P9 products with PCIe Gen4

For today’s complex HPC, Enterprise, and Data-Center workloads, the need for high-speed I/O is paramount – which is why PCIe Gen4 is one of the main features of the Wistron POWER9 product portfolio. To demonstrate the impact of PCIe Gen4 on system performance, we compared it to PCIe Gen3 performance on both POWER9 and x86 systems.

## Mellanox ConnectX-5 100G/EDR dual-port InfiniBand Adapter

First, we needed to have an add-in card which supports both PCIe Gen4 and Gen3. Considering the driver readiness on both x86 and OpenPOWER platform, we selected the Mellanox ConnectX-5 (Figure 1) for the test. The theoretical bandwidth is shown below in Table 1:

<table width="552"><tbody><tr><td width="107">&nbsp;</td><td width="140">PCIe Gen4 x16</td><td width="171">ConnectX-5 100G dual-port</td><td width="135">PCIe Gen3 x16</td></tr><tr><td width="107">Formula</td><td width="140">16Gb/s * 16</td><td width="171">100Gb/s * 2</td><td width="135">8Gb/s * 16</td></tr><tr><td width="107">Bandwidth</td><td width="140">256 Gb/s</td><td width="171">200Gb/s</td><td width="135">128 Gb/s</td></tr></tbody></table>

Table 1. Theoretical bandwidth

[![Mellanox ConnectX-5 100G/EDR dual-port InfiniBand Adapter](images/Mellanox-300x225.png)](https://openpowerfoundation.org/wp-content/uploads/2018/06/Mellanox.png)

Figure 1. Mellanox ConnectX-5 100G/EDR dual-port InfiniBand Adapter

## Hardware Setup

We have OpenPOWER P9 and x86 systems, and we mounted a ConnectX-5 card on the target PCIe slots of all systems and connected the EDR ports with Mellanox 100G cables individually. The detail configuration of our test is shown below in Table 2.

<table width="564"><tbody><tr><td width="72">System</td><td width="239">Wistron P91D2-2P-48 * 2</td><td width="245">Sugon I620-G30</td></tr><tr><td width="72">CPU</td><td width="239">P9 Sforza 20core (160W) * 2</td><td width="245">Intel 8153 16core (125W) * 2</td></tr><tr><td width="72">Memory</td><td width="239">256GB</td><td width="245">256GB</td></tr><tr><td width="72">IB adaptor</td><td width="239">Mellanox ConnectX-5</td><td width="245">Mellanox ConnectX-5</td></tr><tr><td width="72">OS</td><td width="239">RHEL 7.5</td><td width="245">RHEL 7.5</td></tr><tr><td width="72">OFED</td><td width="239">MLNX_OFED_LINUX-4.3-3.0.2.1</td><td width="245">MLNX_OFED_LINUX-4.3-3.0.2.1</td></tr></tbody></table>

Table 2. Configuration between OpenPOWER P9 and x86 systems

## Bandwidth Average Result

After installing OFED® successfully, its inbox commands are available under OS. We executed a “ib\_write\_bw” command to check the average I/O bandwidth of each link at the same time and summarize it. To achieve the upper limit of clients, we used P9 Gen4 as a server to connect different clients. The test result is shown below in Figure 2:

[![Bandwidth Average of P9 Gen4, P9 Gen3 and x86 Gen3](images/Figure-2.png)](https://openpowerfoundation.org/wp-content/uploads/2018/06/Figure-2.png)

Figure 2. Bandwidth Average of P9 Gen4, P9 Gen3 and x86 Gen3

The I/O bandwidth results meet our expectation. When we connect both ports from the P9 Gen4 slot, it reaches 96.6% of the theoretical bandwidth of PCIe Gen4. And when we use P9 Gen4 as a server and connect to PCIe Gen3 ports on P9 and x86 platforms, P9 still has a better performance - around 10% higher than the x86 platform.

## Latency Result

In the latency portion of our test, considering most users are still using x86 Gen3 as the client, we set up different servers and re-ran the same test with another command, “ib\_write\_lat,” in one link. The result is 2 bytes of latency as shown below in Figure 3:

[![Latency Result of P9 Gen4 and x86 Gen3](images/Figure-3.png)](https://openpowerfoundation.org/wp-content/uploads/2018/06/Figure-3.png)

Figure 3. Latency Result of P9 Gen4 and x86 Gen3

## Conclusion

In this test, we set out to give user a picture of how PCIe Gen4 improves performance using a real device on a real system instead of using theoretical calculations. Although there’s no significant performance with latency using P9 Gen4, it provides superior performance with overall bandwidth. By nearly doubling bandwidth, users will have a better ROI and a lower TCO by utilizing a single high speed Gen4 capable network adapter, instead of two Gen3 adapters in each system.

For more information, please contact: [EBG\_sales@wistron.com](mailto:EBG_sales@wistron.com)

## About Wistron

[![Wistron](images/Wistron-logo-300x101.jpg)](https://openpowerfoundation.org/wp-content/uploads/2018/06/Wistron-logo.jpg)

As a long-standing partner with IBM, Wistron utilizes more than 10 years PowerPC design and manufacture experience to offer robust services across diverse technical platforms. Wistron provides tailored, flexible business models from barebones to rack integration delivery to meet various business needs.
