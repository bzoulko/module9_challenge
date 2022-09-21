// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [ "What is the title of this project? ",
                    "What is the purpose of this application / what does it do? ",
                    "What are some key elements in this applicaton / highlight features? "
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}
function init() {
    inquirer.prompt(function() {

        let rtnProps = [{}];
    
        console.log("Running Init");
        for (let x = 0; x < questions.length; x++) {
            let eachQuest = {
                type: "input",
                name: "prompt",
                message: questions[x],
            };
            console.log("eachQuest.message: " + eachQuest.message);

            rtnProps.push(eachQuest);
        }
    
        console.log("rtnProps: " + rtnProps.length);
    
        return(rtnProps);
    
    });
    console.log("Finished!");
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