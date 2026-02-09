---
layout: post
title: "Get Hard: Hardening Approach to Windows OS Security"
date: 2026-02-08
img: Windows_Hardening.png
tags: [Windows-Hardening, Security-Plus, CySA-Plus, Automation, Blue-Team]
categories: [Cybersecurity, System-Administration]
description: "From Registry tweaks to building custom autounattend.xml files, learn how to minimize the attack surface of Windows 11."
---

## The "Why": Defending the Most Targeted Surface

In a "Zero Trust" architecture, the endpoint is often the last line of defense. Windows, by default, is designed for convenience, not combat. Out of the box, it’s noisy (telemetry), chatty (LLMNR/NetBIOS), and bloated. For a SOC Analyst (CySA+) or a Security Architect (Security+), this represents an unnecessarily large **attack surface**. 

Every unnecessary service is a potential persistence mechanism; every legacy protocol is a lateral movement vector. Today, we move beyond "standard" settings into the realm of **Infrastructure as Code (IaC)** for the desktop.

---

## The Explainer: Windows 11 Hardening Guide

Before diving into the code, let's look at the foundational principles of Windows hardening. Chris Titus and other experts often highlight how "debloating" isn't just for performance—it's for security.

<div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
    <iframe 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
        src="https://www.youtube.com/embed/TlMqdSiGcOg?list=PLc7fktTRMBoxajVXk9-zy6YmRfReNmCwO" 
        title="Windows 11 Hardening and Debloating" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
*Video: Principles of a Leaner, More Secure Windows Environment.*

---

## Stage 1: Manual Hardening & Registry Edits

Before automating, you must understand the "manually applied" controls. Under **Security+ Objective 2.1 (Install and configure software settings)**, we look at:

1.  **Disabling LLMNR/NetBIOS:** These legacy protocols are bread-and-butter for attackers using tools like *Responder*. 
    * *Registry Key:* `HKLM\Software\Policies\Microsoft\Windows NT\DNSClient\EnableMulticast` set to `0`.
2.  **UAC at Maximum:** Ensure the User Account Control is set to "Always Notify" to prevent unauthorized elevation.
3.  **PowerShell Execution Policy:** Setting `Set-ExecutionPolicy Restricted` or `AllSigned`.

---

## Stage 2: Ameliorated OS (ReviOS / AtlasOS)

Projects like **ReviOS** and **AtlasOS** have gained popularity for "stripping down" Windows. From a **CySA+ (Software and Systems Security)** perspective, these are fascinating:

* **Pros:** They remove the "Microsoft Consumer Experience" (bloatware), disable unnecessary background services, and mitigate many telemetry-based privacy concerns.
* **Cons/Risks:** Some playbooks disable **Windows Defender** or **Windows Update**. In a professional SOC environment, these are **Critical Vulnerabilities**. If you use these tools, you *must* implement **Compensating Controls** (e.g., a third-party EDR like CrowdStrike or SentinelOne).
* 

Additionally, Chris Titus has a Windows Utility is an all‑in‑one PowerShell-driven toolkit designed to streamline Windows setup, maintenance, and optimization. It’s been refined over years and focuses on practical, safe tweaks rather than aggressive debloating. Think of it as a centralized dashboard for installing apps, tuning Windows, managing updates, and enabling hidden features — all from one script.

Run in an elevated PowerShell (Run as Administrator):
iwr -useb https://christitus.com/win | iex

---

## Stage 3: The Interactive Baseline Generator

