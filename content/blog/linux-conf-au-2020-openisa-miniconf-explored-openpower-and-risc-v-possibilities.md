---
title: "Linux.conf.au 2020: OpenISA miniconf explored OpenPOWER and RISC-V Possibilities"
date: "2020-02-03"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "openpower-foundation"
  - "hugh-blemings"
  - "linux-conf-au"
  - "risc-v"
  - "allstair-francis"
  - "openisa-miniconf"
---

By: [Hugh Blemings](https://www.linkedin.com/in/hugh-blemings/detail/recent-activity/), Executive Director, OpenPOWER Foundation

\[caption id="attachment\_7341" align="alignnone" width="700"\]![](images/OpenISA-1024x576.jpg) Hugh Blemings and Allstair Francis at the OpenISA miniconf, held at linux.conf.au in January, 2020.\[/caption\]

In mid-January, I made what has become an annual pilgrimage to [linux.conf.au](https://linux.conf.au/) - the Linux/Open Source conference of choice for antipodeans, not to mention a sizeable contingent of presenters and attendees from places further afield.

Over the years I’ve had the good fortune to be involved in many capacities at LCA, and 2020 was no different. I not only presented a session but also co-organised a day-long “miniconf” on a subject close to my heart.

[Alistair Francis](https://www.linkedin.com/in/alistair23/) (part of the great RISC-V crew at [Western Digital](https://www.westerndigital.com)) and I ran what we believe was one of the first OpenISA miniconferences that had sessions covering both RISC-V and OpenPOWER, along with sessions on general ISA related topics. I’ll come back to these in a moment but first wanted to give a bit of a tour of the OpenPOWER-related ones.

First up was the session "[POWER OpenISA and Microwatt introduction](https://www.youtube.com/watch?v=DFGK8rdWWvs)" by Michael Neuling. Unfortunately, Mikey got called away on business at the last minute, so [Anton Blanchard](https://www.linkedin.com/in/antonblanchard/), a fellow IBMer, stepped in. The session gives a great overview of both the now-opened ISA as well as Microwatt, a FPGA softcore implementation.

Anton’s originally scheduled talk "[Build your own Open Hardware CPU in 25 minutes or less](https://www.youtube.com/watch?v=g3slH03MCmo)" was up next. It gave a bit more context around the Microwatt simulation and how easy it is to add instructions to the implementation.

Last but by no means least of the OpenPOWER-specific sessions in the miniconf was [Paul Mackerras](https://github.com/paulusmack)’ deep dive ["Microwatt Microarchitecture"](https://www.youtube.com/watch?v=JkDx_y0onSk) in which he gave a detailed tour through the implementation of Microwatt and some of the architectural decisions and optimizations that have already been made.

As I mentioned earlier, aside from the OpenPOWER specific talks, Alistair and I co-presented an [intro session](https://www.youtube.com/watch?v=1NM_ZNlFMKQ&feature=youtu.be) that gave a snapshot of both ecosystems and how they fit together in early 2020. Beyond this, there were several talks that covered both RISC-V and other general Open ISA topics. All are worth a look but my own favourites are probably either [Keith Packard’](https://www.linkedin.com/in/keithrpackard/)s session on [“picolibc: a C library for smaller systems”](https://www.youtube.com/watch?v=SC6aBezNFFQ) or [Sean "xobs" Cross](https://twitter.com/xobs?lang=en) on ["Paying it Forward: Documenting your Open Hardware Module."](https://www.youtube.com/watch?v=LumvbPLtgxw) I’ve listed all the miniconf sessions for reference at the end of this post.

Later in the main conference program, I presented a session ["Open AND high-performance Computing"](https://www.youtube.com/watch?v=poUGzQXHTak&t=1s) which pointed out that as an industry we need to have computing hardware that is both open and provides high performance - and that is just what OpenPOWER provides. I then gave an update on the OpenISA before a very enjoyable and thought-provoking Q&A from the audience.

Linux.conf.au is always a great week and I recommend the many other sessions and keynotes. They’re all available through the linux.conf.au [YouTube channel](https://www.youtube.com/channel/UCciKHCG06rnq31toLTfAiyw).

_PS - Make sure to follow along for more updates from industry events. For example, Anton Blanchard had a great session at the Chisel Community Conference last week - keep an eye out for an upcoming blog post on it!_

 

<table><tbody><tr><td><b>Session Name</b></td><td><b>Speaker(s)</b></td></tr><tr><td><a href="https://www.youtube.com/watch?v=1NM_ZNlFMKQ&amp;feature=youtu.be"><span style="font-weight: 400;">OpenISA Miniconf Intro</span></a></td><td><span style="font-weight: 400;">Alistair Francis &amp; Hugh Blemings</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=qwkab2Z44pk&amp;t=6s"><span style="font-weight: 400;">RISC-V software ecosystem in 2020</span></a></td><td><span style="font-weight: 400;">Atish Patra</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=GydyykyNjxs"><span style="font-weight: 400;">RISC-V FDPIC/NOMMU toolchain/runtime support</span></a></td><td><span style="font-weight: 400;">Maciej W. Rozycki</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=wNM1VqEqvyE"><span style="font-weight: 400;">RISC-V 32-bit glibc port</span></a></td><td><span style="font-weight: 400;">Alistair Francis</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=4GoikHB5Qcw"><span style="font-weight: 400;">Co-developing RISC-V Hypervisor Support</span></a></td><td><span style="font-weight: 400;">Anup Patel</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=RU6RPYAqFzE"><span style="font-weight: 400;">POWER OpenISA and Microwatt introduction</span></a></td><td><span style="font-weight: 400;">Mikey Neuling (Anton Blanchard presenting)</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=g3slH03MCmo"><span style="font-weight: 400;">Build your own Open Hardware CPU in 25 minutes or less</span></a></td><td><span style="font-weight: 400;">Anton Blanchard</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=JkDx_y0onSk"><span style="font-weight: 400;">Microwatt Microarchitecture</span></a></td><td><span style="font-weight: 400;">Paul Mackerras</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=LumvbPLtgxw"><span style="font-weight: 400;">Paying it Forward: Documenting your Open Hardware Module</span></a></td><td><span style="font-weight: 400;">Sean “xobs” Cross</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=SC6aBezNFFQ"><span style="font-weight: 400;">picolibc: a C library for smaller systems</span></a></td><td><span style="font-weight: 400;">Keith Packard</span></td></tr><tr><td><a href="https://www.youtube.com/watch?v=gDP315b6_Bs"><span style="font-weight: 400;">Universal Tools for Acceleration, Timing, Integration &amp; Machine Enhancement&nbsp;</span></a></td><td><span style="font-weight: 400;">Hasjim Williams</span></td></tr></tbody></table>
