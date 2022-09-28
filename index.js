// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: answer => {
            if (answer) {
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
        message: 'What is your project description?',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Please enter a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are your usage instructions?',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
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
        type: 'input',
        name: 'contributing',
        message: 'What are your contributing instructions?',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions?',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your Github user name?',
        validate: answer => {
            if (answer) {
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
        message: 'What is your email address?',
        validate: answer => {
            if (answer) {
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

const dummy = {
    projectName: 'README-Generator',
    description: "An application that runs on the command line and generates a README.md based off of the user's answers.",
    installation: 'Run npm install inquirer@8.2.4 from the command line in the folder you have the index.js file in.',
    usage: 'Run the application from the command line in the folder index.js is in. Run it with the command node index.js.',
    license: 'MIT',
    contributing: 'There are currently no plans to allow contributions to this project at this time.',
    tests: 'There is currently no testing functionality included in this application.',
    githubUser: 'JonathanGibbings',
    email: 'username@gmail.com'
  }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
// init()
//     .then(data => console.log(data))
//     .then(answers => generateMarkdown(answers))
//     .then(data => writeToFile(data));

writeToFile(generateMarkdown(dummy));
