---
layout: post
title: "The Brief Case: Create Your Website"
date: 2026-07-15 00:00:00 +0300
description: "A singular investigation into building secure web assets for the grand sum of zero pence."
image: website.jpg
fig-caption: "Deploying secure, modern static web applications to the cloud."
tags: [Security, HTML, GitHub, Jekyll, Web-Dev]
---

## The Digital Footprint Challenge

It is a capital mistake, my dear reader, to theorize before one has data. Yet, the modern world demands an immediate digital presence. Let us examine the evidence.

In the modern tech landscape, an immediate, polished digital presence is no longer optional—it is your extended resume. Fortunately, you do not need an enterprise budget to establish a professional web presence. You can deploy a high-performance, responsive website entirely for free. 

This guide breaks down exactly how to build and host your site using two industry-standard methods. Afterward, we will look under the hood to see how these architectures interact with the web security principles found in the **CompTIA Security+** and **PenTest+** frameworks.

---

## **Part 1: Establishing Your Web Presence**

Depending on your personal goals, you will likely choose one of two paths: absolute control over every line of source code, or rapid visual assembly using a structured layout engine.

### **Method 1: The Developer’s Choice — GitHub Pages**

GitHub Pages serves static web files directly from a cloud repository. It is the gold standard for software developers, IT professionals, and technical portfolios.

> **Learner Definition:** 
> * **Repository (Repo):** A digital project folder hosted in the cloud that tracks every change made to your files.
> * **Commit:** Saving and uploading a snapshot of your updated files to your repository.

