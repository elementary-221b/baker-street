---
layout: post
title: "Applying Filters: The SQL"
date: 2026-07-31 12:00:00 -0400
categories: [Cybersecurity, SQL]
tags: [sql, mariadb, security-operations, log-analysis, database-security, google-cybersecurity]
description: "A comprehensive guide on applying SQL filters (AND, OR, NOT, LIKE) to investigate security incidents, analyze login attempts, and audit organizational devices."
featured: true
---

## Introduction & Context

As a security practitioner, querying organizational databases is a fundamental skill. Whether responding to an active security incident, auditing user access logs, or orchestrating system updates across departments, Structured Query Language (SQL) serves as an indispensable tool for extracting actionable intelligence from massive datasets.

This article synthesizes key concepts and practical queries from the **Google Cybersecurity Certificate**, serving both as a personal reference guide and an introductory tutorial for security analysts. We will explore how to apply conditional logic and filtering operators in **MariaDB** to analyze authentication logs and manage department device inventories.

---

## Database Architecture & Schema Reference

To investigate potential security anomalies, we operate within the `organization` database, which consists of two core relational tables: `log_in_attempts` and `employees`.

### 1. The `log_in_attempts` Table
Tracks authentication activity across all enterprise assets.

| Column Name | Data Type | Description |
| :--- | :--- | :--- |
| `event_id` | INT / PRIMARY KEY | Unique identifier assigned to each login event |
| `username` | VARCHAR | Unique username of the employee attempting login |
| `login_date` | DATE | Date the login attempt was recorded (`YYYY-MM-DD`) |
| `login_time` | TIME | Time the login attempt occurred (`HH:MM:SS`) |
| `country` | VARCHAR | ISO code or country name where the request originated |
| `ip_address` | VARCHAR | IP address of the source machine |
| `success` | TINYINT / BOOLEAN | Outcome of attempt (`1` / `TRUE` = Success, `0` / `FALSE` = Failed) |

**Terminal Representation in MariaDB:**

![sql table]({{site.baseurl}}/assets/img/1_log_in_table.png)

### 2. The \`employees\` Table
Maintains organizational asset allocation and personnel mapping.

| Column Name | Data Type | Description |
| :--- | :--- | :--- |
| \`employee_id\` | INT / PRIMARY KEY | Unique identification number for the employee |
| \`device_id\` | VARCHAR | Unique hardware device identifier |
| \`username\` | VARCHAR | System username assigned to employee |
| \`department\` | VARCHAR | Department name (e.g., Marketing, Finance, Sales, IT) |
| \`office\` | VARCHAR | Physical building and room designation (e.g., East-170) |

![sql table]({{site.baseurl}}/assets/img/2_employees_table.png)

---

## Environment Setup & Terminal Commands

When interacting with MariaDB in a Linux terminal environment:

{% highlight ruby %}
bash
# Connect to the target database
sudo mysql organization
{% endhighlight %}

Useful CLI Shortcuts:
- **\`CTRL + L\`**: Clears the terminal screen.
- **\`\\\\c\`**: Aborts the current statement line buffer and resets input.
- **\`;\`**: Required delimiter to terminate and execute any SQL command.

---

## Practical Incident Response & Asset Filtering Scenarios

### Scenario 1: Investigating After-Hours Failed Login Attempts
**Objective:** Identify potential brute-force or unauthorized access attempts occurring after regular business hours (after 18:00).

{% highlight ruby %}
sql
SELECT *
FROM log_in_attempts
WHERE login_time > '18:00' AND success = FALSE;
{% endhighlight %}

Output:

![sql table]({{site.baseurl}}/assets/img/Scenario_1_Failed_Login_Attempts.png)

Analysis:

- **\`WHERE login_time > '18:00'\`**: Filters records recorded after 6:00 PM.
- **\`AND success = FALSE\`**: Limits results strictly to failed logins (0).
- Combining these with **\`AND\`** ensures both criteria must evaluate to true.


### Scenario 2: Auditing Suspicious Dates
**Objective:** A suspicious authentication anomaly occurred on 2022-05-09. We need to inspect all activity on that day as well as the preceding day (2022-05-08).

{% highlight ruby %}
sql
SELECT *
FROM log_in_attempts
WHERE login_date = '2022-05-09' OR login_date = '2022-05-08';
{% endhighlight %}

Output:

![sql table]({{site.baseurl}}/assets/img/Scenario_2_Login_Attempts_on_Specific_Dates.png)

Analysis:

- The **\`OR`\** operator expands the criteria so that any log event matching either date is returned.

### Scenario 3: Anomalous Foreign Access Attempts (Excluding Mexico)
**Objective:** Security telemetry indicates potential unauthorized access originating outside Mexico. Notice that Mexico appears as both MEX and MEXICO in raw records.

{% highlight ruby %}
sql
SELECT *
FROM log_in_attempts
WHERE NOT country LIKE 'MEX%';
{% endhighlight %}

Output:

![sql table]({{site.baseurl}}/assets/img/Scenario_3_Login_Attempts_Outside_of_Mexico.png)

Analysis:

- **\`LIKE 'MEX%'`\**: Uses the percentage wildcard (**\`%`\**) to match any string starting with "MEX" (**\`MEX, MEXICO`\**).
- **\`NOT`\**: Negates the match, effectively returning all events outside Mexico

