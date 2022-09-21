// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "prompt",
      message: "Select answer:",
      choices: [
        "My Selection!",
        "Your Selection!"
      ]
    },
    {
      type: "input",
      name: "prompt",
      message: "This is my selection Choice.",
      choices: ["Selection"]
    }
  ];
  


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}
async function init() {
    const collections = (await inquirer.prompt(questions)).collections;
    console.log("collections:", collections);
    const outPath = await inquirer.prompt([
      {
        type: "input",
        name: "outPath",
        default: process.argv[1],
        message: "Insert the output path"
      }
    ]).outPath;
    console.log(outPath);
  }

// Function call to initialize app
init();




// const prompt = require('prompt');

// const properties = [
//   {
//     name: 'username',
//     validator: /^[a-zA-Z\s-]+$/,
//     warning: 'Username must be only letters, spaces, or dashes'
//   },
//   {
//     name: 'password',
//     hidden: true
//   }
// ];

// prompt.start();

// prompt.get(properties, function (err, result) {
//   if (err) {
//     return onErr(err);
//   }
//   console.log('Command-line input received:');
//   console.log('  Username: ' + result.username);
//   console.log('  Password: ' + result.password);
// });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }