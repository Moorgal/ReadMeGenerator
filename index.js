import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      name: 'user',
      message: 'how are you',
      type: 'input',
    },
  ])
  .then((response) => {
    console.log(response);
  });
