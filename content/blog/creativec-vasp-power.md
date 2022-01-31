---
title: "CreativeC Optimizes VASP on Power for Alloy Design"
date: "2018-11-29"
categories: 
  - "blogs"
tags: 
  - "featured"
---

\[caption id="attachment\_5954" align="alignleft" width="188"\][![](images/Greg_S_headshot.jpg)](http://opf.tjn.chef2.causewaynow.com/wp-content/uploads/2018/11/Greg_S_headshot.jpg) Greg Scantlen, CEO, CreativeC\[/caption\]

[The Vienna Ab initio Simulation Package](https://www.vasp.at/index.php/about-vasp/59-about-vasp) – also known as VASP – is a popular and powerful HPC application. It is one of the popular tools in atomistic materials modeling, such as electronic structure calculations and quantum-mechanical molecular dynamics.

It is developed at the University of Vienna in Austria for close to thirty years and contains roughly half-a-million lines of code. Currently, it’s used by more than 1,400 research groups in academia and industry worldwide and consistently ranks among the top 10 applications on national supercomputers.

But despite its significant impact on technology, there is one fundamental problem with VASP and similar programs: it does not scale very well. So instead of accelerating workloads, naively running VASP on more nodes can have the opposite effect. In fact, we observed that VASP actually runs _slower_ when operating on more than eight traditional nodes.

Since VASP doesn’t scale well on traditional clusters, it’s a perfect fit for the OpenPOWER architecture. Because OpenPOWER has the highest compute density available in a single node, we applied for and received funding from a grant to run VASP to run quantum chemistry simulations on OpenPOWER.

Now, we’re running just as well or just a bit faster on a single OpenPOWER node as we were previously on eight x86 Linux-based compute nodes. More importantly, in the early phase of this project, we don’t have to compete with rigid time limits and full queues of shared computing facilities. Instead of artificially adding break points and chopping the project into smaller parcels, we can explore larger model sizes and focus on the science.

The result is a more efficient use of computing resources – reduced waiting time and an accelerated timeline for innovative, ground-breaking research.

One project we are pursuing with VASP seeks to improve hip and knee implants. Often, titanium alloy implants used in hip and knee implants are much stronger than bone, sometimes causing bone atrophy following an implant procedure. Our goal is to use VASP on OpenPOWER to identify an alloy that has properties more compatible to bone than traditional titanium alloy.

Improved hip and knee implants are only one advancement that could be made from running VASP on an OpenPOWER system – and there are certainly others!

**[![](images/CreativeC-LOGO-300dpi-RGB-page-001-300x262.jpg)](http://opf.tjn.chef2.causewaynow.com/wp-content/uploads/2018/11/CreativeC-LOGO-300dpi-RGB-page-001.jpg)About CreativeC**

CreativeC’s mission is to facilitate Science and Engineering by computing faster. CreativeC’s discipline is work codesigned High Performance Computing (HPC). We team with expert software developers to offer specialized Instruments for Science and Engineering in the disciplines of Materials Science, Computational Chemistry, Molecular Dynamics, Deep Learning, Neural Networks, Drug Discovery, Biotechnology, and Bioinformatics. Our business model calls for diversification into areas of Science and Engineering made commercially viable by new compute technologies.

[http://creativecllc.com/](http://creativecllc.com/)
