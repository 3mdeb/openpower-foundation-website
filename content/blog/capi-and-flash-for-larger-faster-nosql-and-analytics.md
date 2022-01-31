---
title: "Using CAPI and Flash for larger, faster NoSQL and analytics"
date: "2015-09-25"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "power8"
  - "featured"
  - "capi"
  - "big-data"
  - "databases"
  - "ubuntu"
  - "redis-labs"
  - "capi-series"
---

_By Brad Brech, Distinguished Engineer, IBM Power Systems Solutions_

## [![CAPI Flash Benefits Infographic](images/CAPI_Flash_Infographic-475x1024.jpg)](http://ibm.co/1FxOPq9)Business Challenge

Suppose you’re a game developer with a release coming up. If things go well, your user base could go from zero to hundreds of thousands in no time. And these gamers expect your app to capture and store their data, so the game always knows who's playing and their progress in the game, no matter where they log in. You’re implementing an underlying database to serve these needs.

Oh—and you’ve got to do that without adding costly DRAM to existing systems, and without much of a budget to build a brand-new large shared memory or distributed multi-node database solution. Don’t forget that you can’t let your performance get bogged down with IO latency from a traditionally attached flash storage array.

More and more, companies are choosing NoSQL over traditional relational databases. NoSQL offers simple data models, scalability, and exceptionally speedy access to in-memory data. Of particular interest to companies running complex workloads is NoSQL's high availability for key value stores (KVS) like [Redis](https://redislabs.com/solutions-redis-labs-on-power) and MemcacheDB, document stores such as mongoDB and couchDB, and column stores Cassandra and BigTable.

## Computing Challenge

NoSQL isn't headache-free.

Running NoSQL workloads fast enough to get actionable insights from them is expensive and complex. That requires your business either to invest heavily in a shared-memory system or to set up a multi-node networked solution that adds complexity and latency when accessing your valuable data.

Back to our game developer and their demanding gamers. As the world moves to the cloud, developers need to offer users rapid access to online content, often tagged with metadata. Metadata needs low response times as it is constantly being accessed by users. NoSQL provides flexibility for content-driven applications to not only provide fast access to data but also store diverse data sets. That makes our game developer an excellent candidate for using CAPI-attached Flash to power a NoSQL database.

## The Solution

Here's where CAPI comes in. Because CAPI allows you to attach devices with memory coherency at incredibly low latency, you can use CAPI to affix flash storage that functions more like extended block system memory for larger, faster NoSQL. Coming together, OpenPOWER Foundation technology innovators including [Redis Labs](https://redislabs.com/solutions-redis-labs-on-power), [Canonical](https://insights.ubuntu.com/2014/10/10/ubuntu-with-redis-labs-altera-and-ibm-power-supply-new-nosql-data-store-solution/), and [IBM](http://ibm.co/1FxOPq9) created this brilliant new deployment model, and they built [Data Engine for NoSQL](http://ibm.co/1FxOPq9)—one of the first commercially available CAPI solutions.

CAPI-attached flash enables great things. By CAPI-attaching a 56 TB flash storage array to the POWER8 CPU via an FPGA, the application gets direct access to a large flash array with reduced I/O latency and overhead compared to standard I/O-attached flash. End-users can:

- _Create a fast path to a vast store of memory_
- _Reduce latency by cutting the number of code instructions to retrieve data from 20,000 to as low as 2000, by eliminating I/O overhead[1](#_ftn1)_
- _Increase performance by increasing bandwidth by up to 5X on a per-thread basis[1](#_ftn1)_
- _Lower deployment costs by 3X through massive infrastructure consolidation[2](#_ftn2)_
- _Cut TCO with infrastructure consolidation by shrinking the number of nodes needed from 24 to 1[2](#_ftn2)_

<iframe src="https://www.youtube.com/embed/cCmFc_0xsvA?rel=0&amp;showinfo=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Get Started with Data Engine for NoSQL

Getting started is easy, and our goal is to provide you with the resources you need to begin. This living list will continue to evolve as we provide you with more guidance, information, and use cases, so keep coming back to be sure you can stay up to date.

### Learn more about the Data Engine for NoSQL:

- [Data Engine for NoSQL Solution Brief](http://ibm.co/1KTPS44)
- [Data Engine for NoSQL Whitepaper](http://ibm.co/1izYfXN)

### Deploy Data Engine for NoSQL:

- [Contact IBM about Data Engine for NoSQL](http://ibm.co/1FxOPq9) to build the Data Engine for NoSQL configuration for you
- [Get community support](http://ibm.co/1VeInq6) for your solutions and share results with your peers on the [CAPI Developer Community](http://ibm.co/1VeInq6)
- Reach out to the OpenPOWER Foundation community on [Twitter](https://twitter.com/intent/tweet?screen_name=OpenPOWERorg&text=CAPI-Flash%20enables%20me%20to), [Facebook](https://www.facebook.com/openpower), and [LinkedIn](https://www.linkedin.com/grp/home?gid=7460635) along the way

Keep coming to see blog posts from IBM and other OpenPOWER Foundation partners on how you can use CAPI to accelerate computing, networking and storage.

- [CAPI Series 1: Accelerating Business Applications in the Data-Driven Enterprise with CAPI](https://openpowerfoundation.org/blogs/capi-drives-business-performance/)
- [CAPI Series 3: Interconnect Your Future with Mellanox 100Gb EDR Interconnects and CAPI](https://openpowerfoundation.org/blogs/interconnect-your-future-mellanox-100gb-edr-capi-infiniband-and-interconnects/)
- [CAPI Series 4: Accelerating Key-value Stores (KVS) with FPGAs and OpenPOWER](https://openpowerfoundation.org/blogs/accelerating-key-value-stores-kvs-with-fpgas-and-openpower/)

 

* * *

**_![BradBrech](images/BradBrech.jpg)About Brad Brech_** 

_Brad Brech is a Distinguished Engineer and the CTO of POWER Solutions in the IBM Systems Division. He is currently focused on POWER and OpenPOWER and solutions and is the Chief Engineer for the CAPI attached Flash solution enabler. His responsibilities include technical strategy, solution identification, and working delivery strategies with solutions teams. Brad is an IBM Distinguished Engineer, a member of the IBM Academy of Technology and past Board member of The Green Grid._

[\[1\]](#_ftnref1)Based on performance analysis comparing typical I/O Model flow (PCIe) to CAPI Attached Coherent Model flow.

[\[2\]](#_ftnref2) Based on competitive system configuration cost comparisons by IBM and Redis Labs.
