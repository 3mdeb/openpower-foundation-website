---
title: OpenROAD and OpenPOWER Microwatt core for low-power ASIC applications
author: Ganesan Narayanasamy
tags:
  - openpower
  - adg
  - academic
  - openroad
date: 2024-01-25
draft: false
---
# OpenROAD and OpenPOWER - Microwatt core for low-power ASIC applications

## OpenPOWER for Energy-efficient applications

The [OpenPOWER](https://openpowerfoundation.org) microwatt processor is an open-source soft process core implementation of the IBM [POWER ISA](https://openpowerfoundation.org/specifications/isa/) architecture that is designed to be highly energy-efficient. This processor is an example of the growing trend of designing low-power processors that can be used in a variety of applications, including mobile devices, Internet of Things (IoT) devices, and more.

### Microwatt
Microwatt is a multi-core processor capable of running at up to 2.3 GHz and using the Power ISA v3.0 specification. It can run on lower cost FPGAs. It has a memory management unit, privilege modes, interrupts, a floating-point unit, an interrupt controller and a level-2 cache, so that it can boot Linux.

The Microwatt processor was implemented using the [OpenROAD](https://theopenroadproject.org/) native design flow - [OpenROAD-flow-scripts](https://github.com/The-OpenROAD-Project/OpenROAD-flow-scripts) . It is available as part of the EDA cloud native solution in OpenPOWER. OpenROAD delivers an autonomous, No-Human-In-Loop, fully-integrated RTL-GDSII flow for the design of digital integrated circuits across a range of technologies. OpenROAD includes specific features for low power design that enabled the design to specification for Microwatt.

## Microwatt Design Flow using OpenROAD

The figures below show the OpenROAD flow using [OpenROAD-flow-scripts](https://github.com/The-OpenROAD-Project/OpenROAD-flow-scripts)

### OpenROAD High-level Flow

{{< image src="blog/openroad_image1.png" >}}

### OpenROAD Flow Scripts - A detailed Physical Implementation Flow

{{< image src="blog/openroad_image2.png" >}}

## Design Methodology

Microwatt was implemented using Skywater130nm (What production versions are supported- Is there a link to share about it? It consists of 6 macros and over 800K standard cells.

The hardware description for Microwatt was defined using Verilog in OpenPOWER. The RTL was synthesized in OpenROAD using Yosys to obtain a power-efficient mapping. [OpenSTA](https://github.com/The-OpenROAD-Project/OpenSTA) is an integrated and incremental timing and power analysis engine built into OpenROAD.

### Synthesis
The OpenROAD flow uses a synthesized netlist from Yosys to transform the RTL into an elaborated design with corresponding technology mapped primitives to generate an optimized netlist based on the input on specified timing constraints. This netlist was used to create the floorplan for detailed physical implementation.

### Placement and Routing

#### Floorplan Import design

Microwatt has 6 macros that were placed using the automatic macro placement in ORFS.

 - RAM512 1 392.925
 - RAM32 1RW1R
 - Multiply_add_64x64
 - RAM32_1RW1R
 - Microwatt_FP_DFFRFile
 - Multiply_add_64x64

{{< image src="blog/openroad_image3.png" >}}

macro placement

### Power Distribution

There are 5 metal layers in total in Microwatt. Metal 1 is horizontal and M2 is vertical followed by M3, M4 and M5 in horizontal direction. Power distribution is using M1, M4 and M5. The M1 layer is horizontal on the standard cell rails to enable power for the standard cells. VIA2 and VIA3 power vias are dropped. M4 power stripes and M5 power stripes are drawn. An alternate pattern of VSS and VDD pattern is followed

The figure below shows the PDN grid generated.

This is the complete PDN of the floor plan.

{{< image src="blog/openroad_image4.png" >}}

### Placement

Global Placement places standard cells to minimize wire length and avoid congestion during routing. Detailed placement further legalizes standard cell placement to remove overlaps and fix orientation for optimal routing. This step also includes the use of the resizer to optimize timing using techniques like buffer insertion, sizing, pin swapping etc.

{{< image src="blog/openroad_image5.png" >}}
Figure: Placement Density View

{{< image src="blog/openroad_image6.png" >}}

Figure: Placement Optimization by Resizer

### Clock Tree Synthesis

ORFS automatically synthesizes clock trees to meet timing constraints and inserts buffers as needed to balance skew on high fanout nets. Filler cells are also added to meet manufacturing density requirements.

{{< image src="blog/openroad_image7.png" >}}

{{< image src="blog/openroad_image8.png" >}}
Figure: ext_clk Clock Tree Viewer

{{< image src="blog/openroad_image9.png" >}}

Figure: jtag_tck Clock Tree Viewer

### Timing Analysis

OpenROAD includes a built-in STA engine that is used to incrementally analyze timing at various flow stages. The GUI enables easy visualization of timing paths and setup/hold checks.

Shown below are post-CTS timing views for setup and hold times.

#### Setup Timing Path

{{< image src="blog/openroad_image10.png" >}}
Figure: Setup Timing Path

{{< image src="blog/openroad_image11.png" >}}

Figure: Hold Timing Path

#### Routing

{{< image src="blog/openroad_image12.png" >}}
Figure: Routing Congestion View

{{< image src="blog/openroad_image13.png" >}}

Figure: Detail Routing

#### Show CTS after detailed placement.

CTS is shown below by highlighting the clock nets before and after CTS

{{< image src="blog/openroad_image14.png" >}}
Figure: ext_clk source CTS

{{< image src="blog/openroad_image15.png" >}}

Figure: jtag tck source CTS

#### How was timing optimization done using the resizer repair commands?

Using resizer commands the following is done at the placement step. The details are available in 3_4_resizer.log

1) 51 input buffers are added
2) 87 output buffers are added
3) 7237 buffers are added in 9711 nets 
4) 23377 instances are resized

#### What tradeoffs were made for timing vs power?

We optimize for timing and less so for power. We do have some power recovery features in development that should be available soon.

#### Where is the static IR estimation report?

In 6_report.log when using ORFS

#### Did you run a simulation for power analysis?

We can provide a VCD (toggle counts) from simulation for improved accuracy. OR doesn't do simulation itself.

#### What kind of signoff was used to verify final timing and power (PrimeTime, Calibre etc.)

We have not done any signoff for final timing and power using Prime Time & Calibre.Only OpenROAD flow is being executed.

### Physical Verification

Once the physical layout (i.e., the GDS file) is complete, the design is ready for final verification and sign-off. This involves running a series of tests to ensure that the design meets all of the necessary requirements and specifications. Any issues that are found can be addressed, and the design can be re-synthesized and re-implemented until it meets all of the necessary criteria.

Finally, the design is ready for fabrication. The GDSII layout file is sent to a foundry, where the physical chip is manufactured. Once the chip is fabricated, it can be assembled into a larger system or device, such as a mobile phone or IoT device.

{{< image src="blog/openroad_image16.png" >}}

Figure: Microwatt Layout generated through OpenROAD

## Results

Showcase results here. Final GDSII. Power and Timing achieved, run times and state the potential for such application development for the future.


Worstcase voltage:1.80e+00 V 
Average IR Drop : 4.62e-04 V 
Worstcase IR Drop: 1.95e-03 V

As a result, it is possible to create highly efficient and effective microwatt processors that can be used in a variety of different devices and applications, from mobile phones to IoT devices and beyond. The combination of the OpenPOWER microwatt processor and the OpenROAD design flow represents a powerful toolset for designers looking to create low-power, high-performance processors for modern electronics.
