---
title: "Accelerated Photodynamic Cancer Therapy Planning with FullMonte on OpenPOWER"
date: "2015-01-19"
categories: 
  - "blogs"
---

### Abstract

Photodynamic therapy (PDT) is a minimally-invasive cancer therapy which uses a light-activated drug (photosensitizer/PS). When the photosensitizer absorbs a photon, it excites tissue oxygen into a reactive state which causes very localized cell damage. The light field distribution inside the tissue is therefore one of the critical parameters determining the treatment's safety and efficacy. While FDA-approved and used for superficial indications, PDT has yet to be widely adopted for interstitial use for larger tumours using light delivered by optical fibres due to a lack of simulation and planning optimization software. Because tissue at optical wavelengths has a very high scattering coefficient, extensive Monte Carlo modeling of light transport is required to simulate the light distribution for a given treatment plan. To enable PDT planning, we demonstrate here our “FullMonte” system which uses a CAPI-enabled FPGA to simulate light propagation 4x faster and 67x more power-efficiently than a highly-tuned multicore CPU implementation. With coherent low-latency access to host memory, we are not limited by the size of on-chip memory and are able to transfer results to and from the accelerator rapidly, which will be support our iterative planning flow. Potential advantages of interstitial PDT include less invasiveness and potential post-operative complications than surgery, better damage targeting and confinement than radiation therapy, and no systemic toxicity unlike chemotherapy. While attractive for developed markets for better outcomes, PDT is doubly attractive in emerging regions because it offers the possibility of a single-shot treatment with very low-cost and even portable equipment supported by remotely-provided computing services for planning.

### Bios

Jeffrey Cassidy, MASc, PEng is a PhD candidate in Electrical and Computer Engineering at the University of Toronto. Lothar Lilge, PhD is a senior scientist at the Princess Margaret Cancer Centre and a professor of Medical Biophysics at the University of Toronto. Vaughn Betz, PhD is the NSERC-Altera Chair in Programmable Silicon at the University of Toronto.

### Acknowledgements

The work is supported by the Canadian Institutes of Health Research, the Canadian Natural Sciences and Engineering Research Council, IBM, Altera, Bluespec, and the Southern Ontario Smart Computing Innovation Platform.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/Cassidy-Jeff_OPFS22015_031015_final.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/Cassidy-Jeff_OPFS22015_031015_final.pdf)

[Back to Summit Details](javascript:history.back())
