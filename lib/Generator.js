const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const { createHTML } = require('../src/html-generator');

//test array
// const employeeArray = [
//     new Engineer('Lambert Glambert','34','lambert@company.com','lamboglambo'), 
//     new Manager('Bob Glombert','35','bob@company.com','100'),
//     new Intern('Chip Choomba','36','chip@company.com','Night City University')
// ];

class Generator {

    initializeGenerator() {
        //initializes empty array to contain all employee class instances
        const employeeArray = [];

        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'Please enter the name of your Team Manager'
            },
            {
                type: 'text',
                name: 'employeeId',
                message: 'Please enter the employee ID of your Team Manager'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Please enter the email address for your Team Manager'
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'Please enter the office number for your Team Manager'
            })
            .then(({ response }) => {
                employeeArray.push(new Manager(response.name, response.id, response.email, response.officeNumber));
                console.log(employeeArray);
            });
        }
}

module.exports = Generator;

