// TODO: Create a function to generate markdown for README
const classes = userInput => {
    return`
    
    ${userInput.manager}
    ${userInput.manager_email}
    ${userInput.manager_office}

    ${userInput.team_type}
    ${userInput.team_name}
    ${userInput.team_id}
    ${userInput.team_email}
    ${userInput.github_username}

    ${userInput.team_type}
  `
  }
  
  // this exports the module to make it available for index.js
  module.exports = classes;