### Scenario 4: Targeted Hardware Patching (Marketing Department, East Building)
**Objective:** Identify specific employee workstations in the Marketing department located in the East building for critical patching.

{% highlight ruby %}
sql
SELECT *
FROM employees
WHERE department = 'Marketing' AND office LIKE 'East%';
{% endhighlight %}

Output:

![sql table]({{site.baseurl}}/assets/img/Scenario_4_Employees in Marketing East Building.png)

### Scenario 5: Multi-Department Patch Deployment (Finance and Sales)
**Objective:**  Retrieve device details for personnel in Finance or Sales to execute department-specific software updates.

{% highlight ruby %}
sql
SELECT *
FROM employees
WHERE department = 'Finance' OR department = 'Sales';
{% endhighlight %}

Output:

![sql table]({{site.baseurl}}/assets/img/Scenario_5_Employees in Sales and Finance.png)

### Scenario 6: Non-IT Asset Audit
Target all systems belonging to non-IT personnel for general security policy enforcement.

{% highlight ruby %}
sql
SELECT *
FROM employees
WHERE NOT department = 'Information Technology';
{% endhighlight %}

Output:

![sql table]({{site.baseurl}}/assets/img/Scenario_6_Employees not in Information Technoloy.png)

---

## SQL Security Operations Syntax Reference

### 1. Filtering Operators & Logic
| Operator | Purpose | Example |
| :--- | :--- | :--- |
| \`=\` | Exact equality match | \`WHERE department = 'Finance'\` |
| \`<>\`, \`!=\` | Inequality match | \`WHERE country <> 'USA'\` |
| \`>\`, \`<\`, \`>=\`, \`<=\` | Numerical / Date comparisons | \`WHERE login_time > '18:00'\` |
| \`BETWEEN ... AND ...\` | Range inclusion | \`WHERE patch_date BETWEEN '2022-01-01' AND '2022-06-30'\` |
| \`LIKE\` | Pattern matching with wildcards | \`WHERE office LIKE 'East%'\` |
| \`AND\` | Conjunction (both true) | \`WHERE dept = 'IT' AND office = 'North'\` |
| \`OR\` | Disjunction (either true) | \`WHERE dept = 'Sales' OR dept = 'Finance'\` |
| \`NOT\` | Negation | \`WHERE NOT dept = 'IT'\` |

### 2. Wildcard Cheat Sheet
- **\`%\`**: Represents **zero, one, or multiple** characters.
   - **\`a%`\**: Starts with **\`a`\** (**\`apple`\**, **\`art`\**).
   - **\`%a`\**: Ends with **\`a`\** (**\`pizza`\**, **\`data`\**).
   - **\`%a%`\**: Contains **\`a`\** (**\`bank`\**, **\`flag`\**).
- **\`_\`**: Represents **exactly one** character.
   - **\`a_`\**: Two-character string starting with **\`a`\** (**\`an`\**, **\`as`\**).
   - **\`_a_`\**: Three-character string with **\`a`\** in middle (**\`car`\**, **\`ban`\**).

### 3. Joins & Aggregations
- **\`INNER JOIN`\**: Returns matching records present in both tables.
- **\`LEFT JOIN`\**: Returns all rows from left table and matching rows from right table (filling NULL for missing).
- **\`COUNT()`\**: Counts total matching rows.
- **\`AVG()`\**: Computes average value of numeric column.
- **\`SUM()`\**: Adds numeric values across matched rows.

---

## Conclusion & Attachment Reference

### Downloadable Resources & Attachments
- [SQL Security Quick Reference Cheat Sheet]({{site.baseurl}}/assets/attachments/sql_security_cheat_sheet.md)
- [Database Schema & Practice Query Script]({{site.baseurl}}/assets/attachments/schema_and_queries.sql)

---

### Core Technical Concepts Covered

* **Database Connection & CLI Utilities:** Database connection is executed via `sudo mysql organization`[cite: 5]. Screen buffer and query clearing are handled with `CTRL + L` and `\c`, with all commands requiring a trailing `;`[cite: 5].
* **Schema Breakdown:**
  * `log_in_attempts` contains `event_id`, `username`, `login_date`, `login_time`, `country`, `ip_address`, and `success` (`0` for failure, `1` for success)[cite: 2].
  * `employees` contains `employee_id`, `device_id`, `username`, `department`, and `office`[cite: 2].
* **Conditional Filtering Logic:**
  * **`AND`**: Returns records where both conditions are satisfied (e.g., `login_time > '18:00' AND success = FALSE`)[cite: 3, 4].
  * **`OR`**: Returns records where either condition is satisfied (e.g., `login_date = '2022-05-09' OR login_date = '2022-05-08'`)[cite: 3, 4].
  * **`NOT`**: Inverts conditional output (e.g., `WHERE NOT department = 'Information Technology'`)[cite: 3, 4].
  * **`LIKE` with Wildcards:** Uses `%` to match zero or more unspecified characters (e.g., `office LIKE 'East%'` or `NOT country LIKE 'MEX%'`) and `_` to match exactly one character[cite: 3, 4, 5].
* **Relational Joins & Aggregates:**
  * Includes `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN` using key mapping (`ON table1.column = table2.column`)[cite: 4, 5].
  * Provides aggregate function syntax for `COUNT()`, `AVG()`, and `SUM()`[cite: 4, 5].
