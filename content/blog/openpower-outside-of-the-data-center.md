---
title: "Bringing OpenPOWER Outside of the Data Center"
date: "2016-11-30"
categories: 
  - "blogs"
---

_By Timothy Pearson, Raptor Engineering_

![talos-opf_png_project-body](images/talos-opf_png_project-body-300x221.jpg)

Ever wish you could use something other than an insecure x86 or low-powered ARM machine to communicate with the OpenPOWER server sitting in your data center? Wish no longer! Meet the Talos™ workstation-class ATX mainboard, built on OpenPOWER and bringing the security and open systems advantages of POWER8 out of the data center and onto your desk. OpenPOWER-member Raptor Engineering is committed to making owner-controllable, Libre-friendly systems available for engineers, programmers, data analysts, as well as anyone else who needs [serious computing power](https://www.crowdsupply.com/raptor-computing-systems/talos-secure-workstation#unreal-engine-4-on-openpowertm), [security](https://www.crowdsupply.com/raptor-computing-systems/talos-secure-workstation#the-state-of-general-purpose-computing), and [flexibility](https://www.crowdsupply.com/raptor-computing-systems/talos-secure-workstation#features-specifications) all in the same machine. The OpenPOWER Foundation provides access to the only modern, performant architecture and shipping CPU that meets these criteria—so OpenPOWER is a perfect fit for our Talos™ machines. Talos™ also shines in storage servers and network processing, where the large number of PCIe 3.0 slots combined with POWER8's I/O performance provides both configuration flexibility and high performance.

## Meet Talos

The [Talos mainboard](https://www.crowdsupply.com/raptor-computing-systems/talos-secure-workstation#features-specifications) hosts a single socketed POWER8 processor and two Centaur DDR3 memory buffers on a standard ATX mainboard.  It includes significant I/O and memory expansion capabilities, including 8 DDR3 ECC memory slots and 7 PCIe slots (56 total PCIe 3.0-capable lanes!), along with the wide variety of on-board peripherals expected in a workstation class mainboard.  Unlike existing OpenPOWER machines, Raptor Engineering has gone one step further and is using reprogrammable logic devices (FPGAs) that have an open toolchain available, making Talos™ completely self-hosting! If you need to modify any aspect of the Talos™ firmware or reprogrammable logic, you can completely recompile and resynthesize the firmware using your Talos™ machine instead of having to fall back to an x86 or Microsoft® Windows® environment.  We have also been instrumental in securing the release of the SBE/Winkle engine code, and as a result the Talos™ mainboard is completely open down to the lowest level firmware and machine schematics, making it an ideal research and development platform to explore next-generation technologies such as CAPI.

 ![talos](images/Talos.jpg) Thanks to IBM's support of Linux on OpenPOWER, Talos™ is ready to run using a variety of modern Linux distributions. We have tested and qualified a wide variety of hardware on our POWER8 SDV for use with Talos™, including GPUs, Mellanox Infiniband devices, and much more. Thanks to POWER8's little endian support, most Linux drivers simply work, and those few that exhibit minor issues due to faulty x86-centric coding are usually trivial to fix. We also plan to work with BSD developers to port one or more of the BSDs to OpenPOWER in support of Talos™, opening the world beyond x86 even wider. 

## Learn More About Talos

Visit the [Talos product page](https://www.crowdsupply.com/raptor-computing-systems/talos-secure-workstation/) to watch videos, read white papers, and learn about how the new Talos workstation brings the data center to your desk!
