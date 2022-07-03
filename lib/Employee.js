class Employee {
    constructor (name, id, email){
        //convert name input to lowercase
        this.name = name.toLowerCase();
        this.id = id;
        this.email = email;
    }

    getName() {
        const name = this.name;
        //capitalize first letter of name
        return name.slice(0,1).toUpperCase()+name.slice(1);
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;