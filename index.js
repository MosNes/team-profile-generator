const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const employeeArray = [
    new Engineer('Lambert Glambert','34','lambert@company.com','lamboglambo'), 
    new Manager('Bob Glombert','35','bob@company.com','100'),
    new Intern('Chip Choomba','36','chip@company.com','Night City University')
];

const { createHTML } = require('./src/html-generator');

console.log(createHTML(employeeArray));


