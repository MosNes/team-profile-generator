class Employee {
    constructor (name, id, email){
        //convert name input to lowercase
        this.name = name.toLowerCase();
        this.id = id;
        this.email = email;
    }

    getName() {
        const name = this.name;

        //capitalize first letter of each word
        let nameArr = name.split(' ');
        let newNameArr = nameArr.map(
            str => {
                let capStr = str.slice(0,1).toUpperCase()+str.slice(1);
                return capStr;
            }
        );
        return newNameArr.join(' ');
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;