The gold standard for a Security Architect is a reproducible build. Using an `autounattend.xml` file allows you to bake security into the OS during the installation phase. This tool helps you conceptualize the hardening logic used by the [Schneegans Generator](https://schneegans.de/windows/unattend-generator/).

### Build Your Hardened Baseline
---
layout: post
title: "Ultimate Windows 11 Hardening Generator"
date: 2026-02-08
categories: cybersecurity windows
---

# Build Your Hardened Baseline (Enterprise Grade)

<div id="generator-tool" style="background: #1a1a1a; padding: 25px; border-radius: 12px; color: #f0f0f0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; border: 1px solid #444;">
    <h4 style="color: #61afef; margin-top: 0;">1. Security Configuration:</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
        <label><input type="checkbox" id="telemetry" checked> Disable Telemetry</label>
        <label><input type="checkbox" id="uac" checked> Zero Trust UAC (Prompt)</label>
        <label><input type="checkbox" id="smb"> Disable SMBv1 (Safe Check)</label>
        <label><input type="checkbox" id="lsa" checked> LSA Protection</label>
        <label><input type="checkbox" id="doh" checked> Enforce DoH (Cloudflare)</label>
        <label><input type="checkbox" id="egress" checked> Egress Port Block</label>
    </div>
    
    <button onclick="generateHardenedXML()" style="background: #98c379; color: #1a1a1a; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%;">Generate Validated XML</button>
    
    <h4 style="margin-top: 25px;">2. Output (Save as autounattend.xml):</h4>
    <pre id="output-box" style="background: #282c34; color: #abb2bf; padding: 15px; border-radius: 5px; white-space: pre-wrap; display: none; font-size: 0.8em; border: 1px solid #555; max-height: 500px; overflow-y: auto;"></pre>
</div>

<script>
function generateHardenedXML() {
    // 1. Gather User Inputs
    const wipeDisk = document.getElementById('wipe-disk').checked; // New Toggle
    const telemetry = document.getElementById('telemetry').checked;
    const uac = document.getElementById('uac').checked;
    const smb = document.getElementById('smb').checked;
    const lsa = document.getElementById('lsa').checked;
    const doh = document.getElementById('doh').checked;
    const egress = document.getElementById('egress').checked;

    let count = 1;
    let commands = [];

    // 2. Build the Synchronous Commands (Specialize Pass)
    commands.push({
        desc: "Bypass NRO: Enable Local Account Flow",
        path: "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\OOBE\" /v BypassNRO /t REG_DWORD /d 1 /f"
    });

    if(uac) commands.push({ desc: "Zero Trust UAC", path: "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\" /v ConsentPromptBehaviorAdmin /t REG_DWORD /d 1 /f" });
    if(telemetry) commands.push({ desc: "Privacy: Disable Telemetry", path: "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection\" /v AllowTelemetry /t REG_DWORD /d 0 /f" });
    if(lsa) commands.push({ desc: "LSA Protection", path: "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Lsa\" /v RunAsPPL /t REG_DWORD /d 1 /f" });
    
    if(smb) {
        commands.push({ desc: "SMBv1 Safe Removal", path: "powershell -Command \"if (Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol) { Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol -NoRestart -ErrorAction SilentlyContinue }\"" });
    }
    if(doh) {
        commands.push({ desc: "Encrypted DNS", path: "powershell -Command \"Get-NetAdapter | Where-Object { $_.Status -eq 'Up' } | Set-DNSClientServerAddress -ServerAddresses ('1.1.1.1','1.0.0.1'); Netsh dns add encryption server=1.1.1.1 dohtemplate=https://cloudflare-dns.com/dns-query autoupgrade=yes\"" });
    }
    if(egress) {
        commands.push({ desc: "Egress Filtering", path: "powershell -Command \"New-NetFirewallRule -DisplayName 'Block Exfiltration' -Direction Outbound -LocalPort 21,23,25,6667 -Protocol TCP -Action Block\"" });
    }

    // 3. Assemble the XML String
    // Header & Namespaces
    let xml = `<?xml version="1.0" encoding="utf-8"?>\n<unattend xmlns="urn:schemas-microsoft-com:unattend" xmlns:wcm="http://schemas-microsoft-com:WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n`;

    // OPTIONAL: windowsPE Pass (Partitioning)
    if (wipeDisk) {
        xml += `    <settings pass="windowsPE">
        <component name="Microsoft-Windows-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
            <DiskConfiguration>
                <Disk wcm:action="add">
                    <DiskID>0</DiskID>
                    <WillWipeDisk>true</WillWipeDisk>
                    <CreatePartitions>
                        <CreatePartition wcm:action="add"><Order>1</Order><Type>EFI</Type><Size>100</Size></CreatePartition>
                        <CreatePartition wcm:action="add"><Order>2</Order><Type>MSR</Type><Size>16</Size></CreatePartition>
                        <CreatePartition wcm:action="add"><Order>3</Order><Type>Primary</Type><Extend>true</Extend></CreatePartition>
                    </CreatePartitions>
                    <ModifyPartitions>
                        <ModifyPartition wcm:action="add"><Order>1</Order><PartitionID>1</PartitionID><Label>System</Label><Format>FAT32</Format></ModifyPartition>
                        <ModifyPartition wcm:action="add"><Order>2</Order><PartitionID>2</PartitionID></ModifyPartition>
                        <ModifyPartition wcm:action="add"><Order>3</Order><PartitionID>3</PartitionID><Label>Windows</Label><Format>NTFS</Format></ModifyPartition>
                    </ModifyPartitions>
                </Disk>
            </DiskConfiguration>
            <ImageInstall><OSImage><InstallTo><DiskID>0</DiskID><PartitionID>3</PartitionID></InstallTo></OSImage></ImageInstall>
            <UserData><AcceptEula>true</AcceptEula></UserData>
        </component>
    </settings>\n`;
    }

    // Specialize Pass (Hardening)
    xml += `    <settings pass="specialize">
        <component name="Microsoft-Windows-Deployment" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
            <RunSynchronous>`;
    
    commands.forEach(cmd => {
        xml += `
                <RunSynchronousCommand wcm:action="add">
                    <Order>${count++}</Order>
                    <Description>${cmd.desc}</Description>
                    <Path>${cmd.path}</Path>
                </RunSynchronousCommand>`;
    });

    xml += `
            </RunSynchronous>
        </component>
    </settings>
    <settings pass="oobeSystem">
        <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
            <OOBE>
                <HideEULAPage>true</HideEULAPage>
                <HideLocalAdministrationPage>false</HideLocalAdministrationPage>
                <HideOEMRegistrationScreen>true</HideOEMRegistrationScreen>
                <HideOnlineAccountScreens>true</HideOnlineAccountScreens>
                <HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>
                <ProtectYourPC>3</ProtectYourPC>
            </OOBE>
            <UserAccounts>
                <LocalAccounts>
                    <LocalAccount wcm:action="add">
                        <Password><Value>Hardened_2026!</Value><PlainText>true</PlainText></Password>
                        <Description>Secure Operator</Description>
                        <DisplayName>Operator</DisplayName>
                        <Group>Administrators</Group>
                        <Name>Operator</Name>
                    </LocalAccount>
                </LocalAccounts>
            </UserAccounts>
        </component>
    </settings>
</unattend>`;

    // 4. Output to HTML
    const box = document.getElementById('output-box');
    box.innerText = xml;
    box.style.display = 'block';
}
</script>

---

## How to Read the Results

When you apply these settings via Registry or XML:
* **Registry Check:** Use `reg query` to verify keys. If a setting is "Managed by your organization," your hardening took effect.
* **Event Viewer:** Look for **Event ID 4688** (Process Creation). A hardened system should show fewer "junk" background processes.
* **Nmap/Nessus Scan:** A properly hardened Windows machine should show almost zero open ports (especially 139, 445 if SMB is restricted) from a remote perspective.

---

## Certification Alignment

* **Security+ (SY0-701):** This workflow demonstrates **Hardening Concepts (2.2)** and **Secure Network Architecture (3.2)** by reducing service dependencies.
* **CySA+ (CS0-003):** This addresses **Vulnerability Management (2.0)** by proactively mitigating common IoCs associated with lateral movement and data exfiltration (telemetry).

---

## Workflow Integration

For a **SOC Automator**, the final step isn't just one machine; it's the fleet.

1.  **GitHub Secrets & Actions:** Store your `autounattend.xml` in a private repo. Use a GitHub Action to inject license keys or specific local admin hashes into the XML before deployment.
2.  **SIEM Monitoring:** Once the hardened OS is deployed, use a **Webhook** to alert your ELK/Splunk instance that a new "Gold Image" node has come online. 
3.  **Audit Policy:** Use the XML to set the `Audit Policy` to "Success and Failure" for all account logons—essential for CySA+ log analysis.

---

## Bonus: How to Enable God Mode

1.  **Right-click on your desktop, select New, and then Folder.
2.  **Rename the folder by copying and pasting the following string (including the brackets):
>GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}.
3.  **Press Enter. The folder icon will change to a Control Panel-style icon.
4.  **Double-click the new icon to open the, centralized menu which allows for faster access to settings like BitLocker, Device Manager, and user accounts. 

---

## References
* [Microsoft: Windows Security Baselines](https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-security-baselines)
* [Schneegans Unattend Generator](https://schneegans.de/windows/unattend-generator/)
* [CompTIA Security+ Exam Objectives](https://www.comptia.org/)
