const Employee = require('../lib/Employee');

//test employee class constructor
test('create an Employee Object with name, ID, and email address', () => {
    const employee = new Employee('bob','42','bob@company.com');

    console.log(employee);

    expect(employee).toEqual(expect.any(Object));
    expect(employee.name).toEqual('bob');
    expect(employee.id).toEqual('42');
    expect(employee.email).toEqual('bob@company.com');
});