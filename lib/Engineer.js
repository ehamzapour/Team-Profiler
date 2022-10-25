//Importing Employee constructor
const Employee = require('./Employee');

//Engineer constructor extends Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    //Returning github from input
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;