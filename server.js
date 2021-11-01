const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./config/connection');

// Greeting fo the app
console.log('EMPLOYEE MANAGER');

db.query(`SOURCE db/db.sql;`, (err, result) => {
    if (err) throw err;
    console.log('Database connected.');
});

// function to display departments table
function departments() {
    const mysql = `SELECT * FROM department`;
    db.query(mysql, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        return data;
    });
};

// function to display employees table
function employees() {
    const mysql = `SELECT * FROM employee`;
    db.query(mysql, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        return data;
    });
};

// function to display employee roles table
function roles() {
    const mysql = `SELECT * FROM employee_role`;
    db.query(mysql, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        return data;
    });
};

// function to add a department
function addDepartment() {
    inquirer.prompt(
        {
            type: "input",
            name: "title",
            message: "What is the name of the department?"
        }
    )
    .then(data => {
        const mysql = `
        INSERT INTO department (title)
        VALUES 
            ("${data.title}")`;
        db.query(mysql,  (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json('Department added!')
        });
    });
    init();
};

// function to add an employee role
function addRole() {
    inquirer.prompt(
        {
            type: "input",
            name: "title",
            message: "What is the name of the employee role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salay of this role?"
        },
        {
            type: "list",
            name: "department",
            message: "What department is this role in?"
        }
    )
    .then(data => {
        const mysql = `
        INSERT INTO employeee_role (title, salary, department_id)
        VALUES 
            ("${data.title}", "${data.salary}", "${data.department}")`;
        db.query(mysql,  (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json('Employee role added!')
        });
    });
    init();
};

// function to add an employee
function addEmployee() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'first',
            message: 'What is the first name?'
        },
        {
            type: 'input',
            name: 'last',
            message: 'What is the last name?'
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: [roles()]
        },
        {
            type: "list",
            name: "manager",
            message: "Who is the employee's manager?",
            choices: ["None",]
        }
    )
    .then(data => {
        const mysql = `
        INSERT INTO employee (first_name, last_name, role, manager)
        VALUES 
            ("${data.first}", "${data.last}", "${data.role}", "${data.manager}")`;
        db.query(mysql,  (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json('Employee added!')
        });
    });
    init();
};

// function to update an employee role
function updateEmployee() {
    inquirer.prompt(
        {
            type: "list",
            name: "update",
            message: "What would you like to update?",
            choices: ["first name", "second name", "role", "manager"]
        }
    )
    .then(data => {
        if (data === "role") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "role",
                    message: "What would you like the employee's new role to be?"
                }
            )
            .then(data => {
                const mysql = `
                INSERT INTO employee (role)
                VALUES
                    ("${data.role}")`;
                db.query(mysql, (err, result) => {
                    if (err) throw err;
                    res.json('Employee updated!')
                });
            });
        } else if (data === "manager") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "manager",
                    message: "Who would you like the employee's manager to be?"
                }
            )
            .then(data => {
                const mysql = `
                INSERT INTO employee (manager)
                VALUES
                    ("${data.manager}")`;
                db.query(mysql, (err, result) => {
                    if (err) throw err;
                    res.json('Employee updated!')
                });
            });
        }
    });
    init();
};

// intial function to run at start of program
function init() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'init',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all employee roles',
                'View all employees',
                'Add a department',
                'Add a employee role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    )
    .then(data => {
        if (data === 'View all departments') {
            console.table(departments);
            init();
        } else if (data === 'View all employee roles') {
            console.table(roles);
            init();
        } else if (data === 'View all employees') {
            console.table(employees);
            init();
        } else if (data === 'Add a department') {
            addDepartment();
        } else if (data === 'Add a employee role') {
            addRole();
        } else if (data === 'Add an employee') {
            addEmployee();
        } else if (data === 'Update an employee role') {
            updateEmployee();
        }
    });
};

init();