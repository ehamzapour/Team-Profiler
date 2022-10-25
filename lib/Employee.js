//Employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returning name from input
    getName () {
        return this.name
    }

    // Returning id from input
    getId () {
        return this.id
    }

    // Returning email from input
    getEmail () {
        return this.email
    }

}

module.exports = Employee;