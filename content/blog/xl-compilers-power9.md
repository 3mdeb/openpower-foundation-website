---
title: "OpenPOWER Summit: XL compilers support the latest POWER9 hardware"
date: "2018-05-11"
categories: 
  - "blogs"
tags: 
  - "openpower"
  - "ibm"
  - "openpower-summit"
  - "openpower-foundation"
  - "power9"
  - "openpower-summit-2018"
---

_This blog post was originally [published by IBM here](https://www.ibm.com/developerworks/community/blogs/572f1638-121d-4788-8bbb-c4529577ba7d/entry/March_6_2018_at_10_54_54_AM?lang=en)._

The March 2018 OpenPOWER Summit in Las Vegas featured "[15 porting and tuning tools in 30 minutes](https://openpowerfoundation.org/summit-2018-03-us-agenda/)", where IBM's POWER9-supporting compilers were discussed. IBM's C, C++, and Fortran compilers support the latest POWER9 hardware [AC922](https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/1/897/ENUS117-111/index.html&lang=en&request_locale=en) and [S922](https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/1/897/ENUS118-021/index.html&request_locale=en) \- [download our no-charge full-function unlimited-production-use Community Edition today.](https://www.ibm.com/us-en/marketplace/xl-cpp-linux-compiler-power)

Last December, there was another OpenPOWER summit in Beijing, a one-day event where OpenPOWER members exhibited and presented the latest technology solutions. The summit aimed to drive the development of the OpenPOWER ecosystem in China, speed up corresponding OpenPOWER roadmaps, demonstrate the cooperative innovation in the China market, and announce the first POWER9 server [AC922](https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/1/897/ENUS117-111/index.html&lang=en&request_locale=en) to Chinese customers. More than 400 customers, foundation members, developers, and ecosystem partners participated in the forum.

There were three sub-forums: "OpenPOWER AI and Industry Solutions", "OpenPOWER Platform Software" and "OpenPOWER Hardware, Acceleration in Systems". In the "OpenPOWER Platform Software" sub-forum, **we discussed the new IBM XL compilers on POWER9**. Around 30 participants attended the session, some of whom were speakers from different software vendors. We introduced that **XL compilers fully exploit powerful hardware features of the POWER9 architecture and greatly support heterogeneous parallel programming with CUDA and OpenMP**; we also emphasized that **you can compile your open source software with XL since it [integrates Clang as the front end of the compiler](https://www.ibm.com/developerworks/community/blogs/572f1638-121d-4788-8bbb-c4529577ba7d/entry/What_XL_s_adoption_of_Clang_means_to_you?lang=en)**. At the other side of the conference hall, we had one booth in the exhibition area where we demonstrated the capability of the new POWER compilers with videos and flyers.

\[caption id="attachment\_5430" align="aligncenter" width="625"\][![](images/Migrating-to-POWER9-1024x546.png)](https://openpowerfoundation.org/wp-content/uploads/2018/05/Migrating-to-POWER9.png) Figure 1. Suggestion on how to migrate your application to POWER9\[/caption\]

\[caption id="attachment\_5431" align="aligncenter" width="625"\][![](images/POWER9-technology-exploitation-1024x614.png)](https://openpowerfoundation.org/wp-content/uploads/2018/05/POWER9-technology-exploitation.png) Figure 2. Exploit POWER9 technology using XL's POWER9 exploited scalar & vector built-in functions (BIFs)\[/caption\]

\[caption id="attachment\_5432" align="aligncenter" width="625"\][![](images/POWER9-technology-exploitation-2-1024x536.png)](https://openpowerfoundation.org/wp-content/uploads/2018/05/POWER9-technology-exploitation-2.png) Figure 3. Exploit POWER9 technology using XL's high-performance math library tuned for POWER9 (MASS)\[/caption\]

Read more about our POWER9 exploitation here:

- C/C++:
    - [POWER9 technology exploitation](https://www.ibm.com/support/knowledgecenter/SSXVZZ_13.1.6/com.ibm.xlcpp1316.lelinux.doc/proguide/p9_tech.html)
    - [POWER9 compiler options](https://www.ibm.com/support/knowledgecenter/SSXVZZ_13.1.6/com.ibm.xlcpp1316.lelinux.doc/proguide/p9_opt.html)
    - [POWER9 built\-in functions](https://www.ibm.com/support/knowledgecenter/SSXVZZ_13.1.6/com.ibm.xlcpp1316.lelinux.doc/proguide/p9_bif.html)
    - [POWER9 MASS (An accelerated math library)](https://www.ibm.com/support/knowledgecenter/SSXVZZ_13.1.6/com.ibm.xlcpp1316.lelinux.doc/proguide/p9_lib.html)
- Fortran:
    - [POWER9 technology exploitation](https://www.ibm.com/support/knowledgecenter/en/SSAT4T_15.1.6/com.ibm.xlf1516.lelinux.doc/proguide/p9_tech.html)
    - [POWER9 compiler options](https://www.ibm.com/support/knowledgecenter/en/SSAT4T_15.1.6/com.ibm.xlf1516.lelinux.doc/proguide/p9_opt.html)
    - [POWER9 intrinsic procedures](https://www.ibm.com/support/knowledgecenter/en/SSAT4T_15.1.6/com.ibm.xlf1516.lelinux.doc/proguide/p9_bif.html)
    - [POWER9 MASS (An accelerated math library)](https://www.ibm.com/support/knowledgecenter/en/SSAT4T_15.1.6/com.ibm.xlf1516.lelinux.doc/proguide/p9_lib.html)

With POWER9 technology exploitation, XL compilers can help you achieve the maximum return on your POWER investment.

\[caption id="attachment\_5433" align="aligncenter" width="625"\][![](images/Compilers-1024x576.png)](https://openpowerfoundation.org/wp-content/uploads/2018/05/Compilers.png) Figure 4. Why IBM XL Compilers on POWER9? Up to 1.66x faster tonto benchmark vs GCC7\[/caption\]

During the morning keynotes session, many impressive points were made in the speeches delivered by representatives from GCG, OpenPOWER Foundation, customers, and partners:

- Chen Liming, Chairman of IBM Greater China, pointed out that **AI is becoming key to the future business success in the "big data explosion" era**. Through OpenPOWER, IBM has established a platform for technology exchange and cooperation in China for the joint development of OpenPOWER with Chinese enterprises.
- OpenPOWER customer Tencent emphasized that they acquired a number of OpenPOWER systems for their growing enterprise data center. **Last year, with the support of OpenPOWER technology, Tencent Cloud set four world records in the Sort Benchmark competition** and showed world-class performance in the field of big data analysis and application management.
- VP of Inspur Group mentioned that the **OpenPOWER system provides more efficient intelligent computing capabilities to meet the rapid development of Chinese enterprises**. Inspur will build on OpenPOWER's ecosystem to create a diversified infrastructure and will offer a range of OpenPOWER platforms around the areas of cloud computing, artificial intelligence, and big data. In September, Inspur and IBM announced that they would set up a joint venture to develop open Power server products that fit into the Chinese market.

### We also attended some sessions in those three sub-forums and would like to share some exciting OpenPOWER projects:

- **Inspur showed an upcoming dual OpenPOWER9 server prototype machine**. This product can support all NVMe SSD and has four P100 GPU cards to meet the requirements of smart computing. Inspur also announced that they would fully support PowerAI and showcased a PowerAI-based multi-target real-time tracking solution. Multi-target tracking is a type of video analysis technology widely used in security, smart city, transportation, and many other fields. It is also one of the hottest AI applications. The program is based on the Inspur P820 server. The Inspur P820 supports two OpenPOWER processors clocked at 3.4G, 64 memory slots and 12 PCI-E slots, and is a mature product already in the market.
- **Zilliz** **announced China's First GPU Hardware Acceleration OLAP Database Solution and GPU Database Appliance** **MEGAWISE** **based on the IBM POWER** **High Performance** **Server**. The system uses a Nvidia Tesla P100 processor for large-scale parallel data processing, and uses NVlink technology to achieve high-speed interconnection between the GPU and the CPU with 10x data query performance improvements, 10x lower hardware costs, and 20x lower operating costs. The technology can be widely used in banking, finance, telecommunications, energy, Internet of Things, medical and e-commerce and other fields.
- **AI related**: Big data and AI application vendor Cumulative Data showed its intelligent control fees cloud with chronic disease management in the whole cycle; Shanghai Flutter showed Industrial Appearance Defect Detection Solutions based on OpenPOWER depth learning; Tsinghua University doctoral students conducted facial expression detection pilot study on the Red Cloud CRH AI big data platform which is based on the Neu Cloud Oriental NL2822G-2 server + P100GPU.
- **POWER9-specific**: Gigabyte showed its OpenPOWER server based on P9 Sforza; Wistron demonstrated water cooling solutions with NVLink technology and two P9 full-size OpenCAPI / OCP designs; NEC from Japan demonstrated P9 HA and extended Ethernet solutions, etc.

### **For more information about the new POWER9 hardware and how to purchase it, please see the following announcements:**

- [AC922](https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/1/897/ENUS117-111/index.html&lang=en&request_locale=en), which includes GPUs, available Dec 22, 2017
- [S922](https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/1/897/ENUS118-021/index.html&request_locale=en), which does not include GPU, available Mar 20, 2018

**[Try IBM XL C/C++](https://www.ibm.com/us-en/marketplace/xl-cpp-linux-compiler-power) and [Fortran compilers](https://www.ibm.com/us-en/marketplace/xl-fortran-linux-compiler-power) for POWER9 free-of-charge**: our Community Edition is full-function and allows for unlimited production use.
