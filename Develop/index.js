// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is your project title?", "How would you describe your project?", "How do users install your project?,"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const generateMd = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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



const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information details for your project',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines for your project',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions for your project',
    },
    //License Badge
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);



