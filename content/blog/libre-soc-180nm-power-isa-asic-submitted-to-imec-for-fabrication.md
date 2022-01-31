---
title: "Libre-SOC 180nm Power ISA ASIC Submitted to Imec for Fabrication"
categories:
  - "blogs"
tags: 
  - "power-isa"
  - "libre-soc"
  - "180nm-power-isa-test-asic"
  - "chips4makers"
  - "sorbonne-university"
  - "imec"
  - "tsmc"
date: "2021-07-08"
draft: false
---

[Libre-SOC](https://libre-soc.org/)'s 180nm Power ISA Test ASIC, developed in conjunction with [Chips4Makers](https://chips4makers.io/) and Sorbonne Université’s [LIP6](https://www.lip6.fr/?LANG=en), has been submitted to [Imec](https://www.imec-int.com/en)’s MPW Shuttle Service for fabrication in [TSMC](https://www.tsmc.com/english) 180nm.

The team that collaborated on the project has a wealth of expertise in software engineering and ethical hardware design, and as a matter of principle used a fully free and open source toolchain to deliver this groundbreaking chip. This makes it the first ASIC of its kind, with many more to come - each edging closer to an attractive open hardware alternative to current proprietary offerings. The project was funded by [NLnet Foundation](https://nlnet.nl/) as part of its Next Generation Internet initiative, as a fundamental technological building block that will help increase privacy and trustworthiness for end users.

Implementing a fixed-point subset of the v3.0B OpenPOWER ISA, Libre-SOC’s 180nm Power ISA Test ASIC is the world's first Power ISA implementation designed outside of IBM to go to silicon, following [IBM’s open sourcing of the POWER ISA in 2019](https://newsroom.ibm.com/2019-08-21-IBM-Demonstrates-Commitment-to-Open-Hardware-Movement). Libre-SOC used Microwatt, which was designed by IBM and [sent to Skywater for fabrication earlier this year](https://openpowerfoundation.org/openpower-foundation-provides-microwatt-for-fabrication-on-skywater-open-pdk-shuttle/), as a reference design for benchmarking and cross-verification.

\[caption id="attachment\_7838" align="aligncenter" width="500"\]![Snapshot of the 180nm GDS-II file laid out automatically with coriolis2](images/Libre-SOC-ASIC-1024x1024.png) Snapshot of the 180nm GDS-II file laid out automatically with coriolis2\[/caption\]

The ASIC is 130,000 gates, measures 5.5 x 5.9 mm^2, contains four 4k SRAMs developed by Chips4Makers, and a 300 mhz Voltage-Controlled PLL developed by [Professor Galayko](https://www.lip6.fr/actualite/personnes-fiche.php?ident=P230) of Sorbonne Université. The VLSI tape-out was carried out by [Jean-Paul Chaput](https://lip6.fr/Jean-Paul.Chaput) of Sorbonne Université using coriolis2, and the Static Timing Analysis and LVS checking by [Dr. Marie-Minerve Louërat](https://www-soc.lip6.fr/users/marie-minerve-louerat/) of Sorbonne Université. The HDL of the core is entirely in nmigen, a python Object-Orientated HDL.

The Cell Library used, FlexLib, also sponsored by NLnet, was developed by [Staf Verhaegen](https://www.linkedin.com/in/staf-verhaegen-b3316b/?originalSubdomain=be) of Chips4Makers, and is Libre-Licensed. Symbolic (ghost) versions of FlexLib allowed Libre-SOC developers to not have to sign a Foundry NDA during the development of the ASIC Layout: an important requirement to fulfil their transparency obligations to NLnet under the Privacy and Enhanced Trust Programme.

LIP6 developed the VLSI ASIC Layout tool, coriolis2. Coriolis2 is also entirely Libre-licensed and is a fully automated HDL to GDS-II tool which requires no manual intervention. It is independent of OpenLANE, is developed entirely in Europe, and has the same fully automated capability of turning HDL into 100% DRC clean GDS-II.

LIP6 were able to create the GDS-II tape-out under NDA using "Real" (non-symbolic) versions of Chips4Makers’ FlexLib, whilst Libre-SOC developers assisted using Symbolic Cells.

“We developed this ASIC on the Power architecture because of its supercomputing pedigree, and the decades-long commitment and stability that IBM and other OpenPOWER Foundation members have sustained,” said [Luke Kenneth Casson Leighton](https://libre-soc.org/lkcl/), lead developer and project coordinator for Libre-SOC. “On this strong base, we can build a reliable, efficient Hybrid 3D CPU-VPU-GPU, and our next test ASIC will include Draft Cray-style Vector Extensions, SVP64.”

For more information, contact the developers of Libre-SOC at [http://libre-soc.org](http://libre-soc.org/).
