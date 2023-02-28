import inquirer from 'inquirer';

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
      name: 'table',
      message: 'Table of Contents',
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
  ])
  .then((response) => {
    console.log(response);
  });
