-- SQL Security Operations Practice Schema & Queries
-- Database: organization

CREATE DATABASE IF NOT EXISTS organization;
USE organization;

-- 1. Table Structure: log_in_attempts
DROP TABLE IF EXISTS log_in_attempts;
CREATE TABLE log_in_attempts (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    login_date DATE NOT NULL,
    login_time TIME NOT NULL,
    country VARCHAR(50) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    success BOOLEAN NOT NULL
);

-- 2. Table Structure: employees
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    device_id VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    office VARCHAR(50) NOT NULL
);

-- Insert Sample Data: log_in_attempts
INSERT INTO log_in_attempts (event_id, username, login_date, login_time, country, ip_address, success) VALUES
(1, 'jrafael', '2022-05-09', '04:56:27', 'CAN', '192.168.243.140', FALSE),
(2, 'apatel', '2022-05-10', '20:27:27', 'CAN', '192.168.205.12', FALSE),
(3, 'dkot', '2022-05-09', '06:47:41', 'USA', '192.168.151.162', FALSE),
(4, 'dkot', '2022-05-08', '02:00:39', 'USA', '192.168.178.71', FALSE),
(18, 'pwashing', '2022-05-11', '19:28:50', 'US', '192.168.66.142', FALSE),
(20, 'tshah', '2022-05-12', '18:56:36', 'MEXICO', '192.168.109.50', FALSE);

-- Insert Sample Data: employees
INSERT INTO employees (employee_id, device_id, username, department, office) VALUES
(1000, 'a320b137c219', 'elarson', 'Marketing', 'East-170'),
(1001, 'b239c825d303', 'bmoreno', 'Marketing', 'Central-276'),
(1002, 'c116d593e558', 'tshah', 'Human Resources', 'North-434'),
(1003, 'd394e816f943', 'sgilmore', 'Finance', 'South-153'),
(1005, 'a192b174c940', 'jdarosa', 'Marketing', 'East-195'),
(1007, 'h174i497j413', 'wjaffrey', 'Finance', 'North-406'),
(1008, 'i858j583k571', 'abernard', 'Finance', 'South-170'),
(1075, 'x573y883z772', 'fbautist', 'Marketing', 'East-267');

-- Audit Queries

-- Scenario 1: Retrieve after hours failed login attempts (after 18:00)
SELECT * FROM log_in_attempts WHERE login_time > '18:00' AND success = FALSE;

-- Scenario 2: Retrieve login attempts on specific dates (2022-05-09 or 2022-05-08)
SELECT * FROM log_in_attempts WHERE login_date = '2022-05-09' OR login_date = '2022-05-08';

-- Scenario 3: Retrieve login attempts outside of Mexico
SELECT * FROM log_in_attempts WHERE NOT country LIKE 'MEX%';

-- Scenario 4: Retrieve Marketing employees in East building
SELECT * FROM employees WHERE department = 'Marketing' AND office LIKE 'East%';

-- Scenario 5: Retrieve employees in Finance or Sales
SELECT * FROM employees WHERE department = 'Finance' OR department = 'Sales';

-- Scenario 6: Retrieve all employees not in IT
SELECT * FROM employees WHERE NOT department = 'Information Technology';