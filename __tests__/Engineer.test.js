const Engineer = require ('../lib/Engineer');

//test engineer class constructor
test('create an Engineer Object with name, ID, email address, and github username', () => {
    const engineer = new Engineer('bob','42','bob@company.com','DevBob');

    console.log(engineer);

    expect(engineer).toEqual(expect.any(Object));
    expect(engineer.name).toEqual('bob');
    expect(engineer.id).toEqual('42');
    expect(engineer.email).toEqual('bob@company.com');
    expect(engineer.github).toEqual('DevBob');
});

test('gets engineer role', () => {
    const engineer = new Engineer('bob','42','bob@company.com','DevBob');

    expect(engineer.getRole()).toEqual('Engineer');
});