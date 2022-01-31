---
title: "Deploying POWER8 Virtual Machines in OVH Public Cloud"
date: "2015-02-24"
categories: 
  - "blogs"
---

_By Carol B. Hernandez, Sr. Technical Staff Member, Power Systems Design_

Deploying POWER8 virtual machines for your projects is straightforward and fast using OVH POWER8 cloud services. POWER8 virtual machines are available in two flavors in OVH’s RunAbove cloud: [http://labs.runabove.com/power8/](http://labs.runabove.com/power8/).

[![image1](images/image1-300x272.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image1.png) ![image2](images/image2-300x300.png)

 

POWER8 compute is offered in RunAbove as a “Lab”. [Labs](http://labs.runabove.com/index.xml) provide access to the latest technologies in the cloud and are not subject to Service Level Agreements (SLA). I signed up for the POWER8 lab and decided to share my experience and findings.

To get started, you have to open a RunAbove account and sign up for the POWER8 Lab at: [https://cloud.runabove.com/signup/?launch=power8](https://cloud.runabove.com/signup/?launch=power8).

When you open a RunAbove account you link the account to a form of payment, credit card or pay pal account. I had trouble using the credit card path but was able to link to a pay pal account successfully.

After successfully signing up for the POWER8 lab, you are taken to the RunAbove home page which defaults to “Add an Instance”.

[](https://openpowerfoundation.org/wp-content/uploads/2015/02/6.png)

[![image4](images/image4.jpeg)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image4.jpeg)

The process to create a POWER8 instance (aka virtual machine) is straightforward. You select the data center (North America BHS-1), the “instance flavor” (Power 8S), and the instance image (Ubuntu 14.04).

[![image5](images/image5.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image5.png)

Then, you select the ssh key to access the virtual machine. The first time I created an instance, I had to add my ssh key. After that, I just had to select among the available ssh keys.

The last step is to enter the instance name and you are ready to “fire up”. The IBM POWER8 S flavor gives you a POWER8 virtual machine with 8 virtual processors, 4 GB of RAM, and 10 GB of object storage. The virtual machine is connected to the default external network. The Ubuntu 14.04 image is preloaded in the virtual machine.

After a couple of minutes, you get the IP address and can ssh to your POWER8 virtual machine.

[![image6](images/image6.jpg)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image6.jpg) [![image13](images/image13.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image13.png)

 

You can log in to your POWER8 virtual machine and upgrade the Linux image to the latest release available, using the appropriate Linux distribution commands. I was able to successfully upgrade to Ubuntu 14.10.

The default RunAbove interface (Simple Mode) provides access to a limited set of tasks, e.g. add and remove instances, SSH keys, and object storage. The OpenStack Horizon interface, accessed through the drop down menu under the user name, provides access to an extended set of tasks and options.

[![image8](images/image8.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image8.png)

Some of the capabilities available through the OpenStack Horizon interface are:

**Create snapshots.** This function is very helpful to capture custom images that can be used later on to create other virtual machines. I created a snapshot of the POWER8 virtual machine after upgrading the Linux image to Ubuntu 14.10.

[![image9](images/image9.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image9.png)

**Manage project images.** You can add images to your project by creating snapshots of your virtual machines or importing an image using the Create Image task. The figure below shows a couple of snapshots of POWER8 virtual machines after the images were customized by upgrading to Ubuntu 10.14 or adding various packages for development purposes.

[![image10](images/image10.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image10.png)

**Add private network connections.** You can create a local network and connect your virtual machines to it when you create an instance.

[![image11](images/image11.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image11.png)

**Create instance from snapshot.** The launch instance task, provided in the OpenStack Horizon interface, allows you to create a virtual machine using a snapshot from the project image library. In this example, the snapshot of a virtual machine that was upgraded to Ubuntu 14.10 was selected.

[![image12](images/image12.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image12.png)

[![image7](images/image7.jpeg)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image7.jpeg)

**Customize instance configuration.** The launch instance task also allows you to add the virtual machine to a private network and specify post-deployment customization scripts, e.g. OpenStack user-data.

[![image14](images/image14.jpg)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image14.jpg)

All of these capabilities are also available through OpenStack APIs. The figure below lists all the supported OpenStack services.

[![image15](images/image15.png)](https://openpowerfoundation.org/wp-content/uploads/2015/02/image15.png)

Billing is based on created instances. The hourly rate ($0.05/hr) is charged even if the instance is inactive or you never log in to instance. There is also a small charge for storing custom images or snapshots.

To summarize, you can quickly provision a POWER8 environment to meet your project needs using OVH RunAbove interfaces as follows:

- Use “Add Instance” to create a POWER8 virtual machine. Customize the Linux image with the desired development environment / packages or workloads
    - Upgrade to desired OS level
    - Install any applications, packages or files needed to support your project
- Create a snapshot of the POWER8 virtual machine with custom image
- Use “Launch Instance” to create a POWER8 virtual machine using the snapshot of your custom image
    - For quick and consistent deployment of desired environment on multiple POWER8 virtual machines
- Delete and re-deploy POWER8 virtual machines as needed to meet your project demands
- Use OpenStack APIs to automate deployment of POWER8 Virtual Machines

For more information about the OVH POWER8 cloud services and to sign up for the POWER8 lab visit: [http://labs.runabove.com/power8/](http://labs.runabove.com/power8/).
