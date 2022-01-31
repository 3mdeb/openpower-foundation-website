---
title: "OpenPOWER Summit North America 2019: Introducing the Microwatt FPGA Soft CPU Core"
date: "2019-10-09"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "xilinx"
  - "openpower-foundation"
  - "openpower-summit-north-america"
  - "ibm-power-isa"
  - "anton-blanchard"
  - "microwatt"
---

By: Hugh Blemings, Executive Director, OpenPOWER Foundation

![](images/Microwatt.png)

The success of open source software has made the march toward open hardware that extends down to the chip level inevitable. With the [release of the IBM POWER ISA](https://openpowerfoundation.org/the-next-step-in-the-openpower-foundation-journey/) at OpenPOWER Summit North America, we are one step closer to achieving that vision as an open technical commons.

The number of inquiries that we have received since this announcement tells us we’re on the right track! Specifically, the Microwatt FPGA Soft CPU Core written in VHDL that was developed by [Anton Blanchard](https://www.linkedin.com/in/antonblanchard/?originalSubdomain=au) and his colleagues at IBM has all but stolen the show.

While originally intended as a proof of concept, the core has garnered global interest from the open community - with intrepid early adopters contributing code to extend and improve it (check out some of the code on Github, [here](https://github.com/antonblanchard/microwatt)).

So why the excitement? On the lowest level of the stack, Microwatt gives interested parties a way to play with custom instructions and changes to the CPU itself. As one open source developer put it to me “It’s just a _make_ away”

Microwatt also gives developers the opportunity to try out a basic 64-bit POWER core on low cost FPGA hardware or even in a software simulation environment.

Taken together these in turn open up the possibility of embedded and purpose-built accelerator applications based on POWER - developed with something like Microwatt, implemented on a high end FPGA, ASIC or custom silicon. That’s pretty cool.

I mentioned in a passing [tweet](https://twitter.com/hughhalf/status/1179613610219171841) last week that I was lucky enough to be privy to discussions about where this could all lead. If you’re at [Open Source Summit](https://events19.linuxfoundation.org/events/open-source-summit-europe-2019/) this month, I encourage you to stay an extra day or two to check out our upcoming [OpenPOWER Summit Europe](https://events.linuxfoundation.org/events/openpower-summit-eu-2019/) - we are currently adding additional open hardware sessions, and I have a _hunch_ that there may be a pretty special announcement about Microwatt and other things on the open ISA too. 

Watch Anton’s entire session on Microwatt at the OpenPOWER Summit North America below.

<iframe src="https://www.youtube.com/embed/JdMTLs7EMM0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
