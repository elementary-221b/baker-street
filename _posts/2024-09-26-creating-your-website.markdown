---
layout: post
title: Create Your Website
date: 2026-07-14 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: website.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Google, HTML, GITHUB] # add tag
---

## Tell Me A Story

It is a capital mistake, my dear reader, to theorize before one has data. Yet, the modern world demands an immediate digital presence. Happily, we have observed that there are two singularly efficient methods for constructing a website entirely *for free*. Let us examine the evidence.

---

## **Part 1: Establishing Your Web Presence**

Whether you desire absolute, granular control over every line of code, or prefer the rapid, visual assembly of a drag-and-drop canvas, a production-ready site can be summoned from the ether without spending a single shilling.

### **Method 1: The Developer’s Route — GitHub Pages**

GitHub Pages hosts static websites directly from a Git repository. It remains the absolute industry standard for developer portfolios and open-source documentation.

#### **Step 1: Account Creation**

1. Direct your browser to **[github.com](https://github.com)** and click **Sign up**.


2. Provide your email, construct an ironclad password, and select a unique moniker. Verify your identity using the dispatch sent to your inbox.



#### **Step 2: Repository Creation**

1. Once logged in, observe the **+** icon in the upper right-hand corner, and select **New repository**.


2. **The Crucial Clue:** You must name this repository precisely `yourusername.github.io` (substituting "yourusername" with your actual GitHub username). GitHub’s automated engines rely entirely on this exact string to map your files to the root domain.


3. Set the visibility to **Public** and select the option to **Add a README file**.


4. Click **Create repository**.



#### **Step 3: The Template Speed Trick**

To write HTML entirely from a blank slate is an elementary waste of energy. We shall employ a pre-built static template to bypass hours of labor. You may commit these three ready-made files directly into your repository:

**`index.html`** (The Structural Skeleton)

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
        <h1>Welcome to My Fast-Tracked Website</h1>
        <p>Hosted on GitHub Pages</p>
    </header>
    <main>
        <section class="content">
            <h2>About This Site</h2>
            <p>This is a lightweight, responsive website template ready for deployment.</p>
            <button id="interactiveBtn">Verify Interaction</button>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>

```

**`styles.css`** (The Aesthetic Raiment)

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #0366d6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
button:hover {
    background-color: #005cc5;
}

```

**`script.js`** (The Engine of Action)

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('interactiveBtn');
    if(btn) {
        btn.addEventListener('click', () => {
            alert('JavaScript is successfully running on your deployed site!');
        });
    }
});

