//classes for testing
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

//creates the 3rd element in each employee card based on the employee role
const createSpecialBox = (employee) => {
    let role = employee.getRole();
    
    if (role === 'Manager'){
        return `Office Number: ${employee.officeNumber}`;
    } else if (role === 'Intern') {
        return `School: ${employee.getSchool()}`
    } else {
        return `GitHub: <a href= "https://github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a>`
    }
};

//creates the role subtitle element in each employee card based on the employee role
const createRoleElement = (employee) => {
    let role = employee.getRole();

    if (role === 'Manager'){
        return `
        <span class="icon-text pr-3">
            <span class="icon">
                <i class="fa-brands fa-black-tie"></i>
            </span>
        </span>
        Manager
        `;
    } else if (role === 'Intern') {
        return `
        <span class="icon-text pr-3">
            <span class="icon">
                <i class="fa-solid fa-mug-hot"></i>
            </span>
        </span>
        Intern
        `
    } else {
        return `
        <span class="icon-text pr-3">
            <span class="icon">
                <i class="fa-solid fa-code"></i>
            </span>
        </span>
        Engineer
        `
    }
};

//creates an employee card from the given employee
const createEmployeeCard = (employee) => {
    return `
    <section class="column is-3-widescreen is-4-desktop">
    <div class="card">
        <div class="card-header">
            <p class="card-header-title has-background-primary has-text-white is-size-3">${employee.name}</p>
        </div>
        <div class="card-header">
            <p class="card-header-title has-background-primary has-text-white is-size-4">
                ${createRoleElement(employee)}</p>
        </div>
        <div class="card-content p-6">
            <div class="box m-1">ID: ${employee.id}</div>
            <div class="box m-1">Email: <a href = "mailto: ${employee.email}">${employee.email}</a></div>
            <div class="box m-1">${createSpecialBox(employee)}</div>
        </div>
    </div>
</section>
    `
};



// console.log(createEmployeeCard(new Engineer('Lambert Glambert','34','lambert@company.com','lamboglambo')));