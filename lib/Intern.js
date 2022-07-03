const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school.toLowerCase();
    }

    getSchool() {
        const school = this.school;

        //capitalize first letter of each word in School Name
        let schoolArr = school.split(' ');
        let newSchoolArr = schoolArr.map(
            str => {
                let capStr = str.slice(0,1).toUpperCase()+str.slice(1);
                return capStr;
            }
        );
        return newSchoolArr.join(' ');
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;