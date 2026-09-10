# SQL Security Analyst Quick Reference Cheat Sheet

## Essential Clauses
- **SELECT**: Specifies columns to retrieve (`SELECT username, ip_address`). Use `SELECT *` for all columns.
- **FROM**: Specifies table name (`FROM log_in_attempts`).
- **WHERE**: Filters records based on conditions.
- **ORDER BY**: Sorts results (`ORDER BY login_date DESC, login_time ASC`).

## Filtering Operators
| Syntax | Meaning | Example |
| :--- | :--- | :--- |
| `=` | Equal to | `WHERE success = 1` |
| `!=` or `<>` | Not equal to | `WHERE status != 'active'` |
| `>`, `<` | Greater / Less than | `WHERE login_time > '18:00'` |
| `>=`, `<=` | Greater/Less than or equal | `WHERE login_date >= '2022-05-01'` |
| `BETWEEN a AND b` | Inclusive range | `WHERE login_date BETWEEN '2022-05-01' AND '2022-05-10'` |
| `LIKE` | Pattern match | `WHERE country LIKE 'MEX%'` |
| `IN (a, b, c)` | Value in list | `WHERE department IN ('Finance', 'Sales', 'Marketing')` |
| `IS NULL` / `IS NOT NULL` | Missing value test | `WHERE ip_address IS NOT NULL` |

## Wildcards
- `%` : Matches 0 or more characters (`'192.168.%'` matches any IP in subnet).
- `_` : Matches exactly 1 character (`'East-_70'`).

## Compound Logic
- **AND**: Requires all conditions to be TRUE.
- **OR**: Requires at least one condition to be TRUE.
- **NOT**: Inverts condition truth value.

## Join Types
- `INNER JOIN`: Intersect of both tables based on join key (`ON table1.id = table2.id`).
- `LEFT JOIN`: All records from Table A, matched records from Table B.
- `RIGHT JOIN`: All records from Table B, matched records from Table A.
- `FULL OUTER JOIN`: Union of all records from both tables.

## Aggregate Functions
- `COUNT(column)`: Number of non-null rows.
- `SUM(column)`: Sum of numeric values.
- `AVG(column)`: Arithmetic mean of numeric values.
- `MAX(column)` / `MIN(column)`: Highest or lowest value.