// runs the aplication
// External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// Internal modules
// This creates the readme html structure template
const classes = require('./lib/classes.js');


// TODO: Create an array of questions for user input
// Installation, Usage 
// License, Contributing, Tests, and Questions.
inquirer 
    .prompt([
// User input team manager
{
    type: "input",
    message: "Who is the team manager?: ",
    name: "manager",
},
// User input team manager's email
{
    type: "input",
    message: "What is the team manager's email?: ",
    name: "manager_email",
},
// User input team manager's office number
{
    type: "input",
    message: "What is the team manager's office number?:",
    name: "manager_office",
},
// User input for type of member to add
{
    type: "list",
    message: "Which type of team member would you like to add?: ",
    name: "team_type",
    choices: ["Intern", "Engineer", "I don't want to add more team members"]
},
// User Input for team member name
{
    type: "input",
    message: "What is your team member's name?: ",
    name: "team_name",
},
// User Input for team member id number
{
    type: "input",
    message: "What is your team member's id number?: ",
    name: "team_id",
},
// User Input for team member email
{
    type: "input",
    message: "What is your team member's email?: ",
    name: "team_email",
},
// User Input for team member GitHub username
{
    type: "input",
    message: "What is your team member's GitHub username?: ",
    name: "github_username",
},
// User input for type of member to add
{
    type: "list",
    message: "Which type of team member would you like to add?: ",
    name: "team_type",
    choices: ["Intern", "Engineer", "I don't want to add more team members"]
},

]).then((data) => {
    // README.md is the name of all files
    const filename = 'classes.js';
    fs.writeFile(filename, classes(data), (err) => 
        err ? console.log(err) : console.log('Completed writing to file')
    );
});

// Function call to initialize app
function init(){
};
    