// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      default: 'Project Title',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      message: 'Please provide the name of the repository you use on GitHub for your project (case-sensitive)',
      name: 'repo',
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
      name: 'contributions',
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
      choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla2.0', 'Apache2.0', 'MIT', 'Boost1.0', 'Unlicense'],
      },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide an email adress users may use to contact you.',
    },
  ];
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
async function init() {
  try {
      const answers = await inquirer.prompt(questions);
      const markdown = generateMarkdown(answers);
      console.log(markdown);

      await writeFileAsync('README.md', markdown);
  } catch (error) {
      console.log(error);
  }
};

// Function call to initialize app
init();







