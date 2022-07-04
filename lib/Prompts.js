const inquirer = require('inquirer');

//classes
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

//functions
const { createHTML } = require('../src/html-generator');

class Prompts {
    constructor() {
        this.employeeArray = [];
    }

    endQuestions() {
        console.log("Creating HTML File");
    }

    newEmployee() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'role',
                message: 'What is the role of the new employee?',
                choices: ['Engineer','Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of the employee.'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter their Employee ID.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter their email address.'
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the Engineer's GitHub username.",
                when: ({ role }) => {
                    if (role === 'Engineer') {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the name of the Intern's school.",
                when: ({ role }) => {
                    if (role === 'Intern') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
            .then(
                response => {
                    if (response.role === 'Engineer') {
                        console.log('You chose Engineer')
                    } else {
                        console.log('You chose Intern.')
                    }
                }
            );
    }

    confirmNewEmployee() {
        inquirer
            .prompt([{
                type: 'confirm',
                name: 'confirmNewEmployee',
                message: 'Would you like to add another team member?',
                default: true
            }
            ])
            .then(response => {
                if (response.confirmNewEmployee === true) {
                    this.newEmployee();
                } else {
                    this.endQuestions();
                }
            });
    }

    startQuestions() {
        inquirer
            .prompt([{
                type: 'input',
                name: 'name',
                message: 'Please enter the name of your Team Manager'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the employee ID of your Team Manager'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the email address for your Team Manager'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the office number for your Team Manager'
            }])
            .then(response => {
                this.employeeArray.push(new Manager(response.name, response.id, response.email, response.officeNumber));
                console.log(this.employeeArray);
                console.log("Team Manager Added.");
                this.confirmNewEmployee();
            });
            
    }
}

module.exports = Prompts;
