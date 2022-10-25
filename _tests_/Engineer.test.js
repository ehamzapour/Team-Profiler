const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Elham', 20, 'ehamzapour@gmail.com', 'ehamzapour');
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Elham', 20, 'ehamzapour@gmail.com', 'ehamzapour');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Elham', 20, 'ehamzapour@gmail.com', 'ehamzapour');
    expect(engineer.getRole()).toEqual("Engineer");
});