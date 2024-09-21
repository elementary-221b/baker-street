---
layout: post
title: Learn Linux
date: 2024-09-21 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: linux.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Linux, Debain, Google, WSL] # add tag
---

## Set up your classroom

The first limitation when trying to learn the Linux operating system (OS) is; where do you get a Linux computer? Below are some resources to get started even if you don't have a Linux computer. 

* Google Cloud Code
* https://console.cloud.google.com
* Linux on Windows / Windows Subsystem for Linux(WSL)
* https://learn.microsoft.com/en-us/windows/wsl/install

While you are waiting for your Raspberry Pi to be shipped (<i>everyone needs a RaspberryPi</i> ), here's a quick guide to get going. The first method requires a Google account, it's free if you don't already have one. Navigate to https://console.cloud.google.com, login and select the "Activate Cloud Shell" icon. This will load a Linux terminal at the bottom of the browser. You can begin using the terminal right away, but to complete the examples in this guide, you'll need to run one command to enable more features. In the terminal type `sudo unminimize` and this will begin a long string of processes setting up the environment.
 ![shell terminal]({{site.baseurl}}/assets/img/google-shell.jpg)

The next method is installing Linux on your PC running Windows. This doesn't require any difficult setup like dual-boot or virtual machine. Open either PowerShell or Command Prompt as an administrator (the search options should have 'run as administrator' or right-click and select 'run as administrator'). Linux has many <i>distributions</i>, by default running `wsl --install` will enable the features necessary to run WSL and install the Ubuntu distribution of Linux. If you want to try other Linux distros or have a preference from the start run `wsl --install -d` followed by the distribution you want to install (e.g. `wsl --install -d kali-linux`). Note: to list available distros run `wsl -l -o`.
