const Manager = require ('../lib/Manager');

//test manager class constructor
test('create an Manager Object with name, ID, email address, and office number', () => {
    const manager = new Manager('bob','42','bob@company.com','100');

    console.log(manager);

    expect(manager).toEqual(expect.any(Object));
    expect(manager.name).toEqual('bob');
    expect(manager.id).toEqual('42');
    expect(manager.email).toEqual('bob@company.com');
    expect(manager.officeNumber).toEqual('100');
});

test('gets manager role', () => {
    const manager = new Manager('bob','42','bob@company.com','100');

    console.log(manager);

    expect(manager.getRole()).toEqual('Manager');
});