```

#### **Step 4: Upload and Deploy**

1. Within your newly minted repository, click **Add file** > **Create new file**.


2. Name the file `index.html`, paste the HTML structure provided above, and select **Commit changes**.


3. Repeat this identical process for both `styles.css` and `script.js`.


4. Navigate to the **Settings** tab of your repository, and select **Pages** from the left-hand sidebar.


5. Under "Source", ensure "Deploy from a branch" is selected, choose the **main** (or **master**) branch, and click **Save**.


6. Give the system a few moments—precision engines require time to run—and your site will appear live at `[https://yourusername.github.io](https://yourusername.github.io)`.



#### **Step 5: Customizing Your Canvas**

* **Option A: Pure HTML/CSS/JS** — The simplest approach. Edit your files locally or directly on GitHub to watch the changes propagate.


* **Option B: Jekyll (GitHub Pages Native)** — GitHub Pages natively compiles Jekyll themes. You may configure your entire site's parameters globally by modifying the `_config.yml` file.



---

### **Method 2: The Visual Route — Google Sites**

If writing code strikes you as an unnecessary complication, Google Sites offers a visual assembly method that is wonderfully rapid.

#### **Step 1: Account Registration**

1. If you do not possess a Google account, navigate to **accounts.google.com**, select **Create account**, and follow the logical prompts.



#### **Step 2: The Template Gambit**

1. Navigate to **[sites.google.com](https://sites.google.com)**.


2. **The Secret to Speed:** Avoid starting from a blank page. Click on the **Template gallery** in the upper right. Choose a pre-designed layout (such as "Portfolio" or "Project"). A pre-built visual hierarchy is far easier to edit than an empty void.



#### **Step 3: Customization**

1. **Layout:** Drag and drop structural blocks, text fields, and imagery from the right-hand **Insert** menu.


2. **Integration:** Because this tool resides within the Google ecosystem, you can embed YouTube videos, Maps, and Drive documents without touching inline iframe codes.


3. **Themes:** Use the **Themes** tab to instantly alter your color palettes and typography globally, ensuring consistency without writing CSS.



#### **Step 4: Publication**

1. Click the blue **Publish** button in the top right.


2. Choose your web address suffix (e.g., `my-custom-portfolio`).


3. Ensure the viewing permissions are set to **Anyone**.


4. Click **Publish**. Your creation is now live at `[https://sites.google.com/view/your-site-name](https://sites.google.com/view/your-site-name)`.



---

### **Platform Comparison**

| Feature | GitHub Pages | Google Sites |
| --- | --- | --- |
| **Best For** | Developers, bloggers, IT professionals

 | Beginners, rapid wikis, visual design

 |
| **Customization** | Unlimited (Complete code control)

 | Restricted to structured grid layouts

 |
| **Asset Storage** | Git Repositories

 | Google Drive

 |
| **Custom Domain** | Free to connect

 | Free to connect

 |

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

## **Part 2: CompTIA Security+ Web Security Concepts**

Once your web asset is online, it becomes a target. The CompTIA Security+ framework teaches us that we must take a proactive, defensive stance. This is divided into hardening (reducing our attack surface) and vulnerability management (uncovering weaknesses before others do).

### **1. Web Infrastructure Hardening**

Hardening is the art of locking down your server configuration so tightly that no intruder can slip through the cracks.

* **Enforcing HTTPS (TLS Encryption):** Data transmitted over HTTP is sent in plain, readable text—a gift to any eavesdropper. Security+ standards dictate using TLS (Transport Layer Security) to encrypt data in transit. On GitHub Pages, this is easily accomplished by checking the **Enforce HTTPS** box within your repository settings.


* **Implementing HTTP Security Headers:** Instruct the visitor’s browser on how to behave securely.


* **HSTS (HTTP Strict Transport Security):** Forces the browser to communicate exclusively via encrypted HTTPS.


* **CSP (Content Security Policy):** Mitigates Cross-Site Scripting (XSS) attacks by explicitly dictating which domains are allowed to run scripts on your page.




* **Input Validation & Output Encoding:** The golden rule of web security is simple: *never trust user input*. Every web form, search query, and API endpoint must validate incoming data and safely encode outgoing data so malicious scripts cannot execute in the browser.


* **Principle of Least Privilege (PoLP):** Apply strict Access Control Lists (ACLs) to your backend. The web server software should only possess permission to read the files it actively serves, and absolutely nothing more.



### **2. Checking for Vulnerabilities**

An effective investigator does not wait for a crime to happen; they search for the vulnerabilities beforehand.

* **Vulnerability Scanning:** Utilize automated tools (such as Nessus or Qualys) to sweep the server for known CVEs (Common Vulnerabilities and Exposures), checking for unpatched software or outdated libraries.


* **Configuration Audits:** Regularly verify that admin interfaces are hidden from public view and default credentials have been changed.


* **Application Security Testing:**
* **SAST (Static Application Security Testing):** Analyzing the source code at rest to catch security flaws before deployment.


* **DAST (Dynamic Application Security Testing):** Interacting with the live, running application to find runtime flaws like SQL injection or broken access controls.


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

## **Part 3: Advanced Pentesting — The Red Team Perspective**

While defense is commendable, an advanced Red Team approaches security by thinking like the adversary. They employ sophisticated tactics to bypass defenses and simulate real-world Advanced Persistent Threats (APTs).

### **1. Advanced Reconnaissance (OSINT & Active Profiling)**

Before an attacker sends a single hostile payload, they map the target's entire footprint.

* **Shodan & Censys:** These are specialized search engines that index internet-connected devices. Pentesters use them to locate exposed databases, staging domains, and misconfigured interfaces without making direct contact with the target network.


* **Subdomain Enumeration:** Using tools like **Amass** or **Sublist3r** to discover obscure subdomains (such as `dev-test.target.com`) which are often far more vulnerable than the main production site.



### **2. Web Exploitation Arsenal**

When attacking web applications directly, standard automated scanners are too noisy to go unnoticed. Red Teams rely on manual traffic manipulation.

* **Burp Suite Professional & OWASP ZAP:** The ultimate tools of the trade. These act as local interception proxies, letting you pause a web request, alter its parameters to bypass client-side validation, and send it on to the server to test for logic flaws or privilege escalation.


* **Blind SQL Injection:** When a database refuses to throw obvious error messages, attackers use tools like **SQLmap** to ask the database boolean questions, measuring the time it takes for the server to reply to extract data character by character.



### **3. Living Off the Land (LotL) & Evasion**

Modern Endpoint Detection and Response (EDR) systems will instantly flag known malware. Consequently, a sophisticated attacker does not drop recognizable malicious executable files onto a compromised server.

* **LotL Techniques:** Attackers utilize legitimate administrative tools already present on the operating system (like PowerShell on Windows or Python and Bash on Linux) to carry out their commands. This makes it incredibly difficult for defenders to separate malicious actions from routine administration.


* **Command and Control (C2) Frameworks:** Once inside, Red Teams deploy lightweight "beacons" via frameworks like **Cobalt Strike** or **Mythic**. These beacons disguise their communications by hiding command traffic inside normal, encrypted HTTPS web traffic (Port 443), blending seamlessly with everyday network traffic.



---

## **Certification Concepts & Resources**

**Specific CompTIA Certification Concepts Covered:**

* **CompTIA Security+ (SY0-701):**

* Domain 2: Security Architecture (Encryption, Web Application Firewalls, Least Privilege).


* Domain 3: Security Engineering (Secure Coding Practices, HSTS, CSP, Input Validation).


* Domain 4: Security Operations (Vulnerability Scanning, SAST/DAST).




* **CompTIA PenTest+ (PT0-002):**

* Domain 2: Information Gathering and Vulnerability Identification (OSINT, Subdomain Enumeration).


* Domain 3: Attacks and Exploits (Proxy Interception, Web Application Attacks, SQLi, SSRF).


* Domain 4: Reporting and Communication (Mitigation Strategies).





**Resources for Further Reading:**

* **Web Setup:** [GitHub Pages Documentation](https://pages.github.com/) | [Google Sites Help Center](https://support.google.com/sites/)

* **Security Guidelines:** [OWASP Top 10](https://owasp.org/www-project-top-ten/) (Open Worldwide Application Security Project)


* **Certification Standards:** [CompTIA Security+ Objectives](https://www.comptia.org/certifications/security)

* **Pentesting Tools:** [PortSwigger (Burp Suite)](https://portswigger.net/) | [MITRE ATT&CK Framework](https://attack.mitre.org/)


**Interactive Practice Labs:**

* [Zero Trust Web Lab](https://ztw.ctbb.show/)

* [Caido Labs](https://labs.cai.do/)

* [PortSwigger Web Security Academy](https://portswigger.net/web-security)
