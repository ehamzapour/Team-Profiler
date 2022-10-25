//Importing Employee constructor
const Employee = require('./Employee');

//Manager constructor extends Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    //Returning office number from input
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;