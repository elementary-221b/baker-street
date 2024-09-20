---
layout: post
title: Where to begin
date: 2024-09-16 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: victorian-home-network.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Router, WiFi, DNS] # add tag
---

## My favorite things in networking are free

The tools, services, and apps that I will focus on in this post will use the typical configuration that the internet service provider (ISP) or manufacturer would have setup as default. That will be my starting point for introducing network hardening in your home. The main objectives in cybersecurity is confidentiality, integrity, and availability. This is often shortened to the CIA Triad. You are already implementing a key cybersecurity measure by comparing your home network setup against the steps and tool that are listed here. Managerial Controls are one part of the implementation of security control processes. Taking an inventory of all your connected devices (or assets) and doing a risk assessment on the possible threats and vulnerabilities in their current state.

> The tools

## DNS Servers

Adjusting your default DNS in your device settings is a great start to configuring technical controls. The best place to start is your router. The router normally has a label with the default login information printed on it, or included in the manual if you purchased one yourself. I'll cover changing this later (you should). Common URLs for this are:
![DNS Setup]({{site.baseurl}}/assets/img/Change-DNS-router-settings-Google-Public-DNS.png)

* 192.168.0.1
* 192.168.1.1
* www.routerlogin.net
* www.routerlogin.com

Open a browser to a device that is current connected, either directly with a ethernet cable or if you've already setup and connected to it's WiFi network, and type in the URL. Go through the internet setup settings (searching you router model and dns will often give exact setup instructions) and change from the default to better DNS server. 
* https://adguard-dns.io/en/public-dns.html
* https://developers.cloudflare.com/1.1.1.1/setup/
* https://quad9.net/service/service-addresses-and-features
