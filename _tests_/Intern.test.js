const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Elham', 20, 'ehamzapour@gmail.com', 'Vanderbilt');
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Elham', 20, 'ehamzapour@gmail.com', 'Vanderbilt');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Elham', 20, 'ehamzapour@gmail.com', 'Vanderbilt');
    expect(intern.getRole()).toEqual("Intern");
});