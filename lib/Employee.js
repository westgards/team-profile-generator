class Employee {
    constructor(name, id, email) {
        this.name =name;
        this.id = id;
        this.email =email;
    }

    getName(){

        return this.name;
    }

    getId(){
        return `${userInput.id}`
    }

    getEmail(){
        return `${userInput.email}`
    }
// returns Employee type
    getRole(){
        return `${userInput.team_type}`
    }
}

  // this exports the module to make it available for index.js
  module.exports = Employee;