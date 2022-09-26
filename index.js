// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to add installation instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are your installation instructions?',
        when: ({confirmInstallation}) => confirmInstallation
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to add usage instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are your usage instructions?',
        when: ({confirmUsage}) => confirmUsage
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 
            'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 
            'Boost Software 1.0', 'The Unlicense', 'None'],
        loop: false
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to add contributing instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What are your contributing instructions?',
        when: ({confirmContributing}) => confirmContributing
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to add test instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions?',
        when: ({confirmTests}) => confirmTests
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your Github user name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a valid username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What do you want to name this file? Default: ',
        default: 'README'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);

}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
    .then(data => {
        console.log(data);
        // return generateMarkdown(data);
    });
