// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      name: 'Title',
      message: 'What is the title of your application?(Required)',
    },
    {
        name: 'Description',
        message: 'What is the description of your application?(Required)',
      },
      {
        name: 'Installation-Instructions',
        message: 'List installation instructions, if any.',
        default: ""
      },
      {
        name: 'Usage-Info',
        message: 'Provide instructions for use, if any.',
        default: ""
      },
      {
        name: 'Contributions',
        message: 'List your collaborators, if any.',
        default: ""
      },
      {
        name: 'Tests',
        message: 'Provide test for your project and examples on how to run them, if any.',
        default: ""
      },
      {
        type: 'checkbox',
        name: 'License',
        message: 'Please select a license for your aplication. Select all that apply.',
        choices: ['MIT','GNU GPLv3','Apache','ISC','Boost Software','BSD 3-Clause','Creative Commons','Eclipse Public', 'Mozilla Public', 'Open Database', 'Perl', 'WTFPL'],
      },
      {
        name: 'Github',
        message: 'Enter your github username as a form of contact for any further questions involving yous application.(Required)',
      },
      {
        name: 'Email',
        message: 'Enter your github email as a form of contact for any further questions involving yous application.(Required)',
      },

  ])
  .then(answers => {
    console.info('Answer:', answers);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
