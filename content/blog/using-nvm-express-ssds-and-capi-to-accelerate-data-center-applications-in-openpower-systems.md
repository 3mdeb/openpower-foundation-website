---
title: "Using NVM Express SSDs and CAPI to Accelerate Data-Center Applications in OpenPOWER Systems"
date: "2015-01-16"
categories: 
  - "blogs"
---

### Organization

PMC-Sierra, OpenPOWER Silver Member

### Objective

The objective of this presentation is to showcase how NVM Express and CAPI can be used together to enable very high performance application acceleration in Power8 based servers. We target applications that are of interest to large data-center/hyper-scale customers such as Hadoop/Hive (map-reduce) and NoSQL (e.g. Redis) databases. The talk will discuss aspects of NVM Express, CAPI and the hyper-threading capabilities of the Power9 processor.

### Abstract

NVM Express is a standards based method of communication with PCIe attached Non-Volatile Memory. An NVM Express open-source driver has been an integrated part of the Linux kernel since March 2012 (version 3.3) and allows for very high performance. Currently there are NVM Express SSDs on the market that can achieve read speeds of over 3GB/s. A simple block diagram of the configuration. A PCIe NVM Express SSD and a CAPI accelerator card are connected to a Power8 CPU inside a Power8 server. We present results for a platform consisting of an NVM Express SSD, a CAPI accelerator card and a software stack running on a Power8 system. We show how the threading of the Power8 CPU can be used to move data from the SSD to the CAPI card at very high speeds and implement accelerator functions inside the CAPI card that can process the data at these speeds. We discuss several applications that can be serviced using this combination of NVMe SSD, CAPI and Power8.

### Bio

[Stephen Bates](https://www.linkedin.com/profile/view?id=9259869&authType=NAME_SEARCH&authToken=0WuR&locale=en_US&srchid=32272301421438709217&srchindex=1&srchtotal=638&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A32272301421438709217%2CVSRPtargetId%3A9259869%2CVSRPcmpt%3Aprimary) is a Technical Director at PMC-Sierra, Inc. He directs PMC's Non-Volatile Memory characterization program and is an architect for PMC’s Flashtec™ family of SSD controllers. Prior to PMC he taught at the University of Alberta, Canada. Before that he worked as a DSP and ECC. He has a PhD from the University of Edinburgh and is a Senior Member of the IEEE.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Bates-Stephen_OPFS2015_PMC-Sierra_031015_final.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Bates-Stephen_OPFS2015_PMC-Sierra_031015_final.pdf)

[Back to Summit Details](javascript:history.back())
