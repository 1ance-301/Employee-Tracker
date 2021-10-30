const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


// tables to be displayed
let departments = 'Hello, World!';
let roles = 'Hello, World!';
let employees = 'Hello, World!';

// function to add a department
function addDepartment() {
    
};

// function to add an employee role
function addRole() {

};

// function to add an employee
function addEmployee() {

};

// function to update an employee role
function updateEmployee() {

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