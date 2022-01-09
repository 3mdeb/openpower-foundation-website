---
title: Porting and Benchmarking of BWAKIT pipeline on Open POWER architecture
link:
tags:
  - software
  - hardware
  - power8
  - genomemapping
date: 2017-09-20
draft: false
---

This paper describes how to port various pre-built application binaries used in BWAKIT into OpenPOWER architecture and
execute the BWAKIT pipeline successfully.  

Next Generation Sequencing (NGS) technology produces large volume of genome data,
which gets processed using various open source Bioinformatics tools.
The configuration and compilation of some of the bioinformatics tools (e.g. BWAKIT, root) are challenging,
requiring application porting for some architectures (e.g. IBM Power).
Moreover, the application porting should not change the semantics of the program and output generated
from different architectures should be similar across different architectures.
Burrows-Wheeler Aligner (BWA) is the most popular genome mapping application used in BWAKIT toolset.
The BWAKIT provides pre-compiled binaries for x86_64 architecture and end-to-end solution for genome mapping.
This paper describes how to port various pre-built application binaries used in BWAKIT into OpenPOWER architecture and
execute the BWAKIT pipeline successfully.
In addition, it reports the validation of the output results on OpenPOWER to confirm the successful porting of BWAKIT.  

_Note: This paper is the result of collaboration within members of the Personalized Medicine Workgroup and Sidra medical and Research Center._


