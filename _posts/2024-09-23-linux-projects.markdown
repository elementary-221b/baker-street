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
{% include codeHeader.html %}
>Usage

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
