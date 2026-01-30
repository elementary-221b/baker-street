---
layout: post
title: Linux Projects
date: 2024-09-03 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: computer-coding.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Linux, Encryption, Analyzer, Pimylifeup] # add tag
---

To the uninitiated, a server is a black box; to the detective, it is a crime scene waiting to be analyzed. 

## 1. Wireshark: The Magnifying Glass
**The Deduction:** A packet-level forensic tool used to dissect network traffic. It reveals the secrets hidden in your data streams, allowing you to identify malicious exfiltration or misbehaving protocols.
One cannot solve a mystery without observing the clues. Wireshark allows you to see the very heartbeat of your network, one packet at a time.

### Quick Start (Debian)
1. **Installation:**
   `sudo apt update && sudo apt install wireshark -y`
2. **Permission:** During install, select **Yes** to allow non-superusers to capture packets. Add yourself to the group:
   `sudo usermod -aG wireshark $USER`

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

**The Creator's Estate:** [Wireshark Official Site](https://www.wireshark.org)

---

## 2. Pi-hole: The Digital Sieve
**The Deduction:** A network-wide DNS sinkhole. It intercepts and discards requests to known advertising and tracking domains before they can compromise your privacy or clutter your bandwidth.

A detective must filter out the noise. Pi-hole acts as a DNS sinkhole, catching those pesky "Moriartys" of the advertising world before they ever reach your screen.
![pihole]({{site.baseurl}}/assets/img/pihole.png)


### Quick Start (Debian)
`curl -sSL https://install.pi-hole.net | bash`

**The Creator's Estate:** [Pi-hole.net](https://pi-hole.net)

---

## 3. Pi.Alert: The Watchman
**The Deduction:** A security monitor for your local network. It scans for "intruders" (new devices) and alerts you the moment an unrecognized MAC address enters your digital parlor.

"How To Track All Devices with Raspberry Pi" is a common query, and **Pi.Alert** is the answer. It scans your network and alerts you the moment an unrecognized "guest" appears in your parlor.

### Quick Start (Debian/Docker)
We use Docker for a clean containment of this suspect:
`docker run -d --name pialert --network=host -v pialert_data:/home/pialert/config jokob/pialert`

**The Creator's Estate:** [Pi.Alert GitHub](https://github.com/jokob/Pi.Alert)

---

## 4. Phoneinfoga: The Informant
**The Deduction:** An advanced OSINT tool for phone numbers. Use it to scan a number's reputation, find its carrier, and hunt for its presence across the public web—useful for vetting a mysterious lead.

OSINT is the backbone of any investigation. Phoneinfoga scans phone numbers to find leaks and social media presence—useful when a mysterious number calls your flat at midnight.

### Quick Start (Go-based)
`curl -sSL https://raw.githubusercontent.com/sundowndev/phoneinfoga/master/support/scripts/install | bash`
`./phoneinfoga scan -n +1234567890`

**The Creator's Estate:** [Phoneinfoga Documentation](https://sundowndev.github.io/phoneinfoga/)

---

## 5. Urban Edge Smart Campus: The Orchestrator
**The Deduction:** A comprehensive IoT framework designed for monitoring large estates. It provides the infrastructure to collect and visualize data from a "smart campus" of sensors, turning raw noise into actionable intelligence.

For those monitoring larger estates, the **Urban Edge** IoT framework provides a dashboard for smart campus sensors. It is a masterwork of data synthesis for the modern "Smart City" detective.

### Quick Start (Node.js/Docker)
Usually deployed via Docker-Compose. Clone the repo first:
`git clone https://github.com/Mihnea7/SmartCampus && cd SmartCampus`
`docker-compose up -d`

**The Creator's Estate:** [Mihnea7/SmartCampus GitHub](https://github.com/Mihnea7/SmartCampus)

---

## 6. Tailscale VPN: The Hidden Passage
**The Deduction:** A zero-config mesh VPN. It creates a private, encrypted "WireGuard" network between your devices, allowing you to access your home lab from the depths of a remote moor without exposing ports to the public internet.

A detective needs a way to enter their home base securely from anywhere in the world. Tailscale creates a "mesh" network—a secret tunnel that even the Yard couldn't find.
![zero-trust]({{site.baseurl}}/assets/img/zero-trust.jpeg)

### Quick Start (Debian)
`curl -fsSL https://tailscale.com/install.sh | sh`
`sudo tailscale up`

**The Creator's Estate:** [Tailscale.com](https://tailscale.com)

---

## 7. CrowdSec: The Scotland Yard of IPs
**The Deduction:** A community-powered IDS/IPS. It analyzes your logs to detect aggressive behavior and blocks malicious IPs by leveraging a global database of known digital "thugs."

Why fight alone when you can join a global network? CrowdSec parses your logs and shares information on malicious actors with a worldwide community. If an IP attacks me, you hear about it.

### Quick Start (Debian)
`curl -s https://install.crowdsec.net | sudo sh`
`sudo apt install crowdsec crowdsec-firewall-bouncer-iptables`

**The Creator's Estate:** [CrowdSec.net](https://www.crowdsec.net)

---

## 8. NordVPN Meshnet: The Global Web
**The Deduction:** A peer-to-peer encrypted tunnel. Unlike a standard VPN, it allows you to link specific devices directly over the internet for secure file sharing or gaming, as if they were on the same local network.

While Tailscale is for your own devices, Meshnet allows you to link to friends' devices securely for file sharing or "detective collaborations" across the globe.

### Quick Start (Debian)
`sh <(curl -sSf https://downloads.nordcdn.com/apps/linux/install.sh)`
`nordvpn login`
`nordvpn set meshnet on`

**The Creator's Estate:** [NordVPN Meshnet Guide](https://meshnet.nordvpn.com)

---

## 9. Cowrie SSH Honeypot: The Decoy Flat
**The Deduction:** A medium-interaction honeypot designed to mimic an SSH server. It lures in automated bots and attackers, logging their every move and "stolen" password to give you a front-row seat to their methods.

At 221B, we occasionally leave a window open to see who tries to climb in. **Cowrie** is a medium-interaction SSH honeypot designed to log everything an intruder attempts.

### Quick Start (Debian)
1. **Prerequisites:** `sudo apt install git python3-virtualenv libssl-dev`
2. **Setup:** `git clone https://github.com/cowrie/cowrie`
   `cd cowrie && virtualenv cowrie-env && source cowrie-env/bin/activate`
   `pip install --upgrade pip && pip install -r requirements.txt`

**The Creator's Estate:** [Cowrie.org](https://www.cowrie.org)


