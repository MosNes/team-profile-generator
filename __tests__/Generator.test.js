const Generator = require('../lib/Generator');

test('create Generator object with an empty employee array', () => {
    generator = new Generator;

    console.log(generator.employeeArray);
    expect(generator.employeeArray).toEqual(expect.any(Array));
});