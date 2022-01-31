---
title: "Workshop Recap: OpenPOWER Personalized Medicine Working Group"
date: "2015-12-18"
categories: 
  - "blogs"
tags: 
  - "genomics"
  - "personalized-medicine"
  - "transmart"
---

_By Zaid Al-Ars, Cofounder, Bluebee and Chair of the OpenPOWER Foundation Personalized Medicine Working Group_

More than 40 participants attended the OpenPOWER Personalized Medicine Workshop in Austin, TX on November 15, 2015.  The workshop gathered leading experts to address computational technology in the field of personalized medicine including challenges, opportunities and future developments.

Separate sessions featured the perspectives of clinical users, technology providers, and HPC researchers, followed by a panel discussion on overall industry challenges and trends.

# **Session 1: Clinical Users Perspective**

[Dr. John Zhang (MD Anderson)](http://www.mdanderson.org/education-and-research/departments-programs-and-labs/programs-centers-institutes/institute-for-applied-cancer-science/meet-the-team/leadership-team/jianhua-zhang.html) described the state-of-the-art computational infrastructure at the MD Anderson Cancer Center used for the analysis of the center's genomics pipelines, followed by a discussion of future challenges in genomics data storage, clinical algorithm adaptation, data mining and data visualization.

[Dr. Hans Hofmann (UT Austin)](http://cichlid.biosci.utexas.edu/dr.-hans-hofmann.html) presented a global analytical framework for linking genotype information to phenotype information by addressing the biochemistry, cell biology and physiological aspects of an organism, charting the associated computational and analytical challenges. He noted that for personalized medicine approaches to succeed, we must increase our understanding of the causes and consequences of individual and population variation well beyond current genome-wide association and genotype variation studies.

![2015-11-14 10.15.22_2](images/2015-11-14-10.15.22_2-1024x576.jpg)

# **Session 2: Technology Providers Perspective**

[Dr. Zaid Al-Ars (Bluebee)](http://nl.linkedin.com/pub/zaid-al-ars/1/183/95b) presented Bluebee’s platform to address the genome analysis challenge – an accelerated HPC-based private cloud solution to speedup processing of mass volumes of genomics data. The platform provides unrestricted scale-up and on-the-fly provisioning of computational and data storage capacity, along with industry-grade security and data integrity features.  Bluebee’s platform abstracts away the complexity of specialized HPC technologies such as hardware acceleration, offering an easy environment to deploy Bluebee as well as other OpenPOWER genomics technologies.

[Dr. Yinhe Cheng (IBM)](https://www.linkedin.com/in/yinhe-cheng-085baba) discussed IBM's porting and optimization efforts around its [high performance infrastructure for genomics](http://www.ibm.com/common/ssi/cgi-bin/ssialias?subtype=WH&infotype=SA&htmlfid=POW03163USEN&attachment=POW03163USEN.PDF), including:

- [BioBuilds](https://biobuilds.org/?cm_mc_uid=02671964985114431129520&cm_mc_sid_50200000=1450114271) a curated and versioned collection of Open Source bioinformatics tools for genomics, delivering 49 pre-built, POWER8 optimized bioinformatics application binaries
- Broad Best Practices pipeline (BWA/GATK) acceleration on POWER8 demonstrating 2x to 70x analysis speedup of various components of the pipeline - a collaborative effort among IBM, Xilinx and Bluebee
- Speedup of whole human genome analysis from days to less than half an hour using the [Edico Genome solution on Power](https://forums.xilinx.com/t5/Xcell-Daily-Blog/FPGA-based-Edico-Genome-Dragen-Accelerator-Card-for-IBM/ba-p/665850)

![IMG_3741](images/IMG_3741-1024x768.jpg)

# **Session 3: HPC Researchers Perspective**

[Dr. Ravishankar Iyer (University of Illinois Urbana-Champaign)](https://www.ece.illinois.edu/directory/profile/rkiyer) presented research projects focused on improving the performance of cancer diagnostics pipelines, including a computational pipeline coded from scratch that executes significantly faster than current state-of-the-art pipelines. He also presented algorithms for health monitoring systems and wearable devices being integrated into a unified personalized medicine platform.

[Dr. Jason Cong (UCLA)](http://vast.cs.ucla.edu/people/faculty/jason-cong) presented a Spark based approach enabling big data applications on scale-out, hybrid CPU and FPGA cluster architecture. The approach is being used to enable substantial performance increase for genomics computational pipelines such as those used for whole-genome and whole-exome sequencing experiments.

[Dr. Wayne Luk (Imperial College London)](http://www.imperial.ac.uk/people/w.luk) presented a talk covering reconfigurable acceleration of genomics data processing and compression, demonstrating FPGA accelerated speedup of parts of RNA diagnostics pipelines used to identify cancer. To address large sizes of genomics datasets, his group implemented accelerated compression algorithms to speedup effective storage and management of DNA information. His continuing efforts are focused on optimization and speedup of transMART downstream DNA data analysis on IBM Power platforms.

# **Challenges and Trends Panel Discussion**

Four experts representing various users of genomics information and pipelines participated in a panel moderated by [Dr. Peter Hofstee (IBM)](https://www.linkedin.com/pub/peter-hofstee/b/886/6b4):

- [Dr. Chris Webb (UT Austin Dell Medical School)](http://dellmedschool.utexas.edu/team-profile/chris-webb)
- [Phil Greer (University of Pittsburgh)](https://www.linkedin.com/in/phil-greer-a0994631)
- [Dr. John Zhang (MD Anderson)](http://www.mdanderson.org/education-and-research/departments-programs-and-labs/programs-centers-institutes/institute-for-applied-cancer-science/meet-the-team/leadership-team/jianhua-zhang.html)
- [Dr. Hans Hofmann (UT Austin)](http://cichlid.biosci.utexas.edu/dr.-hans-hofmann.html).

Dr. Webb started the discussion, emphasizing that scientists and research groups working in isolation cannot answer the relevant questions in personalized medicine. Rather, close collaboration among multidisciplinary teams of doctors, geneticists, computer scientists and mathematicians is required to answer difficult questions and develop suitable models and efficient computational methods for use in a clinical environment.

Mr. Greer pointed out that changes are needed to enable effective analysis of personalized medicine information. For example, the lack of unified approaches to documenting and storing patient medical records complicates linking the different sources of information relevant to personalize medical care.

Answering a question from Dr. Hofstee about challenges in the growing field of population sequencing, Dr. Zhang identified the need to help doctors in making actionable decisions based on patient medical information. Dr. Hofmann commented that even common tasks such as data transmission are rapidly becoming a bottleneck due to the staggering sizes of population sequencing information. He further elaborated that standards are needed to ensure security and easy integration between the various genomics data types.

The panel concluded that the community must address computational approaches that consider the inherent variations of the human genome and the different ways these variations play a role in the individual. This will provide doctors with the tools needed to identify levels of confidence associated with a specific therapeutic intervention. Such tools will play an important role in the medical revolution of personalized medicine.

* * *

**_About Zaid Al-Ars_**

![zaid](images/zaid-150x150.jpg)Zaid Al-Ars is cofounder of [Bluebee](https://www.bluebee.com/), where he leads the development of the Bluebee genomics solutions. Zaid is also an assistant professor at the Computer Engineering Lab of Delft University of Technology, where he leads the research and education activities of the multi/many-core research theme of the lab. Zaid is involved in groundbreaking genomics research projects such as the optimized child cancer diagnostics pipeline with University Medical Center Utrecht and de novo DNA assembly research projects of novel organisms with Leiden University.
