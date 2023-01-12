const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school= school;
    }
// Overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }

}
  // this exports the module to make it available for index.js
  module.exports = Intern;