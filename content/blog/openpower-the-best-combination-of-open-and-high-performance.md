---
title: "OpenPOWER - The Best Combination of Open and High Performance"
date: "2019-11-07"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "nvidia"
  - "mellanox"
  - "xilinx"
  - "wistron"
  - "openpower-foundation"
  - "red-hat"
  - "inspur"
  - "yadro"
  - "power-isa"
  - "microwatt"
  - "raptor-computing"
---

By [Hugh Blemings](https://www.linkedin.com/in/hugh-blemings/), Executive Director, OpenPOWER Foundation

At the OpenPOWER Foundation, creating a level of open hardware has always been one of our core values. In fact, the Foundation was created back in 2013 to encourage open innovation at a system level around POWER technologies. As of mid-2019, we have seen that innovation realised in our ecosystem in the form of hundreds of products spanning systems, accelerators, adapters, commercial and open source software. Then in August of this year, we, along with IBM, [took our commitment to being open even deeper into the stack](https://openpowerfoundation.org/the-next-step-in-the-openpower-foundation-journey/) with the opening of the POWER instruction set architecture (ISA).

During my opening remarks at the recent OpenPOWER Summit in Lyon, I sketched the linkage between two distinct extremes of hardware in the OpenPOWER Ecosystem and the impact this has on our ecosystem overall.

At one extreme we have the world's fastest supercomputers - for example the [Summit](https://www.olcf.ornl.gov/summit/) and [Sierra](https://computing.llnl.gov/computers/sierra) systems in the US that draw on the expertise of over a dozen OpenPOWER Foundation members including IBM, Nvidia, Mellanox and Red Hat.

At the other extreme is the release of the [Microwatt FPGA Soft CPU Core\[0\]](https://github.com/antonblanchard/microwatt). Implemented in VHDL and released under an open source license, this proof of concept core runs at about 100MHz and fits on an embedded board barely 2.5” by 1”. Performance is modest to be sure, but in this particular case, it’s not so much about the FLOPS as it is about flexibility.

See, both Microwatt and Summit/Sierra _share a common Instruction Set Architecture_. Granted, Microwatt at present is confined to the subset of integer instructions, but the toolchain (compilers, linkers, loaders etc.) used to create software for it are identical and can generate code without modification for either run time environment\[1\].  Indeed, the developers of Microwatt used a recent version of Fedora to build the binaries to exercise the implementation during development.

This commonality of instruction set architecture accomplishes several things.

First, it provides groups interested in developing bespoke acceleration hardware that needs extensions to the ISA with a stable and mature environment in which to experiment, prototype and implement. You could put Microwatt core(s) into a large Xilinx FPGA alongside your specialised FPGA acceleration logic, add your custom instructions to the ISA\[2\] and do your proof of concept before migrating to an ASIC or Full Silicon solution. Along the way, you’ll be able to participate in the ISA Working Group to ensure the instructions you add will fit into the official ISA going forward.

Secondly, a common ISA gives developers of embedded systems a mature 64 bit ISA and associated ecosystem to work with whether their target be FPGAs, ASICs or full custom silicon SoC. It is clear from conversations that we have had since the opening of the ISA was announced in August that there is an appetite for a high performance, open 64 bit ISA solution to complement the increasingly vibrant (and, in a good way, less complex) 32 bit Open ISAs that have captured so much mindshare.

Last, but by no means least, this architecture enables an even lower cost entry point for individual developers looking to “tinker” with a 64 bit POWER platform - a great compliment to things like [Raptor Computing’s](https://www.raptorcs.com/) developer and mid range Blackbird and Talos II POWER9 based systems, or [Inspur](https://www.inspurpower.com/), [IBM](https://www-355.ibm.com/systems/power/openpower/), [Yadro](https://yadro.com/tatlin) and [Wistron’s](https://openpowerfoundation.org/wistron-introduces-new-concepts-and-demonstrates-mihawk-results-at-openpower-china-summit-2018/) high-end servers that power data centres and supercomputers around the globe.

All from a common ISA (a very mature one at that).

In her [keynote at the OpenPOWER Summit](https://www.youtube.com/watch?v=ufBtrGJVF6g&list=PLEqfbaomKgQoZf-PgLWIA_on6Cj25volf&index=31&t=2s) in Lyons last week, [Mendy Furmanek](https://www.linkedin.com/in/mendy-furmanek-640425/), President of the OpenPOWER Foundation, compared an ecosystem to the sea - when the tide rises, all the boats, large and small, rise up with it. Likewise a software or hardware ecosystem - as more ways to contribute arise, everyone benefits. The recent opening of the POWER ISA and the release of Microwatt provide two new ways to get involved in the OpenPOWER ecosystem.

If you’re at [SC19 in Denver](https://sc19.supercomputing.org/) this month, drop by the OpenPOWER Booth (Booth 1494) or our stand in the [IBM Booth (Booth 1525)](https://www.ibm.com/it-infrastructure/resources/events/supercomputing) to chat about how you can do just that. Perhaps you are an individual contributor who would like to develop on OpenPOWER. Perhaps you are looking to develop a custom acceleration solution and want a robust and mature ISA to underpin your work, or perhaps you are looking to develop an indiginous microprocessor for hyperscale and HPC application and want to draw on a proven HPC-ready ISA. 

**OpenPOWER can help you get there.**

We look forward to you joining us in this new chapter in OpenPOWER’s journey!

P.S. Rumor has it that Microwatt will be ready to run a standard Linux distro in the not too distant future, stay tuned… ;)

**FOOTNOTES**

\[0\] To hear more about Microwatt, check out Anton Blanchard and Michael Neuling’s presentation at the EU Summit on our [Youtube channel](https://www.youtube.com/watch?v=qXUh7w_mfR0&list=PLEqfbaomKgQoZf-PgLWIA_on6Cj25volf&index=6&t=355s) 

\[1\] For the very technically inclined, Microwatt uses the standard PPC64LE toolchain with compiler flags set to prevent generation of floating point and vector instructions which, in its current form at least, microwatt doesn’t implement.

As an example \- `CFLAGS = -Os -g -Wall -std=c99 -msoft-float -mno-string -mno-multiple -mno-vsx -mno-altivec -mlittle-endian -fno-stack-protector -mstrict-align -ffreestanding -fdata-sections -ffunction-sections`

\[2\] There is even [a tutorial](https://www.talospace.com/2019/09/a-beginners-guide-to-hacking-microwatt.html), contributed by an open source community member, on how to add a simple instruction already available
