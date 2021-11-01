DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department VARCHAR(30) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES department(name)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role VARCHAR(30) NOT NULL,
    manager VARCHAR(30),
    CONSTRAINT fk_employee_role FOREIGN KEY (role) REFERENCES employee_role(title),
    CONSTRAINT fk_manager FOREIGN KEY (manager) REFERENCES employee(first_name) ON DELETE SET NULL
);