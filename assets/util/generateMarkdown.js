// Returns a badge for the license if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `
![License Badge](https://img.shields.io/badge/license-${license}-green)
    `
  }
}

// Returns  the link to the license information if there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseArr = ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3',
  'MozillaPublic2.0', 'Apache2.0', 'MIT',
  'BoostSoftware1.0', 'TheUnlicense', 'None']
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

// Returns a license section if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
  return `
## License
Licensed under the [${license}](https://choosealicense.com/licenses/${renderLicenseLink(license)}/) license.
  `;
  }
}

// Returns the formatted markdown
function generateMarkdown(data) {
  console.log(data);
  return `
${renderLicenseBadge(data.license)}
# ${data.projectName}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
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
If you have any questions, please contact us at [GitHub/${data.githubUser}](https://github.com/${data.githubUser}/),
or email us at ${data.email}.
`;
}

module.exports = generateMarkdown;
