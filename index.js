import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      name: 'title',
      message: 'The title of my project',
      type: 'input',
    },
    {
      name: 'description',
      message: 'Description of my project',
      type: 'input',
    },
    {
      name: 'installation',
      message: 'Installation',
      type: 'input',
    },
    {
      name: 'usage',
      message: 'Usage',
      type: 'input',
    },
    {
      name: 'license',
      message: 'License',
      type: 'list',
      choices: [
        'None',
        'Apache License 2.0',
        'GNU General PUBLIC License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-CLAUSE "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General License 2.0',
        'Mozilla Public License 2.0',
        'The Unlicense',
      ],
    },
    {
      name: 'contributing',
      message: 'Contributing',
      type: 'input',
    },
    {
      name: 'tests',
      message: 'Tests',
      type: 'input',
    },
    {
      name: 'questions',
      message: 'Questions',
      type: 'input',
    },
    {
      name: 'email',
      message: 'What is your e-mail',
      type: 'input',
    },
    {
      name: 'github',
      message: 'What is your github name',
      type: 'input',
    },
  ])
  .then((response) => {
    const { title, description, installation, usage, license, contributing, tests, questions, email, github } = response;
    const data = `
# ${title}
## ${description}
## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${tests}
## Questions
${questions}
GitHub profile - https://github.com/${github}
For more information contact me at ${email}.
`;
    const fileName = `${title.toLowerCase().split(' ').join('')}_ReadMe.md`;
    fs.writeFile(fileName, data, (err) => (err ? console.log(err) : console.log('Success!')));
  });
