---
layout: post
title: Where to begin
date: 2024-09-20 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: victorian-home-network.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Router, WiFi, DNS] # add tag
---

## My favorite things in networking are free

The tools, services and apps that I will focus on in this post will use the typical configuration that the internet service provider (ISP) or manufacturer would have setup as default. That will be my starting point for introducing network hardening in your home. The main objectives in cybersecurity are confidentiality, integrity, and availability. This is often shortened to the CIA Triad. You are already implementing a key cybersecurity measure by comparing your home network setup against the security focused advice that is listed here. Managerial Controls are one part of the implementation of security control processes. Taking an inventory of all your connected devices (or assets) and doing a risk assessment on the possible threats and vulnerabilities in their current state.

> The tools

## DNS Servers

Adjusting your default DNS in your device settings is a great start to configuring technical controls. The best place to start is your router. The router normally has a label with the default login information printed on it, or included in the manual if you purchased one yourself. I'll cover changing this later (you should). Common URLs for this are:

* 192.168.0.1
* 192.168.1.1
* www.routerlogin.net
* www.routerlogin.com

Open a browser to a device that is current connected, either directly with a ethernet cable or if you've already setup and connected to it's WiFi network, then type in the URL. Go through the internet setup settings (searching you router model and dns will often give exact setup instructions) and change from the default to better DNS server. 
* https://adguard-dns.io/en/public-dns.html
* https://developers.cloudflare.com/1.1.1.1/setup/
* https://quad9.net/service/service-addresses-and-features
  
![DNS Setup]({{site.baseurl}}/assets/img/Change-DNS-router-settings-Google-Public-DNS.png)

Good, better, and <i>more better</i>. Using filtering DNS servers to prevent accidentally going to a malicious website or phishing scam goes a long way to personal protection, but scammers (and even your ISP) can still see your searches. The better option is DNS-over-TLS (DoT) which encrypts the DNS queries. This has been natively supported on recent android devices by entering the DoT entry in the 'private dns' setting (usually under the 'more connection settings' tab). What about <i>more better</i>? DNS-over-HTTPS also uses the encryption of DNS queries, but uses the HTTPS port 443. Why is this important? Plain DNS uses port 53 for the traffic and can be quickly filtered using a packet analyzer; DoT uses the port 853 and can be filtered, but the payload is encrypted and unreadable. If a threat actor wants to get around this, one method is to interrupt traffic on port 853 and have the DNS quaries fallback to the non-encrypted port 53. DoH traffic is obfuscated with all the other web traffic and blocking port 443 will quickly alert the target since web browsing and streaming will be blocked as well. Several companies provide apps to enable DoH on devices, but requires it to be installed on each device. 

## Defense in depth

This concept is a strategy of layered security protocols protecting assets. Take the time to configure your home router with a filtering DNS, this should catch IoT devices like smart bulbs that can't be directly configured. Configure your devices (laptops, phones, smart TV's) to prevent them from attempting to bypass the routers settings (Install the DoH apps on your devices that have that option).
Next let's segment the devices on our network. Most home routers have an additional 'Guest WiFi' option, this can be used for devices that shouldn't have access to your PC, laptop, or router configuration. When setting up both the Guest and Personal WiFi, select the highest security that's supported (WPA3 is currently the most secure), change the default SSID name and set a strong password for each. While you're in the router settings, now is a good time to change the router's login credentials. Disable remote management, enable the firewall if the setting is available, and setup access control (MAC filtering).

## Web tools

There are times when you receive a link or file and would like to verify before navigating or using the program. Here are some free to use web-based scan tools:

* https://urlscan.io/
* https://virusscan.jotti.org/
* https://www.virustotal.com/gui/home/upload

> Honorable mentions

Free VPN's: keeping with the free theme, some providers like ProtonVPN have a free option, but often have a large asterisk. Limited servers, network throttling, no support for additional features. The first hardening feature I would suggest when willing to add a dollar value would be getting a VPN service. (VPN confusion: some routers say they support VPN, but don't mention if it's as a client or server)
Mobile carriers have some features to manage web content: T-Mobile Web Guard, Verizon Smart Family, AT&T Secure Family, etc. These can be found either on the company website or a pre-installed app.
