---
title: "How My Daughter Trained an Artificial Intelligence Model"
date: "2019-12-11"
categories: 
  - "blogs"
tags: 
  - "ibm"
  - "nvidia"
  - "artificial-intelligence"
  - "ai"
  - "power9"
  - "ibm-power-systems"
  - "powerai"
  - "david-spurway"
  - "oxford-cancer-biomarkers"
---

_\*This article was originally published by David Spurway on LinkedIn.\*_

David Spurway, IBM Power Systems CTO, UK & Ireland, IBM

**OpenPOWER Foundation and PowerAI make AI accessible to all** 

AI is the most buzz-worthy technology today, with [applications ranging](https://www.techworld.com/picture-gallery/tech-innovation/weirdest-uses-of-ai-strange-uses-of-ai-3677707/) from creating TV news anchors to creating new perfumes. At IBM, we have been focused on this topic for a long time. In 1959, we [demonstrated a computer winning at checkers](https://www.ibm.com/ibm/history/ibm100/us/en/icons/ibm700series/impacts/), which was a milestone in AI. The company then built [Deep Blue](https://www.ibm.com/ibm/history/ibm100/us/en/icons/deepblue/) in 1997, a machine that beat the world chess champion. More recently, IBM released [Watson](https://www.ibm.com/watson) - you may have heard of it playing [Jeopardy](https://www.youtube.com/watch?v=P18EdAKuC1U) or [powering The Weather App](https://www.ibm.com/watson-advertising/news/introducing-the-new-weather-channel-app). IBM continues to push the boundaries of AI with [Project Debater](https://www.research.ibm.com/artificial-intelligence/project-debater/), which is the first AI system that can debate with humans on complex topics.

In fact, after seeing the Watson Grand Challenge in 2011, Google expressed interest in using POWER for their own projects, and [the OpenPOWER Foundation was born](https://www-03.ibm.com/press/us/en/pressrelease/41684.wss). [The Foundation](https://openpowerfoundation.org/) is built around principles of partnership and collaboration, and enables individuals and companies alike to leverage POWER technology for their applications.

One of our key goals at IBM is to lower the bar of entry to deploying AI. And as the CTO of IBM Power Systems for the UK and Ireland, I’ve witnessed the impact that POWER can have on ecosystems. A few years ago, I decided to try to deploy an AI application on POWER myself. I took inspiration from an OpenPOWER Foundation blog post, [Deep Learning Goes to the Dogs](https://openpowerfoundation.org/deep-learning-goes-to-the-dogs/), and decided to recreate their model to classify different dog breeds on my own IBM Power Systems server.

I began by using the Stanford Dogs data set, which contains images of 120 breeds of dogs from around the world, and IBM Watson Machine Learning Community Edition (IBM WML CE, formerly known as PowerAI). IBM WML CE was created to simplify the aggregation of hundreds of open source packages necessary to build a single deep learning framework. I used it to make my dog classification work.

The only problem was that it didn’t work in **all cases**. While my model was good enough to identify dogs in photos that I took of my children at Crufts, it kept tripping up on classifying dachshunds, a favourite of my daughter :

![The model didn’t know how to classify dachshunds, before Elizabeth fixed it!](https://media.licdn.com/dms/image/C5612AQGzuDG7BBC4bA/article-inline_image-shrink_1000_1488/0?e=1580947200&v=beta&t=V6S5ToENlBXAG9ptru4masv27EHdOIKPslIFd_x3HXU)

The problem here is that the dachshund was not included in the original 120-breed data set. My model didn’t know what a dachshund was. In order for it to recognise a dachshund, I needed to upload and label dozens of photos of dachshunds, usually in a specific format, which is a lot of work.

Enter my daughter Elizabeth.

Elizabeth is a big fan of dogs, and was happy to lend her expertise for the benefit of my project.

PowerAI Vision makes it easy for someone like my daughter, a subject matter expert, to come in and do this work, instead of requiring it be done by a data scientist. It’s the key to democratising artificial intelligence.

My daughter channelled her passion for and knowledge of dogs and whipped my model into shape in no time.

![After my daughter trained the model to recognize dachshunds, using PowerAI Vision.](https://media.licdn.com/dms/image/C5612AQHncaW380qn5g/article-inline_image-shrink_1000_1488/0?e=1580947200&v=beta&t=j96X3kOiprgqaKhWFPia7IIgQYJ3vunxHa251roE7W8)

“Okay, David,” you might be thinking. “Dogs are a fun topic, but let’s get serious. Why is classifying dachshunds so important to you?”

Well, the truth is that through the OpenPOWER Foundation and tools like PowerAI, artificial intelligence models can be built for any number of applications.

In fact, this **exact same** technology is being used in the UK to detect cancers. Predicting which patients with stage II colorectal cancer will suffer a recurrence after surgery is difficult. However, many are routinely prescribed chemotherapy, even though it may cause severe side effects. In some patients these can be fatal. [Oxford Cancer Biomarkers](https://oxfordbio.com/) (OCB) was established in 2012 to discover and develop biomarkers (a quantifiable biological parameter that provides insight into a patient’s clinical state) to advance personalized medicine within oncology, focusing on colorectal cancer and its treatments. On a personal note, my father was successfully treated for this cancer. OCB [partnered](https://meridianit.co.uk/ocb-case-study/) with IBM and the IBM Business Partner Meridian to apply PowerAI Vision (using Power Systems AC922 servers, which pair POWER9 CPUs and NVIDIA Tesla V100 with NVLink GPUs) to identify novel diagnostic biomarkers in tumor microenvironments, with the potential to enhance early diagnosis and treatment decisions.

My daughter can use her expertise to help classify dog breeds - and now there’s no limit to how you can use your own expertise to make the world a better place.
