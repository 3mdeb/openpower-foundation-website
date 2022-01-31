---
title: "Wistron Demonstrates OpenFOAM MotorBike Benchmark Results on MiHawk"
date: "2018-09-26"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Wistron Corporation_

[OpenFOAM](https://www.openfoam.com/)® (Open Field Operation and Manipulation) is one of the most famous open source packages to solve complex fluid flows which involve chemical reactions, turbulence and heat transfer, acoustics, solid mechanics and electromagnetics. To evaluate how the Power9 system could improve OpenFOAM computing, we used the [MiHawk](https://openpowerfoundation.org/wp-content/uploads/2018/06/MiHawk-down.pdf)\--2U2S Power9 system to run the benchmark. We found that it only takes about 2/3 of runtime to finish the same job on MiHawk, meaning about a 50% performance improvement compared to a system with dual Intel Xeon Gold 6148 processors.

We couldn’t wait to share the results with OpenPOWER Foundation members.

## Test Environment Setup

In this demonstration, we used MotorBike with 2M elements. The benchmark showed how long it takes to complete 100 iterations. The configuration of the test environment is seen in Table 1 below.

\[caption id="attachment\_5760" align="aligncenter" width="623"\][![](images/Table-1-MotorBike-1.jpg)](http://opf.tjn.chef2.causewaynow.com/wp-content/uploads/2018/09/Table-1-MotorBike-1.jpg) Table 1. Test configuration with MotorBike\[/caption\]

## Results

We compared our results to benchmarks achieved by other processors [found here](http://openfoamwiki.net/index.php/Benchmarks). The summary is seen below in Figure 1.

\[caption id="attachment\_5762" align="aligncenter" width="658"\][![](images/Figure-1-MotorBike-1.png)](http://opf.tjn.chef2.causewaynow.com/wp-content/uploads/2018/09/Figure-1-MotorBike-1.png) Figure 1. OpenFOAM Benchmarks summary results\[/caption\]

## Conclusion

With higher bandwidth between CPU and memory in Power9, there is an advantage for OpenFOAM computing on Power9 over other CPU models. Furthermore, this was a single node demonstration. The performance would be further optimized by using an IBM XL-compiler and SpectrumMPI for multi-nodes case.

For more information, please contact: [EBG\_sales@wistron.com](mailto:EBG_sales@wistron.com)

## About Wistron

[![Wistron](images/Wistron-logo-300x101.jpg)](https://openpowerfoundation.org/wp-content/uploads/2018/06/Wistron-logo.jpg)As a long-standing partner with IBM, Wistron utilizes more than 10 years PowerPC design and manufacture experience to offer robust services across diverse technical platforms. Wistron provides tailored, flexible business models from barebones to rack integration delivery to meet various business needs.
