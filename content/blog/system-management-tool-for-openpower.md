---
title: "System Management Tool for OpenPOWER"
date: "2015-01-19"
categories: 
  - "blogs"
---

### Introduction to Authors

Song Yu: Male, IBM STG China, Development Manager Li Guang Cheng: Male, IBM STG China, xCAT Senior Architect Mao Qiu Yin: Male, Teamsun, Director Hu Hai Chen: Male, Teamsun, Development Manager Ma Yuan Liang: Male, Teamsun, System Department Manager Chen Qing Hong: Male, Teamsun, Architect

### Background

OpenPOWER is a new generation platform. As a new system, the infrastructure level management is the most important requirement while the OpenPOWER machines are widely used in cloud area and non-cloud area.

### In cloud area

The end user normally cares about the SaaS or PaaS but for the cloud admin, they must consider how to manage the OpenPOWER physical node to provide service. Quickly and automatically provision physical machines and adding physical nodes into Cloud to provide service are very important and basic requirements for cloud center.

At the same time, if the Cloud provider support HPC related service, they need consider provide physical compute resource to end user but not the virtual resource. How to self-service for physical node is a new challenge in public cloud.

In non-cloud area: A light-weight system management tool for OpenPOWER is also required. How to control the HW and how to integrate with existing Power or x86 cluster smoothly are the major challenges for the OpenPOWER system management tool.

### Demonstrated Features

1. HW Control – Remote power, remote console, hardware inventory, hardware vitals, energy management and so on
2. Automatically Discovery – Automatically discover new OpenPOWER HW and add into management system
3. Provisioning – Unattended OS and application deployment onto the OpenPOWER node
4. Image Management – Clone image,generate image including applications from scratch
5. KVM management – Provision KVM hypervisor and manage the VM lifecycle
6. Docker management – Provision Docker on OpenPOWER node and manage the container lifecycle
7. Multitenancy – Support user, role, tenant and policy management. Work with Keystone for the authentication management and integrate with OpenStack

### Our experience

We will leverage xCAT as the backend and Horizon as the frontend of the OpenPOWER management tool. xCAT has supported OpenPOWER node management and enabled the Docker on OpenPOWER system.

Benefit: The OpenPOWER management tool is based on open source products. It can easily manage the OpenPOWER node and the OpenPOWER vendors can easily add their special HW and FW control functions into the tool as value-add. The whole solution also demonstrates a complete story that how we enable OpenPOWER nodes in a private or public cloud.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Cheng-Li-Guang_OPFS2015_IBM-NCO_031415_final.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Cheng-Li-Guang_OPFS2015_IBM-NCO_031415_final.pdf)

[Back to Summit Details](javascript:history.back())
