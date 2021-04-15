// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]`
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === "MIT"){
    return `(https://opensource.org/licenses/MIT)`
  }
  else if (license === "I don't want to use a license."){
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT") {
    return `# License`
  }
  else if (license ===  "I don't want to use a license."){
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
`# ${data.ProjectTitle}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

# Desctiption
${data.Description}

# Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

# Installation
${data.Installation}

# Usage
${data.Usage}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}


# Contributions
${data.Contributions}

# Tests
${data.Test}

# Questions

Reach out at:

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.Github})

[![Email badge](https://img.shields.io/badge/Email-${data.Email}-red.svg)](mailto:${data.Email})

`);

}

function generateLicense(data) {
  console.log(data);
  return `# ${data.date}, ${data.name}.

`;
}


module.exports = generateMarkdown
 