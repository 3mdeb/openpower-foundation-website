---
title: "With OpenPOWER, Unicamp Shares Academic Research Across Brazil"
date: "2016-06-22"
categories: 
  - "blogs"
tags: 
  - "featured"
---

_By Juliana Rodrigues, Student, Unicamp_

(This post appears as part of our Developer Series. To learn more about what developers are doing with OpenPOWER, visit the **[OpenPOWER Developer Challenge](http://bit.ly/1RUu76u)**)

I was about four years old when I got my first computer, but it wasn't until I was 13 that I had my first experience with Linux. I didn't have a CD drive at the time, so I did a Debian Etch net-install on a dial-up connection. It only took about four hours until I lost my connection and had to start over. After a few more hours and a lot of work, when I saw the login screen I felt like I was diving into a new world.

From there to programming was a short step. After the first months using Debian, I found out that it was possible to make small programs to automate daily tasks. The first one I've written was a python script that downloaded Soundcloud MP3s. At that time, I didn't have professional interest in computer programming, but it only took me a few more years to realize that I could have a fun and interesting career with computer science.

## University of Campinas

For college, [Unicamp](http://www.unicamp.br/unicamp/?language=en) wasn't a hard choice. Currently, Unicamp is the country’s biggest patent holder and [QS gives Unicamp the 11th position on their "Best Universities under 50 years" ranking](http://www.topuniversities.com/universities/universidade-estadual-de-campinas-unicamp).

\[caption id="attachment\_3937" align="aligncenter" width="652"\]![UNICAMP](images/unicamp-campus.jpg) Unicamp\[/caption\]

Unicamp also has a lot of research initiatives running inside its [Institute of Computing](http://www.ic.unicamp.br/en), one of the strongest in Brazil, and I couldn’t wait to leverage the Institute’s resources for my own research. In my first weeks, I met Professor Sandro Rigo and software engineer Rafael Sene, who introduced me to the OpenPOWER Foundation and the research projects they were developing in their Unicamp lab. My eyes sparkled and after two months I was all-in.

In 2015, Unicamp became a member of the OpenPOWER Foundation. Before this union, we developed research in conjunction with IBM through our Linux Technology Center laboratory, located inside Unicamp. This lab now holds our OpenPOWER Lab, aiming to focus our research and development even more on the open-sourced Power architecture.

Right now, our team consists of six people, all dedicated to advancing research on OpenPOWER.

\[caption id="attachment\_3938" align="aligncenter" width="625"\]![From left to right: Rafael Sene, Klaus Kiwi, Julianna Rodrigues, Rodolfo Azevedo, Breno Leitão, MaurÃ­cio Lorenzetti](images/unicamp-team-1024x768.jpg) From left to right: Rafael Sene, Klaus Kiwi, Julianna Rodrigues, Rodolfo Azevedo, Breno Leitão, MaurÃ­cio Lorenzetti\[/caption\]

## Sharing Research Across Brazil

In Brazil, most of our top universities are public universities. This means most of our research funds come entirely from government programs, resulting in budget constraints for many projects. Conducting top research while keeping budgets low is a major challenge.

The majority of Unicamp’s current Institute of Computing research covers a lot of knowledge areas and shares information with students at other institutes. This way, our research in computer science advances knowledge in other fields as well.

In this scenario, we created the “Minicloud”.

## The Minicloud Project

To figure out a way for professors, researchers and students from Unicamp and beyond to conduct their research in an economic, trustworthy and scalable way, we knew we needed to be open. The Minicloud project consists of a completely open-source platform, from the foundation with OpenPOWER architecture up to the top, with OpenStack.

This OpenPOWER and OpenStack project started as a part of Marcelo Araujo's Master thesis to evaluate virtualization performance of POWER8 processors and then became a major project in our lab. After months of studying, building, recompiling and adapting code, we were able to run our first demo OpenStack cloud powered by OpenPOWER.

Currently, our laboratory and the Minicloud project is led by [Professor Rodolfo Azevedo](http://www.ic.unicamp.br/~rodolfo) and supports many researchers and OpenSource projects from around the world. It is conducted entirely inside Unicamp. Our infrastructure features POWER8 and POWER7 machines, comprising up to 720 virtual machines running simultaneously.

## ![unicamp box](images/unicamp-box-225x300.jpg) IBM University Challenge

When we knew that we would be participating in IBM’s Innov8 with POWER8 University Challenge, we saw it as a great opportunity to show the rest of the world what we were developing this whole year. The Minicloud is a big project that we envisioned for so long and that's what we wanted to talk about.

More than an event, it was a prize for our lab and for me to be able to talk about or work, to meet so many interesting people and to learn about so many interesting projects. This experience has done nothing but motivate us to build an develop even more our projects and to contribute to our community.

You couldn’t imagine how pleased we were that Unicamp and our Minicloud project took home the “Best in Show” award at IBM Interconnect! But it was just one example of the great OpenPOWER projects that were on display from other university teams.

\[caption id="attachment\_3940" align="aligncenter" width="625"\]![The Unicamp team at IBM Interconnect](images/unicamp-best-in-show-1024x768.jpg) The Unicamp team at IBM Interconnect\[/caption\]

## The Future

We hope to keep improving our Minicloud and develop even bigger projects that will impact as many people as Minicloud does. We look forward to more opportunities and hope to give more significant contributions to the community.

Beyond supporting external research with Minicloud, we conduct research and development inside our lab to build new tools and methods capable of optimizing open-source packages into Power architecture. We also work with many development teams to migrate packages to Power by having dedicated compiler machines. Among others, we're currently working on:

- Performance Evaluation and Methods Investigation to accelerate seismic processing algorithms in POWER: We are working with the Petrolium Study Center (CEPETRO) to optimize their seismic algorithms that used to run in Xeon machines, to operate much faster using our POWER8 machines. We'll be using the Minicloud to test and develop the study.
- Optimization of FPGA in virtual machines parallel processing: We want to be able to add processing power to our cloud through the use of FPGAs. For that, we'll develop a solution from the ground up in order to allow our virtual machines to communicate properly with the FPGAs.
- Energy reduction through smart monitoring with OpenStack: Using energy detectors, we'll be able to adapt our consumption to our actual usage through a simple OpenStack plugin.
- Performance benchmark and comparison study of processor architectures: This project aims to build a reliable benchmark study between most known hardware architectures, complementing research that we developed in the past.

## If you're curious about our projects, you can visit our webpage [openpower.ic.unicamp.br](http://openpower.ic.unicamp.br/) or get in touch with one of our staff members, and if you're interested in more great projects being developed with OpenPOWER, join the [OpenPOWER Developer Challenge](http://bit.ly/1RUu76u).

* * *

_![foto-descontraida](images/foto-descontraida-150x150.jpg)About Julianna Rodrigues Juliana is a computer science student at Unicamp. She works on many projects at the OpenPOWER Lab as a researcher, such as the implementation of the OpenStack platform for OpenSource research on top of POWER8 and a continuos integration cloud for the Power architecture._
