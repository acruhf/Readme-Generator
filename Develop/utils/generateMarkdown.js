
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## **Description**
  
  ${data.description}
  
  
  ***
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Testing](#tests)
  * [Contributions](#contributions)
  * [License](#license)
  * [Questions](#Questions)
  
  
  ## **Installation**
  
  ${data.installation}
  
  ***
  
  ## **Usage**
  
  ${data.usage}
  
  ***
  
  ## **Contributions**
  
  ${data.contributions}
  
  ***
  
  ## **Tests**
  
  ${data.tests}
  
  ***
  
  ## **License**
  
  
    ![GitHub](https://img.shields.io/badge/license-${data.license}-purple?style=plastic)
  
  ***
  
  ## **Questions**
  
  
  [GitHub](https://www.github.com/${data.gitname})
  
  
  Questions? Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
