---
title: "OCC Firmware Code is Now Open Source"
date: "2014-12-19"
categories: 
  - "press-releases"
  - "blogs"
tags: 
  - "featured"
---

_by Todd Rosedahl, Chief Energy Management Engineer on POWER_

Today, IBM has released another key piece of infrastructure to the OpenPOWER community. The firmware that runs on the On Chip Controller (OCC), along with the host code that loads and initializes it, has been open sourced. The OCC provides access to detailed chip temperature, power, and utilization data, as well as complete control of processor frequency, voltage, and memory bandwidth. This enables customization for performance and energy management, or for maintaining system reliability and availability. Partners now have the flexibility to create innovative power, thermal, and performance solutions on POWER systems.

[![2014_12_15_OCC_Chart](images/2014_12_15_OCC_Chart.jpg)](https://openpowerfoundation.org/wp-content/uploads/2014/12/2014_12_15_OCC_Chart.pdf)

The OCC is a separate 405 processor that is embedded directly on the chip along with the main POWER processor cores. It has its own dedicated 512K SRAM, access to main memory, and 2 dedicated General Purpose off-load Engines (called GPEs). The main firmware runs a 250usec loop that utilizes the GPEs to continuously collect system power data by domain, processor temperatures, memory temperatures, and processor utilization data. The firmware communicates with the open source OpenPOWER Abstraction Layer (OPAL) stack via main memory. In conjunction with the operating system, it uses the data collected to determine the proper processor frequency and memory bandwidth to enable the following functions:

**Performance Boost** The POWER processors can be set to frequencies above nominal. The OCC monitors the system and controls the processor frequency and memory bandwidth to keep the system thermally safe and within acceptable power limits.

**Power Capping** A system power limit can be set. The OCC will continually monitor the power consumption and will reduce the allowed processor frequency to maintain that power limit.

**Energy Saving** When the system utilization is low, the OCC infrastructure can be used to put the system into a low power state. This function can be used to comply with various government idle power regulations and standards.

**System Availability** The OCC supports a Quick Power Drop signal that can be used to respond to power supply failures or other system events that require a rapid power reduction. This function enables systems to run through component or data center power and thermal failures without crashing.

**System Reliability** The OCC can be used to keep component temperatures within reliability limits, extending device lifetime and limiting service costs.

**Performance per Watt tuning** As the system utilization varies, the OCC can provide monitoring information and frequency control that maximizes system performance per watt metrics.

These basic functions can be implemented, enhanced, and expanded. Additionally, completely new functions can be developed using the OCC open source firmware and accompanying framework. See code at https://github.com/open-power/occ and documentation at [https://github.com/open-power/docs/tree/master/occ](https://github.com/open-power/docs/tree/master/occ) on GitHub for more information. For additional details, please reference the video at [https://www.youtube.com/watch?v=Z-4Q0\_l9nt8&feature=youtu.be](https://www.youtube.com/watch?v=Z-4Q0_l9nt8&feature=youtu.be).
