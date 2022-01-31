---
title: "Wistron Greatly Reduces Model Training Time With OpenPOWER"
date: "2019-03-28"
categories: 
  - "blogs"
---

By Wistron Corporation

In the past few years, the computing capability of servers has been greatly enhanced by the amazing progress of NVIDIA GPUs, which has created a fervor for Artificial Intelligence, Machine Learning, and Deep Learning. Wistron Value Creation Center (VCC), a leading-edge engineering innovation division, assigned numerous engineers to bring various industry-changing products and solutions to the marketplace. However, due to the very limited GPU system resources in the engineering lab, most ideas never reached full project status. Model training consumes the most time during product development, therefore more powerful hardware is needed to reduce the training time so more concepts can be realized. For this reason, VCC looked for support from the OpenPOWER solution team.

In one case, the project idea is to build up a patient-care-assistant which can detect changes to a patient’s status to help caregivers immediately provide the proper response. For this reason, the system must be taught to differentiate the meaning of different actions and whether the action was made by a patient or others. To achieve this goal, the training algorithm will include object detection and face recognition, both requiring extensive GPU computing resources.

![](images/wistron-3.png)

![](images/wistron-2.png)

![](images/wistron-1.png)

Figure 1. Example of patient status detection (Right and middle) and face recognition (Left)

Before the project began, the OpenPOWER solution team summarized the request from VCC: 1) more GPU memory size, 2) high bandwidth and coherency between GPU-CPU and GPU-GPU, and 3) support simultaneous multi-user model training. Finally, they chose Polaris Plus— a dual socket 2U Power8 server with four NVIDIA SXM2 P100 GPU— to fulfill all VCC requirements. First of all, Polaris Plus has up to 64GB GPU memory with four GPU by 16 GB each. Second, Polaris Plus supports NVLink technology by the coherence between Power8 CPU and NVIDIA SXM2 P100 GPU, which provides 40 GB/s of bandwidth between every link of GPU-CPU and GPU-GPU. And the last, due to Polaris Plus has four physical independent GPU, the system is able to serve four users training model at the same time.

![](images/wistron-4.jpg)

 

 

 

 

 

 

 

Figure 2. Power8 Polaris Plus

![](images/wistron-5.jpg)

 

 

 

 

 

 

According to VCC’s data, their original equipment—one GTX 1080 GPU installed on an x86 workstation—required approximately one month to train a big model with enough accuracy for commercial purposes. After using the OpenPOWER solution, only around 3.5 days were required for the same job. The result is not only huge time savings on training, but also on optimization. The project is still ongoing, but these initial results are very promising.

If you are interested in GPU applications on OpenPOWER, please take a look at our latest Power9 product— [MiHawk](https://openpowerfoundation.org/?resource_lib=wistron-corp-p93d2-2p-mihawk). We also have another revolutionary product coming soon, which will enable users to expand their servers with up to 16 PCIe GPUs!

If you would like to know more information, please contact us at [mike\_liao@wistron.com](mailto:mike_liao@wistron.com) or [phoebe\_li@wistron.com](mailto:phoebe_li@wistron.com).

#### **About Wistron**

As a long-standing partner with IBM, Wistron utilizes more than 10 years PowerPC design and manufacture experience to offer robust services across diverse technical platforms. Wistron provides tailored, flexible business models from barebones to rack integration delivery to meet various business needs.
