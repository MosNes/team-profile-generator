//inquirer to capture user input, fs to write files
const inquirer = require('inquirer');
const fs = require('fs');

//classes
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

//functions
const { createHTML } = require('../src/html-generator');

//Regular Expression for email validation
const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

class Prompts {
    constructor() {
        //initializes empty array to hold each team member object
        this.employeeArray = [];
    }

    //method to write the HTML file when user is finished
    endQuestions() {
        console.log("Creating HTML File");
        let rawHTML = createHTML(this.employeeArray);
        fs.writeFile('./dist/index.html', rawHTML, err => {
            if (err) throw err;

            console.log('HTML File created as index.html, located in the dist folder.');
        });

    }

    //method to prompt user for info about the new employee
    newEmployee() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'role',
                message: 'What is the role of the new employee?',
                choices: ['Engineer', 'Intern']
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
                message: 'Please enter their email address.',
                validate: qInput => {
                    if (emailRegEx.test(qInput)) {
                        return true;
                    } else {
                        console.log(" Please enter a valid email address!");
                        return false;
                    }}
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
                    //creates either Engineer or Intern object based on the response to the Role question, then adds them to the employeeArray
                    if (response.role === 'Engineer') {
                        this.employeeArray.push(new Engineer(response.name, response.id, response.email, response.github));
                        console.log('New Engineer Added.');
                        //prompts user whether they'd like to continue adding another employee
                        this.confirmNewEmployee();
                    } else {
                        this.employeeArray.push(new Intern(response.name, response.id, response.email, response.school));
                        console.log('New Intern Added.');
                        this.confirmNewEmployee();
                    }
                }
            );
    }

    //prompts user whether they'd like to continue adding another employee
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
                    //if user responds "No", run the endQuestions function and generate the HTML
                    this.endQuestions();
                }
            });
    }

    //prompts user for the Team Manager info
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
                message: 'Please enter the email address for your Team Manager',
                validate: qInput => {
                    if (emailRegEx.test(qInput)) {
                        return true;
                    } else {
                        console.log(" Please enter a valid email address!");
                        return false;
                    }}

            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the office number for your Team Manager'
            }])
            .then(response => {
                this.employeeArray.push(new Manager(response.name, response.id, response.email, response.officeNumber));
                console.log("Team Manager Added.");
                this.confirmNewEmployee();
            });

    }
}

module.exports = Prompts;