#### **Step 1: Account Setup**
1. Visit **[github.com](https://github.com)** and click **Sign up**.
2. Provide your email, create a strong password, and choose a clean, professional username. 
3. **Security Tip:** Immediately enable **Two-Factor Authentication (2FA)** in your account settings to prevent unauthorized takeovers of your web code.

#### **Step 2: Repository Creation**
1. Log in, click the **+** icon in the upper-right corner, and select **New repository**.
2. **Critical Warning:** Name your repository exactly `yourusername.github.io` (replace `yourusername` with your literal, case-sensitive GitHub username). If this string does not match your username perfectly, GitHub's automation engines will not map your files to your free web domain.
3. Set the visibility to **Public** and check the box to **Add a README file**.
4. Click **Create repository**.

#### **Step 3: The Template Setup**
Writing frontend code from scratch is inefficient when establishing a baseline site. We will deploy three fundamental building blocks. Create these files directly inside your cloud repository:

**`index.html`** (The Structure)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Secure Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Personal Website</h1>
        <p>Hosted Securely via GitHub Pages</p>
    </header>
    <main>
        <section class="content">
            <h2>About This Space</h2>
            <p>This is a lightweight, responsive static web template ready for secure customization.</p>
            <button id="interactiveBtn">Test System Interaction</button>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>

```

**`styles.css`** (The Design)

```css
body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f6;
    color: #333;
}
header {
    background-color: #24292e;
    color: white;
    padding: 3rem 1rem;
    text-align: center;
}
.content {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    text-align: center;
}
button {
    padding: 12px 24px;
    font-size: 16px;
    background-color: #0366d6;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}
button:hover {
    background-color: #005cc5;
}

```

**`script.js`** (The Interaction)

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('interactiveBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            console.log('System verification checklist passed.');
            alert('JavaScript is executing safely on your deployed domain!');
        });
    }
});

```

#### **Step 4: Upload and Deploy**

1. Inside your repository web page, click **Add file** > **Create new file**.
2. Name the file `index.html`, paste the HTML block from above, and click **Commit changes**.
3. Repeat this exact process for both `styles.css` and `script.js`.
4. Navigate to the **Settings** tab of your repository, then click **Pages** in the left sidebar.
5. Under **Build and deployment**, ensure the source is set to **Deploy from a branch**, select your `main` branch, and hit **Save**.
6. Wait 1 to 2 minutes. Your site will automatically go live at `https://yourusername.github.io`.

#### **Step 5: Scaling with Jekyll**

Because you are using a Jekyll-powered theme environment, your project can easily scale. You can abstract repetitive elements into layouts and manage your entire application configuration globally inside a `_config.yml` file as your content expands.

---

### **Method 2: The Visual Speed Path — Google Sites**

If you prefer to bypass writing direct code, Google Sites allows you to visually assemble a responsive dashboard in minutes.

#### **Step 1: Authorization**

1. Log into your standard Google Account, or create one at **accounts.google.com**.
2. Ensure you have activated account recovery protections to guard your associated cloud assets.

#### **Step 2: Selecting a Template**

1. Navigate directly to **[sites.google.com](https://sites.google.com)**.
2. Expand the **Template gallery** in the top right. Select a layout like **Portfolio** or **Project**. Modifying a pre-built visual hierarchy is significantly faster than starting from an empty grid.

#### **Step 3: Configuration & Customization**

1. **Layout Controls:** Drag, drop, and resize structural elements, forms, and image blocks directly from the **Insert** panel on the right.
2. **Ecosystem Integration:** Embed assets like YouTube media, Google Maps, or document drives natively without wrestling with raw, unvalidated `<iframe>` embed codes.
3. **Themes:** Use the **Themes** tab to swap your typography palettes and style kits globally, keeping your design strictly uniform.

#### **Step 4: Going Live**

1. Click the blue **Publish** button in the top-right toolbar.
2. Choose a unique web address suffix (e.g., `my-secure-portfolio`).
3. Under **Who can view my site**, ensure it is set to **Public**.
4. Click **Publish**. Your deployment is live at `https://sites.google.com/view/your-site-name`.

---

### **Platform Breakdown**

| Feature | GitHub Pages | Google Sites |
| :--- | :--- | :--- |
| **Ideal For** | Developers, technical portfolios, engineers | Rapid setups, visual designers, project wikis |
| **Control Model** | Code-First Sovereignty (Full HTML/CSS/JS control) | Zero-Code Velocity (Strict drag-and-drop grid) |
| **Data Storage** | Managed Git Repository | Integrated Google Drive |
| **Custom Domain** | Free to link custom DNS records | Free to link custom DNS records |

---

<div style="margin: 30px 0; text-align: center;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; border: 1px solid #333;">
        <iframe 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/EXfFBEuCAr0" 
            title="you STILL need a website RIGHT NOW!!" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </div>
    <div style="margin-top: 10px; font-size: 0.85em; color: #888; font-style: italic;">
        Video credit: <a href="https://www.youtube.com/@NetworkChuck" target="_blank" style="color: #007bff; text-decoration: none;">NetworkChuck Official Channel</a> | 
        Platform provided by <a href="https://networkchuck.com/" target="_blank" style="color: #007bff; text-decoration: none;">NetworkChuck.com</a>
    </div>
</div>

---

## **Part 2: CompTIA Security+ Application Concepts**

Once your web asset is live on the public internet, it interacts with global web ecosystems. The **CompTIA Security+** framework highlights that defensive web administration requires proactive hardening and regular vulnerability analysis.

### **1. Core Architectural Protections**

When using managed hosting like GitHub Pages or Google Sites, the cloud platform handles **infrastructure hardening** (patching the underlying server operating systems, mitigating DDoS attacks, and managing hardware ACLs). However, developers are still responsible for the security settings within their control.

* **Enforcing TLS Encryption (HTTPS):** Sending data over unencrypted HTTP exposes traffic to man-in-the-middle eavesdropping. Security standards mandate using TLS (Transport Layer Security). On GitHub Pages, ensure you check the **Enforce HTTPS** checkbox in your repository page settings to guarantee all user traffic is fully encrypted in transit.
* **Access Governance:** Apply the **Principle of Least Privilege (PoLP)**. Do not give external tools or collaborators administrative ownership over your main source repository or drive folders unless strictly necessary.

### **2. Security Guardrails**

> **Exam Focus Callouts:**
> * **XSS (Cross-Site Scripting):** An attack where a malicious actor injects unauthorized scripts into a trusted website, which then execute in an innocent visitor's browser.
> * **CSP (Content Security Policy):** An HTTP header or meta tag that defines exactly which domains are allowed to execute scripts on your web application, completely blocking unauthorized XSS vectors.
> * **HSTS (HTTP Strict Transport Security):** A configuration directive that forces browsers to only communicate with a site via secure HTTPS connections, preventing protocol-downgrade attacks.
> 
> 

### **3. Vulnerability Verification**

Defenders continuously assess their web applications using specific auditing styles:

* **SAST (Static Application Security Testing):** Analyzing the raw source code of your website while it is at rest to discover bugs, unvalidated inputs, or accidentally committed security keys *before* deployment.
* **DAST (Dynamic Application Security Testing):** Testing a live, running application by actively interacting with it to find operational runtime flaws like broken link redirects or access management oversights.

---

## **Part 3: Advanced Analysis — The Red Team View**

To build resilient defenses, security engineers must understand the mindset of an attacker. A **CompTIA PenTest+** practitioner uses structured methodologies to analyze a target's exposed internet profile.

### **1. Footprinting and Reconnaissance**

Before executing an exploit, an adversary builds a comprehensive profile of an organization’s internet presence.

* **OSINT Search Engines:** Tools like **Shodan** and **Censys** index internet-connected devices, certificates, and domains worldwide. Pentesters scan these platforms to find unpatched servers, forgotten staging environments, or misconfigured open ports without making direct contact with a target network.
* **Subdomain Enumeration:** Using automated scanning suites like **Amass** or **Sublist3r**, attackers look for secondary assets (e.g., `test-environment.company.com`). These secondary pages are often less protected than a primary homepage but share identical network permissions.

### **2. Web Interception Analysis**

When exploring application logic, security testing shifts from automated network sweeps to targeted verification.

* **Proxy Manipulation:** Platforms like **Burp Suite Professional** or **OWASP ZAP** act as local interception proxies. They allow an engineer to capture an outgoing web request, inspect its structure, and safely modify parameter inputs to test how a server processes unvalidated data.

```
[ User Browser ] ---> [ Interception Proxy (Burp Suite) ] ---> [ Live Server ]
                            (Analyze & Edit Inputs)

```

### **3. The Enterprise Horizon (Full-Stack Risks)**

While your static website is naturally immune to database threats due to its architecture, complex web applications encounter significantly broader attack vectors:

* **SQL Injection (SQLi):** An exploit where an attacker inputs malicious database queries into a form field to manipulate backend databases.
* **Living off the Land (LotL):** Sophisticated actors minimize their footprint on a compromised machine by utilizing native administrative tools already present on the system (like PowerShell on Windows or Bash on Linux) to execute scripts, ensuring they blend seamlessly with normal system behavior.

---

<div style="margin: 30px 0; text-align: center;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; border: 1px solid #333;">
        <iframe 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/KBIQE9fo8mU" 
            title="Top 4 Web hacking demos for aspiring hackers" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </div>
    <div style="margin-top: 10px; font-size: 0.85em; color: #888; font-style: italic;">
        Video credit: <a href="https://www.youtube.com/@davidbombal" target="_blank" style="color: #007bff; text-decoration: none;">David Bombal's Official Channel</a> | 
        Platform provided by <a href="https://davidbombal.com/" target="_blank" style="color: #007bff; text-decoration: none;">davidbombal.com</a>
    </div>
</div>

---

## **Certification Mapping & Resources**

### **CompTIA Domain Framework Match**

* **CompTIA Security+ (SY0-701):**
* **Domain 2 (Security Architecture):** HTTPS/TLS requirements, Principle of Least Privilege.
* **Domain 3 (Security Engineering):** Secure frontend design habits, understanding basic XSS vectors, and CSP.
* **Domain 4 (Security Operations):** Implementing baseline SAST and DAST evaluation methodologies.


* **CompTIA PenTest+ (PT0-002):**
* **Domain 2 (Information Gathering):** OSINT asset tracking and subdomain discovery mechanics.
* **Domain 3 (Attacks and Exploits):** Intercepting proxies and analyzing application responses.



### **Technical References & Practice Environments**

* **Deployment Docs:** [Official GitHub Pages Overview](https://pages.github.com/) | [Google Sites Help](https://support.google.com/sites/)
* **Security Frameworks:** [OWASP Top 10 Vulnerabilities Guide](https://owasp.org/www-project-top-ten/) | [MITRE ATT&CK Attacker Matrix](https://attack.mitre.org/)
* **Interactive Training Labs:**
* [PortSwigger Web Security Academy](https://portswigger.net/web-security) (Excellent, hands-on lab environments for tracking vulnerabilities)
* [Caido Security Tooling Labs](https://labs.cai.do/)

