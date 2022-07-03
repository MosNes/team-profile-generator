const Intern = require ('../lib/Intern');

test('create an Intern Object with name, ID, email address, and school', () => {
    const intern = new Intern('bob','42','bob@company.com','Bob University');

    console.log(intern);

    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual('bob');
    expect(intern.id).toEqual('42');
    expect(intern.email).toEqual('bob@company.com');
    expect(intern.school).toEqual('bob university');
});

test('gets intern school with each word capitalized', () => {
    const intern = new Intern('bob','42','bob@company.com','bob university');

    expect(intern.getSchool()).toEqual('Bob University');
});

test('gets intern role', () => {
    const intern = new Intern('bob','42','bob@company.com','bob university');

    expect(intern.getRole()).toEqual('Intern');
});