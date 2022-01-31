---
title: "Rackspace, OpenPOWER & Open Compute: Full Speed Ahead with Barreleye"
date: "2015-10-06"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "featured"
  - "rackspace"
---

_By Aaron Sullivan, Senior Director and Distinguished Engineer, Rackspace_

In an open community, with great partners, it’s amazing how fast things get done.![barreleye fish](images/barreleye-fish.jpg)

At the end of 2014, Rackspace announced its affiliation with [OpenPOWER](https://openpowerfoundation.org). At that time, we shared our intention to build an OpenPOWER server that cut across four major open source community initiatives (OpenStack, Open Compute, OpenPOWER, and, of course, Linux).

This past spring, at the Open Compute and OpenPOWER annual summits, Rackspace offered up our vision for a more powerful cloud, and shared our “Barreleye” server concept design. (We chose to name it after the barreleye fish because as you can see from the photo above, the fish [has a transparent head](https://en.wikipedia.org/wiki/Barreleye). Get it? It’s open!)

\[caption id="attachment\_2039" align="aligncenter" width="625"\]![Barreleye_26](images/Barreleye_26-1024x754.jpg) Alpha release of Barreleye server package; lid removed, drive tray extended.\[/caption\]

Since then, we’ve worked closely with our partners — [Avago](http://www.avagotech.com), [IBM](http://www.ibm.com), [Mellanox](http://www.mellanox.com), [PMC](http://pmcs.com), [Samsung](http://www.samsung.com) — to make that concept a reality. The first Barreleye servers came online in July, in China. In August, we shipped engineering samples to our San Antonio lab and to our development partners.

Two weeks ago, we showed Barreleye off in its first public forum: a Rackspace-hosted Open Compute engineering workshop.

\[caption id="attachment\_2041" align="aligncenter" width="625"\]![OCP Workshop](images/OCP-Workshop-1024x768.jpeg) Attendees at last month’s engineering workshop check out the Barreleye, the world’s first Open Compute server with an OpenPOWER chip.\[/caption\]

\[caption id="attachment\_2042" align="aligncenter" width="625"\]![Barreleye_08](images/Barreleye_08-1024x683.jpg) L to R, bottom and top views of “Turismo” 10-core/80 hardware thread OpenPOWER processor.\[/caption\]

Our next batch of samples will arrive in November, with more systems going to more partners shortly thereafter. We hope to submit a draft of Barreleye’s Open Compute specification before year-end, and aim to put Barreleye in our datacenters for OpenStack services early next year. Check out some close-ups, below:

\[caption id="attachment\_2050" align="aligncenter" width="625"\]![Barreleye_07](images/Barreleye_07-1024x683.jpg) Barreleye portable “lunchbox” power supply; enables benchtop testing for those without an open rack.\[/caption\]

\[caption id="attachment\_2047" align="aligncenter" width="625"\]![Barreleye_03](images/Barreleye_03-1024x683.jpg) Barreleye hot-swappable drive tray with 15 SSDs installed.\[/caption\]

\[caption id="attachment\_2044" align="aligncenter" width="625"\]![Barreleye_10](images/Barreleye_10-879x1024.jpg) Alpha release of Barreleye motherboard (top) and customizable IO board (bottom).\[/caption\]

Barreleye has the capacity for phenomenal virtual machine, container, and bare metal compute services. Further out on the horizon, we’re looking forward to Barreleye’s successor on the next generation of OpenPOWER chips, and CAPI-optimized services.

Speaking of CAPI, the [OpenPOWER Foundation](https://openpowerfoundation.org/) blog is running a series on CAPI, which enables solution architects to improve system-level performance. IBM’s Sumit Gupta writes about [accelerating business applications with CAPI](https://openpowerfoundation.org/blogs/capi-drives-business-performance/), while Brad Brech weighs in on the benefits of [using CAPI with Flash](https://openpowerfoundation.org/blogs/capi-and-flash-for-larger-faster-nosql-and-analytics/).

It’s been an incredible journey thus far. Here are some observations we’ve made along the way:

- Turns out bugs in open source firmware — even complicated bugs that span many elements — tend to get fixed much faster. The code and functions are not hidden, meaning everyone can get involved.
- BIOS features. Once you’ve worked with [OpenPOWER’s BIOS](https://github.com/open-power/), you’ll want it on every server.
- Even in its first year, [OpenBMC](https://github.com/facebook/openbmc) is showing great potential. Are you in DevOps? Want more control? You’ll get it with OpenBMC. Keep an eye on it.
- Linux distribution, device driver and adapter firmware support continue to expand. At this rate, it will not be long before mainstream server adapter products are as easy to plug into OpenPOWER as any other server.
- People are skeptical until they see it, touch it, log into it. Once they do, they’re pretty excited with Barreleye’s very impressive specs, including:
    - The memory bandwidth — around 200 GiB/sec
    - The clock speed — 3.1 – 3.7 GHz, turbo between 3.6 – 4.1
    - The cache — more than 200 MiB
    - The CPU threads — 128 – 192, utilities like “top” and “nmon” show a CPU for every thread. Even on large displays, they run right off the edge of the screen.

When we announced [our participation in OpenPOWER](http://blog.rackspace.com/openpower-opening-the-stack-all-the-way-down/) last year, we said, “We want our systems open, all the way down. This is a big step in that direction.”

Many big steps already taken. More big steps to go. All towards a more open future. We get there faster, together.

* * *

**_![sullivan_aaron_03](images/sullivan_aaron_03-150x150.jpg)About Aaron Sullivan_** 

Aaron Sullivan is a Senior Director and Distinguished Engineer at Rackspace, focused on infrastructure strategy.

Aaron joined Rackspace's Product Development organization in late 2008, in an engineering role, focused on servers, storage, and operating systems. He moved to Rackspace’s Supply Chain/Business Operations organization in 2010, mostly focused on next generation storage and datacenters. He became a Principal Engineer during 2011 and a Director in 2012, supporting a variety of initiatives, including the development and launch of Rackspace’s first Open Compute platforms. He recently advanced to the role of Senior Director and Distinguished Engineer. These days, he spends most of his time working on next generation server technology, designing infrastructure for Rackspace’s Product and Practice Areas, and supporting the growth and capabilities of Rackspace’s Global Infrastructure Engineering team. He also frequently represents Rackspace as a public speaker, writer, and commentator.

He was involved with Open Compute since its start at Rackspace. He became formally involved in late 2012. He is Rackspace’s lead for OCP initiatives and platform designs. Aaron is serving his second term as an OCP Incubation Committee member, and sponsors the Certification & Interoperability (C&I) project workgroup. He supported the C&I workgroup as they built and submitted their first test specifications. He has also spent some time working with the OCP Foundation on licensing and other strategic initiatives.

Aaron previously spent time at GE, SBC, and AT&T. Over the last 17 years, he’s touched more technology than he cares to talk about. When he’s not working, he enjoys reading science and history, spending time with his wife and children, and a little solitude.
