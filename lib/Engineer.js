const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, role, github_username) {
        super(name, id, email);
        this.github_username= github_username;
    }
// Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }
    getGithub(){
        return this.github_username;
    }
}

  // this exports the module to make it available for index.js
  module.exports = Engineer;