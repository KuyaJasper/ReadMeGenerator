// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'ProjectTitle',
        message:'What would you like your project to be called?'
    },
    {
        type: 'input',
        name: 'Description',
        message:'Provide a brief description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message:'Choose a Lincese you would like to use, then press Enter.',

        choices: ["MIT","Apache 2.0","Mozilla Public License 2.0", "I don't want to use a license."]
    },
    {
        type: 'input',
        name: 'Github',
        message:'What is your Github user name??'
    },
    {
        type: 'input',
        name: 'Email',
        message:'What is your Email address?'
    },
    {
        type: 'input',
        name: 'Installation',
        message:'Describe any necessary program installations.'
    },
    {
        type: 'input',
        name: 'Usage',
        message:'Input how to invoke application'
    },
    {
        type: 'input',
        name: 'Test',
        message:'Input any test instructions'
    },
    {
        type: 'input',
        name: 'Contributions',
        message:'Describe any contribution guidelines.'
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err) throw err;
    });
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers))})
    // .then((data) => writeToFile('License.md', generateLicense(data)))
    .then((err) => err ? console.log("There was an error", err) : console.log('Successfully created README!')
    );
};

// Function call to initialize app
init();
