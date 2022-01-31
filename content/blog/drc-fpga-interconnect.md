---
title: "New OpenPOWER Member DRC Computing Discusses FPGAs at IBM Interconnect"
date: "2016-02-22"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Roy Graham, President and COO, DRC Computer Corp._

New business models bring new opportunities, and my relationship with IBM is proof-positive of that fact. Although I respected them, in the previous way of doing business they were the competition, and it was us or them. Wow, has that changed! In the last year working with IBM I see a very new company and the OpenPOWER organization as a real embodiment of a company wanting to partner and foster complementary technologies.

![DRC](images/DRC.png)

DRC Computer (DRC) builds highly accelerated, low latency applications using FPGAs (Field Programmable Gate Arrays). These chips offer massive parallelism at very low power consumption. By building applications that exploit this parallelism we can achieve acceleration factors of 30 to 100+ times the equivalent software version. We have built many diverse applications in biometrics, DNA familial search, data security, petascale indexing, and others. At Interconnect 2016 I’ll be highlighting two applications – massive graph network analytics and fuzzy logic based text/data analysis. More details on some of the DRC applications can be found at [here](http://drccomputer.com/solutions.html).

https://www.youtube.com/watch?v=DZZuur8LXOY

We are working closely with the CAPI group at IBM to integrate the DRC FPGA-based solutions into Power systems. One of the early results of this cooperation was a demonstration of the DRC graph network analytics at SC15 running on a [POWER8 system using a Xilinx FPGA](https://openpowerfoundation.org/blogs/accelerating-key-value-stores-kvs-with-fpgas-and-openpower/).

OpenPOWER provides DRC with a large and rapidly expanding ecosystem that can help us build better solutions faster and offer partnerships that will vastly expand our market reach. The benefit for our customers will be a more fully integrated solution and improved application economics. In **[Session 6395 on Feb 23rd at 4:00pm PT](http://ibm.co/1QcEiUz)** I will be presenting this work with FPGAs at [IBM’s InterConnect Conference](http://ibm.co/1KsWIzQ) in Las Vegas as part of a four-person panel discussing OpenPOWER.

In the session, I’ll cover the DRC graph networking analytics and fuzzy logic based text/data analysis. The graph networking system implements Dijkstra and Betweenness Centrality algorithms to discover and rank relationships between millions of people, places, events, objects, and more. This achieves in excess of 100x acceleration compared to a software-only version. As a least-cost path and centrality analysis, it has broad applicability in many areas including social networks analysis, distribution route planning, aircraft design, epidemiology, stock trading, etc. The fuzzy logic based text/data analytics was designed for social media analysis, and captures common social media misspellings, shorthand, and mixed language usage. The DRC product is tolerant of these and enables an analyst to do a score based approximate match on phrases or words they are searching for. We can search on hundreds of strings simultaneously on one FPGA achieving acceleration factors of 100x software applications.

OpenPOWER is opening up whole new uses for FPGAs, and through the collaborative ecosystem, the greatest minds in the industry are working on unlocking the power of accelerators. In an era where performance of systems come not just from the chip, but across the entire system stack, OpenPOWER's new business model is the key to driving innovation and transforming businesses. Please join me at **[session 6395 on Feb 23rd at 4:00pm PT](http://ibm.co/1QcEiUz)**, and I look forward to collaborating with you and our fellow members in the OpenPOWER ecosystem.

* * *

_Roy Graham is the President and COO of DRC Computing Corp. and builds profitable revenue streams for emerging technologies including data analytics, communications, servers, human identification systems and hybrid applications. At Digital and Tandem Roy ran Product Management groups delivering > $10B in new revenue. Then he was SVP S&M at Wyse ($250M turnaround), and at Be (IPO) and CEO at 2 early stage web-based companies._
