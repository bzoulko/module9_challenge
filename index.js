// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [ "What is the Title for this project? ",
                    "What is the purpose of this project? ",
                    "What does this application do? ", 
                    "What are some key elements or highlight features in this applicaton? ",
                    "Enter the link to this application: ",                    
];
const properties = [{}];

// Load properties object for 'inquirer' to prompt each question.
var index = -1;
properties.pop();
questions.forEach(element => {
    const prop = 
    {
        type: 'input',
        message: element,
        name: 'question#' + (++index), // Make sure the answer in the answers hash is unique.
    }
    properties.push(prop);
});


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
//function init() {}
async function init() {
    
    // Prompt questions for ReadMe file.
    inquirer.prompt(properties)
    .then((data) => {

        var questionData = data;
        
        // Prompt user to Save, Quit or Restart question prompting.
        inquirer.prompt([{
            type: 'list',
            message: 'Would you like to?  [Save] [Quit] or [Restart]',
            name: 'doWhat',
            choices: ['Save', 'Quit', 'Restart'],
        }]).then((response) => {

            console.log("Response: " + JSON.stringify(response, null, '\t'));

            // Ask user what they want to do...
            switch (response.doWhat) {
                case "Save":
                    console.log("\n\nReadme Data: " + JSON.stringify(questionData, null, '\t') + "\n");
                    break;
                case "Quit":
                    console.log("\n\nDo Not Save Data.\n");
                    break;
                case "Restart":                                            
                    console.log("\n\nRestart the questions...\n");
                    init();
                    break;
            }

        });

    });

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