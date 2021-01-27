// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe the installation process for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use of your project.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines for your project. How can other developers contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter instructions for how to run tests for your project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose licensing information for your project.',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ]);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  
    console.log("Success! Your README.md file has been generated")
});
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {}
const init = () => {
    promptUser().then((answers) => {
      try {
        const md = generateMd(answers);
        fs.writeFileSync('readme.md', md);
        console.log('Successfully wrote to readme.md');
      } catch (error) {
        console.log(error);
      }
    });
  };

// Function call to initialize app
init();







