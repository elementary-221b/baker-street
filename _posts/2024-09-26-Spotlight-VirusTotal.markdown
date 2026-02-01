---
layout: post
title: Spotlight VirusTotal
date: 2024-09-01 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: vt.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [URL Scan, IoC, Threat Detection] # add tag
---

A quick spotlight on the VirusTotal tool and integrations. This blog post integrates a live VirusTotal v3 API tool to help you analyze indicators of compromise (IoCs) and provides advanced implementation strategies for small business environments.

### The Power of VirusTotal (VT)
VirusTotal is an aggregator that inspects items with over 70 antivirus scanners and URL/domain blocklisting services. Key capabilities include:
* **Multi-Engine Aggregation:** Detects threats that single-vendor solutions might miss.
* **Passive DNS:** Visualizes historical IP-to-domain mappings.
* **Sandbox Execution:** Provides behavioral metadata (registry changes, API calls).

---

## Interactive Analysis Tool
*Analyze a URL against the VirusTotal engine in real-time. Results are returned via the v3 API.*

<div style="background: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid #333; color: white;">
    <h3>Live Threat Triage</h3>
    <input type="text" id="userInput" placeholder="https://example.com" style="width: 70%; padding: 10px; background: #333; color: white; border: none;">
    <button onclick="runLiveScan()" style="padding: 10px; background: #007bff; border: none; cursor: pointer;">Scan Now</button>
    <div id="liveResult" style="margin-top: 15px; font-family: monospace; font-size: 0.8em; white-space: pre-wrap; background: #000; padding: 10px; max-height: 300px; overflow: auto;">
        Waiting for input...
    </div>
</div>

