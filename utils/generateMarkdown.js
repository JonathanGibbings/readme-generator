// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `
      ![License Badge](https://img.shields.io/badge/license-${data.license}-green)
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseArr = ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 
  'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 
  'Boost Software 1.0', 'The Unlicense']
  let index = licenseArr.indexOf(license);
  switch (index) {
    case 0: return 'agpl-3.0';
    case 1: return 'gpl-3.0';
    case 2: return 'lgpl-3.0';
    case 3: return 'mpl-2.0';
    case 4: return 'apache-2.0';
    case 5: return 'mit';
    case 6: return 'bsl-1.0';
    case 7: return 'unlicense';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = 'None') {
    return '';
  }
  return `
  ## License
  Licensed under the [${license}](https://choosealicense.com/licenses/${renderLicenseLink(license)}/) license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    ${renderLicenseBadge(data.license)}
    # ${data.projectName}
    ## Description
    ${data.description}
    ## Table of Contents (Optional)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)

    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}

    ${renderLicenseSection(data.license)}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    
`;
}

module.exports = generateMarkdown;
