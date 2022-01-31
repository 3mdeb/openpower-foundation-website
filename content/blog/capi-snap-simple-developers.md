---
title: "CAPI SNAP: The Simplest Way for Developers to Adopt CAPI"
date: "2016-11-03"
categories: 
  - "capi-series"
  - "blogs"
tags: 
  - "featured"
---

_By Bruce Wile, CAPI Chief Engineer and Distinguished Engineer, IBM Power Systems_

Last week at OpenPOWER Summit Europe, [we announced a brand-new Framework](https://openpowerfoundation.org/blogs/openpower-makes-fpga-acceleration-snap/) designed to make it easy for developers to begin using CAPI to accelerate their applications. The CAPI Storage, Network, and Analytics Programming Framework, or CAPI SNAP, was developed through a multi-company effort from OpenPOWER members and is now in alpha testing with multiple early adopter partners.

But what exactly puts the “snap” in CAPI SNAP? To answer that, I wanted to give you all a deeper look into the magic behind CAPI SNAP.  The framework extends the CAPI technology through the simplification of both the API (call to the accelerated function) and the coding of the accelerated function.  By using CAPI SNAP, your application gains performance through FPGA acceleration and because the compute resources are closer to the vast amounts of data.

## A Simple API

ISVs will be particularly interested in the programming enablement in the framework. The framework API makes it a snap for an application to call for an accelerated function. The innovative FPGA framework logic implements all the computer engineering interface logic, data movement, caching, and pre-fetching work—leaving the programmer to focus only on the accelerator functionality.

Without the framework, an application writer must create a runtime acceleration library to perform the tasks shown in Figure 1.

\[caption id="attachment\_4299" align="aligncenter" width="762"\]![Figure 1: Calling an accelerator using the base CAPI hardware primitives](images/CAPI-SNAP-1.png) Figure 1: Calling an accelerator using the base CAPI hardware primitives\[/caption\]

But now with CAPI SNAP, an application merely needs to make a function call as shown in Figure 2. This simple API has the source data (address/location), the specific accelerated action to be performed, and the destination (address/location) to send the resulting data.

\[caption id="attachment\_4300" align="aligncenter" width="485"\]![Figure 2: Accelerated function call with CAPI SNAP](images/CAPI-SNAP-2.png) Figure 2: Accelerated function call with CAPI SNAP\[/caption\]

The framework takes care of moving the data to the accelerator and putting away the results.

## Moving the Compute Closer to the Data

The simplicity of the API parameters is elegant and powerful. Not only can source and destination addresses be coherent system memory locations, but they can also be attached storage, network, or memory addresses. For example, if a framework card has attached storage, the application could source a large block (or many blocks) of data from storage, perform an action such as a search, intersection, or merge function on the data in the FPGA, and send the search results to a specified destination address in main system memory. This method has large performance advantages compared to the standard software method as shown in Figure 3.

\[caption id="attachment\_4301" align="aligncenter" width="625"\]![Figure 3: Application search function in software (no acceleration framework)](images/CAPI-SNAP-3-1024x538.png) Figure 3: Application search function in software (no acceleration framework)\[/caption\]

Figure 4 shows how the source data flows into the accelerator card via the QSFP+ port, where the FPGA performs the search function. The framework then forwards the search results to system memory.

\[caption id="attachment\_4302" align="aligncenter" width="625"\]![Figure 4: Application with accelerated framework search engine](images/CAPI-SNAP-4-1024x563.png) Figure 4: Application with accelerated framework search engine\[/caption\]

The performance advantages of the framework are twofold:

1. By moving the compute (in this case, search) closer to the data, the FPGA has a higher bandwidth access to storage.
2. The accelerated search on the FPGA is faster than the software search.

Table 1 shows a 3x performance improvement between the two methods. By moving the compute closer to the data, the FPGA has a much higher ingress (or egress) rate versus moving the entire data set into system memory.

\[table id=19 /\]

## Simplified Programming of Acceleration Actions

The programming API isn’t the only simplification in CAPI SNAP. The framework also makes it easy to program the “action code” on the FPGA. The framework takes care of retrieving the source data (whether it’s in system memory, storage, networking, etc) as well as sending the results to the specified destination. The programmer, writing in a high-level language such as C/C++ or Go, needs only to focus on their data transform, or “action.” Framework compatible compilers translate the high-level language to Verilog, which in turn gets synthesized using Xilinx’s Vivado toolset.

With CAPI SNAP, the accelerated search code (searching for one occurrence) is this simple:

for(i=0; i < Search.text\_size; i++){

                                  if ((buffer\[i\] == Search.text\_string)) {

                                                Search.text\_found\_position = i;

                                 }

                 }

The open source release will include multiple, fully functional example accelerators to provide users with the starting points and the full port declarations needed to receive source data and return destination data.

## Make CAPI a SNAP

Are you looking to explore CAPI SNAP for your organization’s own data analysis? Then apply to be an early adopter of CAPI SNAP by emailing us directly at [capi@us.ibm.com](mailto:capi@us.ibm.com). Be sure to include your name, organization, and the type of accelerated workloads you’d like to explore with CAPI SNAP.

You can also read more about CAPI and its capabilities in the accelerated enterprise in our [CAPI series on the OpenPOWER Foundation blog](https://openpowerfoundation.org/blogs/capi-drives-business-performance/).

You will continue to see a drumbeat of activity around the framework, as we release the source code and add more and more capabilities in 2017.
