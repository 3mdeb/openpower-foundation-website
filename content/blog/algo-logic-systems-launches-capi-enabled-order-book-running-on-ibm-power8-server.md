---
title: "Algo-Logic Systems launches CAPI enabled Order Book running on IBM® POWER8™ server"
date: "2015-03-18"
categories: 
  - "press-releases"
  - "blogs"
---

SANTA CLARA, Calif., March 16, 2015 /PRNewswire/ -- Algo-Logic Systems, a recognized leader in providing hardware-accelerated, deterministic, ultra-low-latency products, systems and solutions for accelerated finance, packet processing and embedded system industries, announced today availability of their new Coherent Accelerator Processor Interface (CAPI) enabled Full Order Book solution on IBM® POWER8™ systems. The CAPI enabled Order Book performs all feed processing and book building in logic inside a single Stratix V FPGA on the Nallatech P385 card. The system enables software to directly receive order book snapshots in the coherent shared memory with the least possible latency. The low latency Order Book is designed using the on-chip memory for customer book sizes with many thousands of open orders, up to 24 symbols, and reporting of six L-2 book levels. For use cases where millions of open orders and full market depth need to be tracked, the scalable CAPI enabled Order Book is still implemented with a single FPGA but stores data in off-chip memory.

Photo - [http://photos.prnewswire.com/prnh/20150314/181760](http://photos.prnewswire.com/prnh/20150314/181760)

The CAPI Order Book building process includes (i) receiving parsed market data feed messages, (ii) building and maintaining L-3 order-level replica of the exchange's displayable book, (iii) building L-2 books for each symbol with the market depth and weight summary of all open orders, (iv) reporting locally generated copy of the top-of-book with configurable amount of market depth (L-2 snapshots) as well as the last trade information when orders execute. By using the IBM POWER8 server, algorithms can run on the highest number of cores and seamlessly integrate with the Order Book hardware accelerator by means of the coherent shared memory. Through simple memory-mapped IO (MMIO) address space, all the parameters are configurable and statistics can be easily read from software. Algo-Logic's CAPI enabled Full Order Book achieves deterministic, ultra-low-latency without jitter regardless of the number of tracked symbols at data rates of up to 10 Gbps. Key features include:

- Accelerated Function Unit (AFU) is implemented on FPGA under CAPI
- Full Order Book with a L-2 default size of 6 price-levels per symbol, fully scalable to larger sizes
- By default L-2 snapshots are generated for each symbol
    - The number of symbols in use and their respective snapshots are user configurable
    - L-2 snapshot generation frequency is also user configurable on an event basis or at a customizable interval
- Full Order Book with a L-2 default size of 6 price-levels per symbol, fully scalable to larger sizes
- By default L-2 snapshots are generated for each symbol
    - The number of symbols in use and their respective snapshots are user configurable
    - L-2 snapshot generation frequency is also user configurable on an event basis or at a customizable interval
- Full Order Book output logic seamlessly connects to customer's proprietary algorithmic trading strategies
- Trader has access to the latest market depth (L-2 snapshots) in coherent shared memory
- L-3 Book updates complete with processing latency of less than 230 nanoseconds
- L-2 Book updates complete with processing latency of less than 120 nanoseconds

The CAPI Order Book can be seamlessly integrated with other components of Algo-Logic's Low Latency Application Library, including pre-built protocol parsing libraries, market data filters, and TCP/IP endpoints to deploy complete tick-to-trade applications within a single Stratix V FPGA platform.

Algo-Logic's world-class hardware accelerated systems and solutions are used by banks, trading firms, market makers, hedge-funds, and financial institutions to accelerate their network processing for protocol parsing, symbol filtering, Risk-Checks (sec 15c 3-5), order book processing, order injection, proprietary trading strategies, high frequency trading, financial surveillance systems, and algorithmic trading.

Availability: The CAPI Order Book solution is currently shipping, for additional information please contact [Info@algo-logic.com](mailto:Info@algo-logic.com) or visit our website at: [www.algo-logic.com](http://www.algo-logic.com/)

About Algo-Logic Systems Algo-Logic Systems, Inc., is the recognized leader and developer of Gateware Defined Networking® (GDN) for Field Programmable Gate Array (FPGA) devices. Algo-Logic IP-Cores are used for accelerated finance, packet processing and classification in datacenters, and real-time data acquisition and processing in embedded hardware systems. The company has extensive experience in building complete network processing system solutions in FPGA logic.

To view the original version on PR Newswire, visit:[http://www.prnewswire.com/news-releases/algo-logic-systems-launches-capi-enabled-order-book-running-on-ibm-power8-server-300050631.html](http://www.prnewswire.com/news-releases/algo-logic-systems-launches-capi-enabled-order-book-running-on-ibm-power8-server-300050631.html)

SOURCE Algo-Logic Systems
