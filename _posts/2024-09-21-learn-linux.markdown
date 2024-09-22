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

Finally, Mac: I do not have a Mac to test this, but the Docker website has instructions for setting up Linux on Mac. Go to the Docker guide: https://docs.docker.com/desktop/install/mac-install/ and once installed, open the terminal and run `docker pull ubuntu` followed by `docker run -it ubuntu`.
![MacOS]({{site.baseurl}}/assets/img/mac-docker.png)

## Getting acquainted

A good start to familiarizing yourself with the Linux command-line interface (CLI) is to take a look around. The upcoming commands will help set the stage to build on. 

> WHO? - WHAT? - WHERE?

* <b>whoami</b> - this displays the current user. usage `whoami`
* <b>uname</b> - this will give system information. usage `uname -a`
* <b>ip</b> - this will show you the network information. usage `ip address`
* <b>pwd</b> - 'print working directory' returns the directory that you’re currently in. usage `pwd`
* <b>lsblk</b> - lists the block devices. usage `lsblk`
* <b>df</b> - lists file system disk space usage. usage `df -h`
* <b>ls</b> - displays the files and directories in the current directory. usage `ls -lah`
* <b>cd</b> - change directory. example `cd /etc`
* <b>find</b> - find files and directories. example `find / -iname resolv.conf`

> You can teach a man to fish, but you can't make him drink

Here's some Linux commands when you don't know what command to use or how to use it.

* <b>whatis</b> - a short description for a command. example `whatis man`
* <b>man</b> - longer explination of a command and available options. example `man apropos`
* <b>apropos</b> - searches command descriptions for the specified keyword. example `apropos editor`

> Let's get some more

* <b>apt</b> - 'advanced package tool' used for installing, updating and removing software. example `apt update -y && apt upgrade -y`
* <b>curl</b> - downloader with user interactability. example `curl -sSL https://install.pi-hole.net | bash`
* <b>wget</b> - non-interactive downloader. example `wget -O basic-install.sh https://install.pi-hole.net`
* <b>touch</b> - create a file. example `touch example.txt`
* <b>nano</b> - this is a text editor. example `nano example.txt`
* <b>mkdir</b> - this will create a new directory. example `mkdir /etc/example`

> Get control of your stuff

* <b>chown</b> - change ownership of a file or directory. example `chown newowner:newgroup example.txt`
* <b>chmod</b> - change who can read, write, or execute files and directories. example `chown u+rwx,g+w,o-r example.txt`
* <b>mv</b> - move a file or directory (also has the ability to rename files or directories). example `mv example.txt test.txt`
* <b>cp</b> - copy files or directories. example `cp test.txt /etc/example`
* <b>sudo</b> - temporarly elevates current user (with appropriate permission) to execute a command as root. example `sudo userdel nobody`

## Put it into practice

Let's first ensure our repositories are up to date: `sudo apt update -y && sudo apt upgrade -y`. Then install uncommon firewall (UFW) `apt install ufw` so we can easliy create and remove firewall rules. Now before we configure UFW, lets see what ports our machine is currently using and what services are using them `ss -tulpn` or `netstat -tunlp`. Other ports you may want access are HTTPS '443', HTTP '80', SSH '22' for remote access, and SMB '139' and '445' for file shares. 
* `ufw default deny incoming`
* `ufw allow in on eth0 to any port 22`
* `ufw allow in on eth0 to any port 139`
* `ufw allow in on eth0 to any port 445`
* `ufw allow 443`
* `ufw allow 80`

Be sure to add any other ports required for your services and adjust the local interface if using something different (i.e. wlan0). Now we can enable UFW with `ufw enable` and verify its configuration with `ufw status verbose`.

This can be further locked down if you want only one other device on you network to have certain access (e.g. `ufw allow from 192.168.0.100 to any port 22`). This is one method incorperating the cybersecurity 'principle of least privilage' or PoLP.


