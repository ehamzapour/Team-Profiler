const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Elham', 20, 'ehamzapour@gmail.com', 7);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Elham', 20, 'ehamzapour@gmail.com', 7);
    expect(manager.getRole()).toEqual("Manager");
});