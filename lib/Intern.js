const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }
// Overridden to return 'Intern'
    getRole() {
        return `${userInput.team_type}`
    }
}
