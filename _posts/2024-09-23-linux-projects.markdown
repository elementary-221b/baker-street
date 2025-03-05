---
layout: post
title: Linux Projects
date: 2024-09-03 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: computer-coding.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Linux, Encryption, Analyzer, Pimylifeup] # add tag
---

>Placeholder

## Wireshark
>What is Wireshark

>Install

* Docker-Compose

`mkdir` 

`wireshark`

`cd wireshark`

`nano docker-compose.yml`

{% highlight ruby %}
version: "3"

services:
  wireshark:
    image: lscr.io/linuxserver/wireshark:latest
    container_name: wireshark
    cap_add:
      - NET_ADMIN
    security_opt:
      - seccomp:unconfined
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /path/to/config:/config
    ports:
      - "3000:3000"
      - "3001:3001"
    restart: unless-stopped
{% endhighlight %}

>Usage

## Capture Traffic

Once Wireshark is installed, you can start capturing traffic. Open Wireshark and select the network interface you want to capture traffic on (e.g., Ethernet, Wi-Fi). Click the blue shark fin icon to start capturing packets.

## Analyze Packets

As soon as you start capturing, you'll see packets flowing in real-time. Each packet contains detailed information about the traffic on your network. Here are a few things you can do with the captured packets:

1. **Filter Packets**: Use filters to narrow down the traffic you're interested in. For example, if you want to see only HTTP traffic, you can use the filter `http`.

2. **Inspect Packets**: Click on a packet to see its details. You can see information like the source and destination IP addresses, the protocol used, and more.

3. **Follow Streams**: If you're interested in a specific conversation, right-click on a packet and select "Follow TCP Stream" or "Follow UDP Stream." This will show you the entire conversation between the two endpoints.

## Save and Export

Once you've captured and analyzed the packets you need, you can save your capture for later analysis. Go to "File" > "Save As" to save your capture file. You can also export specific packets or save the capture in different formats.

## Cybersecurity Essentials with Wireshark

Wireshark is not just a tool for network troubleshooting; it's also a powerful asset for learning and teaching cybersecurity essentials. Here are a few ways you can use Wireshark to enhance your cybersecurity knowledge:

1. **Learning Protocols: By analyzing packet captures, you can learn how different network protocols work. This knowledge is fundamental for understanding how to secure network communications.

2. **Detecting Anomalies: Wireshark helps you identify unusual or suspicious traffic patterns, which could indicate potential security threats.

3. **Packet Crafting: Use Wireshark alongside tools like Scapy to craft and analyze custom packets. This practice helps you understand how different attacks work and how to defend against them.

4. **Incident Response: During a security incident, Wireshark can be used to capture and analyze network traffic, helping you identify the source and scope of the attack.

In summary, Wireshark is a versatile and powerful tool that every aspiring cybersecurity professional should master. It not only helps you understand network traffic but also equips you with the skills needed to secure and monitor your networks effectively.

Happy packet capturing!

## PiHole
![pihole]({{site.baseurl}}/assets/img/pihole.png)

## How To Track All Devices with Raspberry Pi

## Phoneinfoga

## Urban edge smart campus

## Tailscale VPN
![zero-trust]({{site.baseurl}}/assets/img/zero-trust.jpeg)

## Crowdsec

## NordVPN Meshnet

## SSH Honeypot

## Python
