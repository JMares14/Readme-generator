//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
//Questions for user input

inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of your application?(Required)",
    },
    {
      name: "description",
      message: "What is the description of your application?(Required)",
    },
    {
      name: "installationInstructions",
      message: "List installation instructions, if any.",
      default: "",
    },
    {
      name: "usageInfo",
      message: "Provide instructions for use, if any.",
      default: "",
    },
    {
      name: "contributions",
      message: "List your collaborators, if any.",
      default: "",
    },
    {
      name: "tests",
      message:
        "Provide test for your project and examples on how to run them, if any.",
      default: "",
    },
    {
      type: "rawlist",
      name: "license",
      message:
        "Please select a license for your aplication.",
      choices: [
        "Apache_2.0",
        "Boost_1.0",
        "CC0_1.0",
        "EPL_1.0",
        "GPLv3",
        "IPL_1.0",
        "ISC",
        "MIT",
        "MPL_2.0",
        "Perl",
        "WTFPL",
        "Zlib",
      ],
    },
    {
      name: "github",
      message:
        "Enter your github username as a form of contact for any further questions involving yous application.(Required)",
    },
    {
      name: "email",
      message:
        "Enter your github email as a form of contact for any further questions involving yous application.(Required)",
    },
  ])
  .then((answers) => {
    const template = `#${answers.title}
    ![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)<br />
    
    #Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    <a name="installation" />
    ## Installation
    ${answers.installationInstructions}
    <a name="usage" />
    ## Usage
    ${answers.usageInfo}
    
    ## Credits
    ${answers.contributions}
    <a name="tests" />
    ## Tests
    ${answers.tests}

    <a name="license" />
    ## License
    This application is covered by the ${answers.license} license. 

    ## Contact
    Github: ${answers.github}     Email: ${answers.email}
    `;
    writeToFile(title, template);
  });

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, function(err, result) {
    if(err) console.log('error', err);
    {
      console.log("Your README has been generated")
    }
  });
}