<script>
async function runLiveScan() {
    // 1. Correctly define variables from the DOM
    const urlInput = document.getElementById('userInput');
    const display = document.getElementById('liveResult');
    const url = urlInput.value.trim();

    // 2. Validate input
    if (!url) {
        display.innerText = "Error: Please enter a URL first.";
        return;
    }

    display.innerText = "Connecting to Cloudflare Proxy...";

    try {
        // 3. Make the fetch request
        const response = await fetch('https://vt-proxy-api.michael-watson-26.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ urlToScan: url })
        });

        if (!response.ok) {
            throw new Error(`Proxy error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // 4. Safely check for the new report structure (stats vs last_analysis_stats)
        // Note: The /analyses/ endpoint uses .attributes.stats
        const attributes = data.data?.attributes;
        const stats = attributes?.stats || attributes?.last_analysis_stats;

        if (stats) {
            display.innerText = `Verdict: ${stats.malicious} Malicious / ${stats.harmless} Harmless\n` +
                                `Status: ${attributes.status || 'Complete'}\n\n` +
                                `Full JSON Data:\n` + JSON.stringify(data, null, 2);
        } else {
            display.innerText = "Error: Analysis results not found in response. Try again in a moment.\n\nRaw Data:\n" + JSON.stringify(data, null, 2);
        }

    } catch (err) {
        // 5. Catch network or logic errors
        display.innerText = "Technical Error: " + err.message + 
                            "\n\nCheck browser console (F12) for network details.";
        console.error("VT Tool Error:", err);
    }
	
		if (stats) {
            // Apply CySA+ Visual Triage Logic
            if (stats.malicious > 0) {
                display.style.borderColor = "#ff4d4d"; // Bright Red
                display.style.color = "#ff4d4d";
                display.innerText = `🚨 ALERT: ${stats.malicious} MALICIOUS ENGINES DETECTED\n`;
            } else {
                display.style.borderColor = "#00ff00"; // Clean Green
                display.style.color = "#00ff00";
                display.innerText = `✅ VERDICT: CLEAN / HARMLESS\n`;
            }

            // Append the rest of the data
            display.innerText += `Status: ${attributes.status || 'Complete'}\n` +
                                 `Stats: ${stats.malicious} Malicious / ${stats.harmless} Harmless\n\n` +
                                 `Full JSON Data:\n` + JSON.stringify(data, null, 2);
        }
}
</script>

{% highlight ruby %}
1. **The Verdict Summary (stats)
At the top of the attributes object, you’ll find the stats dictionary. This is your "Executive Summary."

malicious: The number of engines that flagged the URL as a threat (Phishing, Malware, etc.).

harmless: Engines that explicitly verified the URL as safe.

undetected: Engines that scanned the site but found nothing suspicious.

suspicious: Engines that didn't find a direct threat but flagged the URL for "unusual" behavior (like a new domain or suspicious redirects).

>The 2% Rule: In high-traffic environments, a single "Malicious" hit out of 70+ engines is often a False Positive. Analysts typically look for a consensus of 2 or more reputable engines (like Kaspersky, Fortinet, or Google) before escalating.

2. **Engine-Specific Results (results)
This section lists every individual security vendor.

category: The normalized result (e.g., harmless, malicious, undetected).

result: The specific "Label" given by that vendor (e.g., clean, phishing, unrated).

method: How they found it. Most use blacklist, which means they checked a known database of bad actors.

3. **Key Indicators of Compromise (IoCs)
id: This is a unique tracking ID for this specific analysis.

url: The canonicalized URL. VT normalizes URLs (removing extra parameters) to ensure it's comparing the same "root" resource.
{% endhighlight %}

CySA+ Analysis Exercise: The "Gray" Area
Look at the ZeroFox or SOCRadar entries in your JSON:

JSON
"ZeroFox": { "category": "undetected", "result": "unrated" }
Why is it "Unrated"? This means the vendor has no current data on the site. As a CySA+, you should treat an "Unrated" site with the same caution as a "Suspicious" one if the domain was registered very recently (e.g., within the last 24 hours).

---

<div style="margin: 30px 0; text-align: center;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; border: 1px solid #333;">
        <iframe 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/b67h3U4OeAI" 
            title="VirusTotal for Beginners" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </div>
    <div style="margin-top: 10px; font-size: 0.85em; color: #888; font-style: italic;">
        Video credit: <a href="https://www.youtube.com/@VirusTotalVideo" target="_blank" style="color: #007bff; text-decoration: none;">VirusTotal Official Channel</a> | 
        Platform provided by <a href="https://www.virustotal.com" target="_blank" style="color: #007bff; text-decoration: none;">VirusTotal.com</a>
    </div>
</div>

---

## CySA+ Intelligence & TTPs
Effective analysis requires more than just checking for a "Red" flag. Apply these core concepts from the **CySA+ (CS0-003)** objectives:

1. **Indicator Enrichment:** Don't stop at the URL. Use the API response to find the **SHA-256 hash** of the final payload.
2. **False Positive Triage:** If only 1 obscure engine flags a site, it may be a false positive. Use the `last_analysis_stats` to determine the consensus.
3. **Adversary Infrastructure:** Use VT's Relationship tab to find other domains hosted on the same IP—this exposes the attacker's broader infrastructure.

---

## Advanced Implementation Strategies
For small businesses or advanced home labs, move beyond manual lookups with these unique setups:

### 1. Browser-Level Enforcement (VT4Browsers)
Mandate the **VT4Browsers extension**. Configure it to **pause downloads** until a scan is complete. This acts as a "poor man's Sandbox" for employees, preventing the execution of malicious attachments at the perimeter.

### 2. Traffic Direction via PAC File Scripts
A **Proxy Auto-Config (PAC)** file script can act as a traffic director. While PAC files can't call APIs directly, you can run a local **Ruby script** that pulls the latest "Top 100 Malicious Domains" from your VT Private API and dynamically generates a `proxy.pac` file that routes those specific domains to a "sinkhole" (127.0.0.1).

### 3. Log Enrichment (Small Business Config)
If you run a local log server (like ELK), create a sidecar script that monitors outbound 443 connections. If an IP appears that hasn't been seen in the last 30 days, have the script automatically query VirusTotal and send a **Pushbullet** or **Slack** notification if the reputation score is > 10.

VirusTotal for Beginners
This video is a great primer for anyone new to the platform, as it walks through the basic interface and explains why security professionals rely on these aggregated results.

