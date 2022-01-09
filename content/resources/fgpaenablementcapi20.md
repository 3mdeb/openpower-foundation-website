---
title: FPGA Enablement for CAPI2.0
link: https://github.com/open-power/snap
tags:
  - hardware
  - software
  - fpga
  - capi
  - snap
date: 2020-02-13
draft: false
---

The purpose of this documentation is to describe how to enable a new customer card to support CAPI SNAP framework.
SNAP is a open-source programming framework for FPGA Accelerations.
Its homepage is https://github.com/open-power/snap.
With it, you can develop accelerators with CAPI technology easily.  

This documentation describes the flow and steps to enable a new PCIe FPGA card to have CAPI2.0 features,
and to support SNAP developing framework.
If your PCIe FPGA card is not listed on today’s available “SNAP enabled cards” (On the homepage README of SNAP Github),
this documentation will guide you on how to enable it.
Since all of the project files are open-source, you can create a Github repository fork, and create a new board support package (BSP) and
walk through the working flow to enable SNAP.  
