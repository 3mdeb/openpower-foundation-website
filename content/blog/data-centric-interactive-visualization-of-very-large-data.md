---
title: "Data Centric Interactive Visualization of Very Large Data"
date: "2015-01-19"
categories: 
  - "blogs"
---

Speakers:  Bruce D’Amora and Gordon Fossum Organization: IBM T.J. Watson Research, Data Centric Systems Group

### Abstract

The traditional workflow for high-performance computing simulation and analytics is to prepare the input data set, run a simulation, and visualize the results as a post-processing step. This process generally requires multiple computer systems designed for accelerating simulation and visualization. In the medical imaging and seismic domains, the data to be visualized typically comprise uniform three-dimensional arrays that can approach tens of petabytes. Transferring this data from one system to another can be daunting and in some cases may violate privacy, security, and export constraints.  Visually exploring these very large data sets consumes significant system resources and time that can be conserved if the simulation and visualization can reside on the same system to avoid time-consuming data transfer between systems. End-to-end workflow time can be reduced if the simulation and visualization can be performed simultaneously with a fast and efficient transfer of simulation output to visualization input.

Data centric visualization provides a platform architecture where the same high-performance server system can execute simulation, analytics and visualization.  We present a visualization framework for interactively exploring very large data sets using both isoparametric point extraction and direct volume-rendering techniques.  Our design and implementation leverages high performance IBM Power servers enabled with  NVIDIA GPU accelerators and flash-based high bandwidth low-latency memory. GPUs can accelerate generation and compression of two-dimensional images that can be transferred across a network to a range of devices including large display walls, workstation/PC, and smart devices. Users are able to remotely steer visualization, simulation, and analytics applications from a range of end-user devices including common smart devices such as phones and tablets. In this presentation, we discuss and demonstrate an early implementation and additional challenges for future work.

### Speaker Bios

**Bruce D’Amora**, _IBM Research Division, Thomas J. Watson Research Center, P.O Box 218, Yorktown Heights, New York 10598 (_[_damora@us.ibm.com_](mailto:damora@us.ibm.com)_)_ . Mr. D’Amora is a Senior Technical Staff Member in the Computational Sciences department in Data-centric Computing group.  He is currently focusing on frameworks to enable computational steering and visualization for high performance computing applications.  Previously, Mr. D’Amora was the chief architect of Cell Broadband Engine-based platforms to accelerate applications used for creating digital animation and visual effects. He has been a lead developer on many projects ranging from applications to microprocessors and holds a number of hardware and software patents. He joined IBM Research in 2000 after serving as the Chief Software Architect for the IBM Graphics development group in Austin, Texas where he led the OpenGL development effort from 1991 to 2000. He holds Bachelor’s degrees in Microbiology and Applied Mathematics from the University of Colorado. He also holds a Masters degree in Computer Science from National Technological University.

**Gordon C. Fossum** _IBM Research Division, Thomas J. Watson Research Center, P.O. Box 218, Yorktown Heights, New York 10598 (_[_fossum@us.ibm.com_](mailto:fossum@us.ibm.com)_)._  Mr. Fossum is an Advisory Engineer in Computational Sciences at the Thomas J. Watson Research Center. He received a B.S. degree in Mathematics and Computer Science from the University of Illinois in 1978, an M.S. in Computer Science from the University of California, Berkeley in 1981, and attained "all but dissertation" status from the University of Texas in 1987.  He subsequently joined IBM Austin, where he has worked on computer graphics hardware development, Cell Broadband Engine development, and OpenCL development. He is an author or coauthor of 34 patents, has received a "high value patent" award from IBM and was named an IBM Master Inventor in 2005. In January 2014, he transferred into IBM Research, to help enable visualization of “big data” in a data-centric computing environment.

### Presentation

<iframe src="https://openpowerfoundation.org/wp-content/uploads/2015/03/D’Amora-Bruce_OPFS2015_IBM_031015_final.pdf" width="100%" height="450" frameborder="0"></iframe>

 [Download Presentation](https://openpowerfoundation.org/wp-content/uploads/2015/03/D’Amora-Bruce_OPFS2015_IBM_031015_final.pdf)

[Back to Summit Details](javascript:history.back())
