---
title: "Spotted owls and OpenPower"
date: "2018-11-26"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_[This post was originally published by IBM.](https://developer.ibm.com/linuxonpower/2018/11/21/spotted-owls-and-openpower/)_ 

The U.S. Forest Service and Oregon State University’s department of Fisheries and Wildlife has monitored northern spotted owls in the Pacific Northwest since the early 1990s under the Northwest Forest Plan. Historically, monitoring has involved broadcasting recorded owl calls in the hope of eliciting a response from real owls. However, as spotted owl populations have declined due to habitat loss and competition from invasive barred owls, this technique has become less and less reliable. We conducted a pilot study in 2017 in which we placed autonomous recording units (ARUs) at 150 sites across Oregon and Washington. By the end of the field season the ARUs had collected 68 terabytes of audio data representing almost 162,000 hours of continuous sound (figure step 1). Manually locating and tagging relevant sounds within these recordings is costly and time-consuming, creating a serious lag between data collection and analysis and limiting the feasibility of large-scale studies. As the Forest Service continues to deploy more and more ARUs, we needed to automate the review process and create a data processing pipeline that would scale up alongside the project’s field component and be flexible enough to incorporate additional target species as needed.

In cooperation with Oregon State University’s Center for Genome Research and Biocomputing (CGRB), we developed a convolutional neural network (CNN) that can accurately identify calls from several owl species by analyzing spectrograms generated from short sound clips. Our data processing pipeline involves segmenting raw WAV files into 12-second clips (step 2), generating spectrograms from the clips (step 3), and feeding these into the CNN, which uses filters to detect patterns within the spectrogram and outputs the probability that each spectrogram contains one or more of our target species (step 4). The segmentation and spectrogram generation steps turned out to be the most time-intensive stage; even a single site might produce ~500 GB of data, which could take several days to process using consumer-grade hardware with standard PCI based GPUs. We needed to speed up the process if we wanted to overcome the quantities of data generated from multiple sites over longer periods of time.

IBM offered the opportunity to test our CNN on their new OpenPOWER based Power8 systems with GPGPUs integrated with the main system board. We were excited to see we did not need to recompile our Linux based tools and they just worked the same as on the hardware we were already using. These machines cut our processing time from **30** hours to just over **6** hours. This represented a **5x** speedup when using the IBM hardware. We have provided a table with some average run times for small data sets to show the increased speed we found. As we move to the cloud, we plan to use tools like Kinetica to visualize the information quickly and Nimbix to help process the data efficiently using IBM OpenPOWER based systems with GPGPU support.

| **Run Type** | **K80 on x86** | **P100 on IBM OpenPOWER** |
| --- | --- | --- |
| _Training the CNN_ | 30:06:13 | 06:18:07 |
| _Generating predictions_ | 00:45:35 | 00:08:44 |
| _Full data processing_ | 01:22:00 | 00:39:50 |

[![](images/IBM-blog-post-graphic.png)](http://opf.tjn.chef2.causewaynow.com/wp-content/uploads/2018/11/IBM-blog-post-graphic.png)

+++

Authored by:

_**Zack Ruff**_ _ORISE Post-Graduate Fellow working with Damon Lesmeister in U.S. Forest Service Oregon State University_

_**Bharath K. Padmaraju**_ _Undergraduate Computational Scientist_ _Oregon State University_

_**Christopher M. Sullivan**_ _Assistant Director for Biocomputing_ _Center for Genome Research and Biocomputing_ _Oregon State University_

_**Damon Lesmeister**_ _Research Wildlife Biologist and Team Leader _ _U.S. Forest Service and _ _Pacific Northwest Research Station Wildlife Ecology Team_
