---
title: "Open Cognitive Environment (Open-CE) - A valuable tool for AI researchers"
date: "2021-04-13"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "openpower-foundation"
  - "artificial-intelligence"
  - "ai"
  - "oregon-state-university"
  - "open-ce"
  - "open-cognitive-environment"
---

_[Christopher Sullivan](https://www.linkedin.com/in/christopher-m-sullivan-446904/),  Assistant director for biocomputing, Oregon State University - Center for Genome Research and Biocomputing_

The world has been changed by the usage of artificial intelligence (AI) to quickly understand data as it relates to our environments. These AI workloads are enabled by machine learning (ML) and deep learning (DL) frameworks allowing insight into how information can be learned by computers to find solutions and answer questions.

Many times, these ML/DL frameworks, such as TensorFlow can be very difficult to install with GPU capability for individual users and system administrators. Because technologies such as general purpose GPU (GPGPU) require these frameworks to be compiled correctly to enable the hardware not having easy access to pre-compiled versions limits the use of these technologies. Computational researchers are constantly fighting the need to use new tools and enable them versus using the tools to answer scientific questions.

Most researchers would rather spend time answering questions over installing or updating software packages that enable the hardware they use. We found that if research groups are enabled to manage these tools with little impact to their time or effort they are more likely to use them.

Recently, Open Cognitive Environment (Open-CE) was established as a new community-driven set of ML/DL tools, enabling some of the best hardware with low-activation energy for users. Open-CE was built using IBM Watson Machine Learning Community Edition (WML CE) and OpenPOWER. This new version has a similar set of tools but can now be controlled and managed by the community that uses and needs the resource. It might include developers who want full control of all the versions of the tools and users who want just compiled binaries.

The Open-CE community is working to provide both. The main Open-CE GitHub page ([https://github.com/open-ce](https://urldefense.proofpoint.com/v2/url?u=https-3A__github.com_open-2Dce&d=DwQGaQ&c=jf_iaSHvJObTbx-siA1ZOg&r=KY5tQXPrNPSAVrQ7uWWl45bQdYBqAOAEJsYQUaNVkFE&m=tFfM7Mfny39y2iyNqL7UXhvIof2Toii0S3FssQF4l8A&s=XvTyRMwUZFVMtqNNuXgtdL3jPEPrcSY4hA-rBkmmIZc&e=)) focusses on providing feedstock to developers, and groups, such as Open Source Lab (OSL). The Center for Genome Research and Biocomputing (CGRB) at the Oregon State University  provides precompiled Conda packages ([https://osuosl.org/services/powerdev/opence](https://urldefense.proofpoint.com/v2/url?u=https-3A__osuosl.org_services_powerdev_opence&d=DwQGaQ&c=jf_iaSHvJObTbx-siA1ZOg&r=KY5tQXPrNPSAVrQ7uWWl45bQdYBqAOAEJsYQUaNVkFE&m=tFfM7Mfny39y2iyNqL7UXhvIof2Toii0S3FssQF4l8A&s=SMOHfQZhjTEiZ-9NZoOr6n5I4zI0hF3SpOQB6n-_A-o&e=)).

Open-CE is valuable to researchers because it provides the latest and greatest AI package and framework versions pre-integrated in an easy-to-consume and use Conda environment. Cutting edge research requires cutting edge tools and has recently been proven by a recent paper publication around passive monitoring of animals in the forest titled, "_Workflow and convolutional neural network for automated identification of animal sounds_" ([https://doi.org/10.1016/j.ecolind.2021.107419](https://urldefense.proofpoint.com/v2/url?u=https-3A__doi.org_10.1016_j.ecolind.2021.107419&d=DwMGaQ&c=jf_iaSHvJObTbx-siA1ZOg&r=KY5tQXPrNPSAVrQ7uWWl45bQdYBqAOAEJsYQUaNVkFE&m=tFfM7Mfny39y2iyNqL7UXhvIof2Toii0S3FssQF4l8A&s=cTto2KQzjTh6MFEqXbxgMTcwF4XR2anJEw_Onb5ULts&e=)).

Lesmeister lab in the US Forest Service along with the Levi Lab and CGRB at Oregon State University have found using the OpenPOWER hardware for both segmentation and classification of data increased the throughput allowing them to change the scope of work. Initially, this work was focused on passive monitoring of the norther spotted owl population. However, with increased throughput, we were now able to start looking through the same data to monitor more species.

Figure 1 (which is a screen capture from the paper) shows the ability to monitor different species. The important part of this forward progress within this research is the ability of the computational scientist processing the data having control over the tools (including the optimized ML/DL workflows) needed to accomplish this work.

Open-CE has enabled this capability and reduced management of technologies, while providing cutting edge tools for research like this. We plan to start looking at how to bring this processing closer to the edge like phones and portable devices where the data is collected. Having Open-CE to be accessible on these edge devices can help maintain continuity and increase usage.

![](images/Picture1.png)
