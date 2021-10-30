INSERT INTO department (name)
VAlUES
    ('accounting'),
    ('human resources'),
    ('sales'),
    ('engineering'),
    ('legal');

INSERT INTO employee_role (title, salary, department_id)
VAlUES
    ('accountant', '75000', 1),
    ('benefits manager', '55000', 2),
    ('safety manager', '55000', 2),
    ('employee development', '55000', 2),
    ('salesperson', '50000', 3),
    ('sales manager', '70000', 3),
    ('engineering manager', '75000', 4),
    ('engineer', '70000', 4),
    ('lawyer', '80000', 5),
    ('legal assistant', '70000', 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VAlUES
    ('john', 'doe', 6, NULL),
    ('jane', 'doe', 5, 1),
    ('henry', 'doe', 7, NULL),
    ('peter', 'doe', 8, 3),
    ('james', 'doe', 8, 3),
    ('dwight', 'doe', 5, 1),
    ('oscar', 'doe', 1, NULL),
    ('mike', 'doe', 3, NULL),
    ('pam', 'doe', 5, 1),
    ('andy', 'doe', 9, NULL),
    ('merideth', 'doe', 9, NULL),
    ('angela', 'doe', 10, NULL),
    ('ryan', 'doe', 2, NULL),
    ('kevin', 'doe', 1, NULL);