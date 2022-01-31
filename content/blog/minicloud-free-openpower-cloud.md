---
title: "Minicloud: The FREE OpenPower Cloud by University of Campinas"
date: "2018-01-30"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "power"
  - "openpower-foundation"
  - "minicloud"
  - "cloud"
  - "unicamp"
  - "high-performance-computing"
---

Minicloud aims to bring POWER architecture to everyone free of charge.

_(Yes, you read that right: FREE of charge.)_

[![MiniCloud - the free OpenPOWER Cloud by Unicamp](images/MiniCloud.png)](https://openpowerfoundation.org/wp-content/uploads/2018/01/MiniCloud.png)

## Minicloud Services

Minicloud provides two basic services, virtual machines and job scheduling.

Voice machines are aimed at general purpose usage, allowing users to have full control over the resources allocated for them and over the machines created. The job scheduling service allows users to submit a task requiring a large amount of processing to be run during an exclusive time slot on a bare metal machine, a POWER System S822LC for High Performance Computing.

The infrastructure is hosted at University of Campinas (Unicamp), which is the result of the partnership with IBM that has lasted over a decade. This partnership boosted the presence of Unicamp as an academic member of the OpenPOWER Foundation, and Unicamp became the first academic member of the OpenPOWER Foundation in Latin America.

Beginning in 2014, Minicloud offered users a manually created virtual machine running on PowerKVM and supported by a set of IBM POWER8 scale-out servers. Asthe service grew, it became necessary to implement a more autonomous solution. We currently use OpenStack, allowing users to launch and destroy virtual machines on their own once their request is approved. With this solution, much of the job is automatically done, such as load balancing among the servers, limiting user usage, control access to the voice machines and more

In 2016, this Minicloud project won "Best in Show" at the "Innov8 with POWER8 University Challenge." To this day, over 2000 instances have been launched on Minicloud catering to a range of needs, from the curious exploitation of the POWER processor using Linux, to supporting open source communities on their development.

Minicloud's instances can be created using a variety of flavors (amount of vCPUs, RAM, and disk) and Linux distros. Mincloud currently supports Debian, Ubuntu, Fedora and CentOS, all on ppc64le and some also on ppc64. The machines are ready to be used a few seconds after launching, via SSH. Most users at Minicloud work on academic projects or open source software. We proudly provided infrastructure for projects like Zabbix, HHVM, RocksDB, GDB, Debian, Glibc, and several others.

In the future, we plan to add a validation service. This will consist of regularly building and testing open source projects using our infrastructure to detect compatibility issues or inconsistent behavior when running on POWER.

Those who are interested in using Minicloud can request access at [http://openpower.ic.unicamp.br/minicloud/](http://openpower.ic.unicamp.br/minicloud/). Every request is individually reviewed and may take a few days to process. We are looking forward helping you expand your POWER.
