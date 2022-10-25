//Importing Employee constructor
const Employee = require('./Employee');

//Intern constructor extends Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    //Returning school from input
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;