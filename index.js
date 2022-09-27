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
        choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 
            'MozillaPublic 2.0', 'Apache2.0', 'MIT', 
            'BoostSoftware 1.0', 'TheUnlicense', 'None'],
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
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created.');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    .then(data => writeToFile(data));
