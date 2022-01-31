---
title: "A Better Way to Compress Big Data"
date: "2018-03-08"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "center-for-genome-research-and-biocomputing"
  - "oregon-state-university"
  - "ibm-power-systems"
---

## **Wasting CPU hours on compression**

The Center for Genome Research and Biocomputing (CGRB) has a large computing resource that supports researchers at Oregon State University by providing processing power, file storage service and more. This computational resource is also used to capture all data generated from the CGRB Core Laboratory facility that processes biological samples used in High Throughput Sequencing (HTS) and other data rich tools.

Currently, the CGRB Core Lab generates between 4TB and 8TB of data per day which directly lands on the biocomputing resource and is made immediately available to researchers.  Because of this, the CGRB has over 4PB of usable space within our biocomputing facility and continues to add space monthly. Since individual labs must purchase file space needed to accomplish their research, there is always pressure from the lab managers to have users clean up and reduce space allowing for new experiments to be done without the need to purchase more space. This process leads to many users taking CPU time to compress data needed for later use but limiting the lab’s current available space. Since we like to use processing machines for processing data and not just compressing, we needed to find a solution allowing GZIP work to be done without tying up our CPU hours.

## **More computing, faster**

To reduce loads on the processing machines and computational time devoted to compressing data, we started considering FPGA cards.

Specifically, we evaluated offloading compression processes directly onto a peripheral FPGA card. Offloading compression would increase our output and help manage file space usage so groups do not have to purchase more space to start new experiments.

The new IBM Power Systems POWER8 machines include an interface used to increase speed from CPUs to FPGAs in expansion slots. The Coherent Accelerator Processor Interface (CAPI) connects the expansion bus and allows users to access resources external to the main CPU and memory with up to 238 GB/sec bus speed, thus overcoming a key limitation when working with large data sets.

Our users do take advantage of the capabilities of the FPGA card, they not only complete their tasks more quickly, but also free up additional CPU hours for other researchers on the cluster. The solution has provided a net benefit in resource utilization and thus has allowed _all_ users to do more computing, faster.

## **The GZIP coprocessor success story**

Initial tests showed compressing a small job with a 22-gigabyte file using the CPU would take over 9 minutes of time versus running on the FPGA card the same file would finish in 19 seconds. These tests were changed to massively increase the data being compressed and found that a job that would take 67 hours on the CPU would only take 50 minutes on the FPGA.

The FPGA GZIP coprocessor has allowed our researchers and staff to quickly recover valuable file space, while speeding up analytics and processing. The coprocessor has its own queue allowing users to submit jobs that can access the gzip card rather than wait to use it interactively. As the coprocessor can only be utilized by a single process at any given time, using the queuing system allows for a mechanism where multiple users can submit jobs to use the card without over-loaded card since the queue waits for one job to finished before beginning the next.

We have seen as much as a 100-fold increase in the rate at which we can compress and decompress data to and from our storage cluster. These data largely consist of text-based strings (e.g., A, C, T and G nucleotides), meaning they are highly compressible.

The compression ratio achieved with the gzip card is inferior to that obtained by running gzip directly through the main processor. Our observations indicate that the gzip card yields approximately 80% of the compression obtained using standard methods. This was within an acceptable range for our users since the speed of both compression and decompression is so much greater than those achieved by the standard methods.

<table><tbody><tr><td>15 GB .fastq sequence file</td><td><strong>Compressed</strong></td><td><strong>Runtime</strong></td><td><strong>Compression ratio</strong></td><td><strong>Compression</strong><strong>?</strong><strong> rate (GB/s)</strong></td></tr><tr><td>CPU gzip</td><td>3.1 GB</td><td>28m 53s</td><td>5.16</td><td>0.006</td></tr><tr><td>CPU gzip -9</td><td>2.9 GB</td><td>133M 36s</td><td>5.17</td><td>0.001</td></tr><tr><td>Power/CAPI Genwqe_gzip</td><td>4.2 GB</td><td>71 seconds</td><td>3.57</td><td>0.152</td></tr></tbody></table>

**Table-1:** Compression ratio comparison between CPU and FPGA of a 15GB fastq DNA sequence file.
