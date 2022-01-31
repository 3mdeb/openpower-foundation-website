---
title: "Wistron Demonstrates How to Set Up IBM PowerAI on Mihawk"
date: "2019-04-30"
categories: 
  - "blogs"
tags: 
  - "featured"
---

By Wistron Corporation

Applications like AI (Artificial Intelligence) and ML (Machine Learning) have been growing quickly in recent years. Developers need not only powerful systems to accelerate development progress but also a friendly development environment that can easily jumpstart the process.

[Wistron POWER9 Mihawk](https://openpowerfoundation.org/?resource_lib=wistron-corp-p93d2-2p-mihawk) supports PCIe Gen4, which has twice the bandwidth of PCIe Gen3, and up to 10 PCIe slots, which is more flexible for users to install various devices such as GPU or FPGA for AI/ML/DL purposes. Please see [here](https://openpowerfoundation.org/?resource_lib=wistron-corp-p93d2-2p-mihawk) for more system information.

IBM has vast experience and a wide technology presence in the AI domain. PowerAI is the key product and is designed for enterprises to start using AI technology more easily. IBM also delivers PowerAI in Docker, which reaps the benefits of containers that can deploy PowerAI to multiple servers faster and easier.

Here we demonstrate how to set up an IBM PowerAI of Docker image on Mihawk.

We use Ubuntu 18.04.1 with default kernel version as host OS. And other requirements of software components for PowerAI are:

- NVIDIA CUDA : 10.1
- NVIDIA cuDNN : 7.5
- NVIDIA NCCL : 2.4.2
- Conda Package : 4.5.12
- Docker-CE : 18.06.1~ce~3.0~ubuntu
- NVIDIA Docker : 2.0

For NVIDIA components, the CUDA package can be found in [here](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=ppc64le&target_distro=Ubuntu&target_version=1804&target_type=deblocal), cuDNN is [here](https://developer.nvidia.com/rdp/cudnn-download) and NCCL is [here](https://developer.nvidia.com/nccl/nccl-download). These NVIDIA components are delivered via conda channel and do not need to be downloaded and installed manually. The driver can be downloaded [here](https://www.nvidia.com/Download/index.aspx?lang=en-us).

The Conda package can be found in [here](https://repo.anaconda.com/archive/). Using Anaconda2 or Anaconda3 is acceptable. [IBM’s website](https://www.ibm.com/support/knowledgecenter/SS5SF7_1.6.0/navigation/pai_setupAnaconda.html) shows more details about how to install and set up Anaconda on PowerPC system. And we installed “Anaconda3-2019.03-Linux-ppc64le.sh” for this demonstration.

To install Docker-CE, here is a [website](https://docs.docker.com/install/linux/docker-ce/ubuntu/) that describes more details for installation.

And for the PowerPC platform, there is no “docker-ce-cli” in the repository, so this software package can be ignored. And the Docker-CE version for NVIDIA Docker 2.0 in Ubuntu 18.04 is **18.06.1~ce~3-0~ubuntu**. The available versions can be showed with the command:

<table><tbody><tr><td width="553">$ <strong>apt-cache madison docker-ce</strong></td></tr></tbody></table>

_Figure 1: List available versions of Docker-CE_

![](images/Figure-1.png)

 

 

 

 

So we need to specify the version to install Docker-CE as the command below:

<table><tbody><tr><td width="553">$ <strong>sudo apt install docker-ce=18.06.1~ce~3-0~ubuntu containerd.io</strong></td></tr></tbody></table>

For NVIDIA Docker 2.0, the repository configuration can be found [here](https://nvidia.github.io/nvidia-docker/). And then install nvidia-docker2 and reload the Docker daemon configuration using the following commands:

<table><tbody><tr><td width="553">$ <strong>sudo apt install nvidia-docker2</strong><div></div>$ <strong>sudo pkill -SIGHUP dockerd</strong></td></tr></tbody></table>

After the requirements are installed successfully, we can start to download a PowerAI docker image. Here we download the latest version with all frameworks installed as an example.

<table><tbody><tr><td width="553">$ <strong>docker pull ibmcom/powerai:1.6.0-all-ubuntu18.04-py3-ppc64le_cloud</strong></td></tr></tbody></table>

_Figure 2: Screenshot of PowerAI image downloaded complete_

![](images/Figure-2.png)

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

To start the PowerAI container:

<table><tbody><tr><td width="553">$ <strong>docker run --runtime=nvidia --env LICENSE=yes --env -t -i ibmcom/powerai:1.6.0-all-ubuntu18.04-py3-ppc64le_cloud /bin/bash</strong><div></div>(Note: Use <strong>--runtime=nvidia</strong> to make sure a docker image that can use NVIDIA GPU modules and NVIDIA software packages from local host.)</td></tr></tbody></table>

Or

<table><tbody><tr><td width="553">$ <strong>nvidia-docker run --env LICENSE=yes --env ACTIVATE=all -t -i ibmcom/powerai:1.6.0-all-ubuntu18.04-py3-ppc64le_cloud /bin/bash</strong></td></tr></tbody></table>

_Figure 3: Screenshot of some frameworks in PowerAI_

![](images/Figure-3.png)

 

 

 

 

 

 

With the IBM PowerAI solution, we can easily set up a development environment for AI applications on our P9 Mihawk. Users can focus more on their application developments with no need to worry about software dependency problems.

If you would like to know more information, please contact us at [mike\_liao@wistron.com](mailto:mike_liao@wistron.com) or [phoebe\_li@wistron.com](mailto:phoebe_li@wistron.com).

#### **About Wistron**

![](images/Summit-China-5.jpg)As a long-standing partner with IBM, Wistron utilizes more than 10 years PowerPC design and manufacture experience to offer robust services across diverse technical platforms. Wistron provides tailored, flexible business models from barebones to rack integration delivery to meet various business needs.
