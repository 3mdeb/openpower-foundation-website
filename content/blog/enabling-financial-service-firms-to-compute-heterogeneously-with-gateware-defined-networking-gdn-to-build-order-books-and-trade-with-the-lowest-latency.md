---
title: "Enabling financial service firms to compute heterogeneously with Gateware Defined Networking (GDN) to build order books and trade with the lowest latency."
date: "2015-01-16"
categories: 
  - "blogs"
---

### Abstract and Objectives

Stock, futures, and option exchanges; market makers; hedge funds; and traders require real-time  knowledge of the best bid and ask prices for the instruments that they trade. By monitoring live market data feeds and computing an order book with Field Programmable Gate Array (FPGA) logic, these firms can track the balance of pending orders for equities, futures, and options with sub-microsecond latency. Tracking the open orders by all participants ensures that the market is fair, liquidity is made available, trades are profitable, and jitter is avoided during bursts of market activity.

Algo-Logic has developed multiple Gateware Defined Networking (GDN) algorithms and components to support ultra-low-latency processing functions in heterogeneous computing systems. In this work, we demonstrate an ultralow latency order book that runs in FPGA logic in an IBM POWER8 server, which includes an ultra-low-latency 10 Gigabit/second Ethernet MAC, a market data feed handler, a fast key/value store for tracking level 3 orders, logic to sort orders, and a standard PSL interface which transfers level 2 market snapshots for multiple trading instruments into shared memory. Algo-Logic implemented all of these algorithms and components in logic on an Altera Stratix V A7 FPGA on a Nallatech CORSA card. Sorted L2 books are transferred over the IBM CAPI bus into cache lines of system memory. By implementing the entire feed processing module and order book in logic, the system enables software on the POWER8 server to directly receive market data snapshots with the least possible theoretical latency and jitter.

As a member of the Open Power Foundation (OPF), Algo-Logic provides an open Application Programming Interface (API) that allows traders to select which instruments they wish to track and how often they want snapshots to be transferred to memory. These commands, in turn, are transferred across the IBM-provided Power Service Layer (PSL) to the algorithms that run in logic on the FPGA. Thereafter, trading algorithms running in software on any of the 96 hyper-threads in a two-socket POWER8 server can readily access the market data directly from shared memory. When combined with a Graphics Processing Unit, a dual-socket POWER8 system optimally leverages the fastest computation from up to 96 CPU threads, high-throughput vector processing from hundreds of GPU cores, and the ultra-low latency from thousands of fine-grain state machines in FPGA logic to implement a truly heterogeneous solution that achieves better performance than could be achieved with homogeneous computation running only in software.

### Presenter Bio

John W. Lockwood, CEO of Algo-Logic Systems, Inc., is an expert in building FPGA-accelerated applications. He has founded three companies focused on low latency networking, Internet security, and electronic commerce and has worked at the National Center for Supercomputing Applications (NCSA), AT&T Bell Laboratories, IBM, and Science Applications International Corp (SAIC). As a professor at Stanford University, he managed the NetFPGA program from 2007 to 2009 and grew the Beta program from 10 to 1,021 cards deployed worldwide. As a tenured professor, he created and led the Reconfigurable Network Group within the Applied Research Laboratory at Washington University in St. Louis. He has published over 100 papers and patents on topics related to networking with FPGAs and served as served as principal investigator on dozens of federal and corporate grants. He holds BS,

MS, PhD degrees in Electrical and Computer Engineering from the University of Illinois at Urbana/Champaign and is a member of IEEE, ACM, and Tau Beta Pi.

### About Algo-Logic Systems

Algo-Logic Systems is a recognized leader of Gateware Defined Networking® (GDN) solutions built with Field

Programmable Gate Array (FPGA) logic. Algo-Logic uses gateware to accelerate datacenter services, lower latency in financial trading networks, and provide deterministic latency for real-time Internet devices. The company has extensive experience building datacenter switches, trading systems, and real-time data processing systems in reprogrammable logic.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Lockwood_John-Algo-Logic_OPFS2015_031715_v4.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Lockwood_John-Algo-Logic_OPFS2015_031715_v4.pdf)

[Back to Summit Details](javascript:history.back())
