// TODO: Include packages needed for this application
const inquirer = require("inquirer");
var readline = require('readline');
const printCyanText = (text) => `\x1b[36m${text}\x1b[0m`; // Barrowed logic idea from Bootcamp - Week(5) - Day(3) - 08-Stu_for-of/Unsolved/index.js


// TODO: Create an array of questions for user input
const questions = [ "What is the Title for this project? ",
                    "What is the purpose of this project? ",
                    "What does this application do? ", 
                    "What are some key elements or highlight features in this applicaton? ",
                    "Enter the link to this application: ",                    
];
const properties = [{}];


/* ***************************************************************
    Load properties object for 'inquirer' to prompt each question.
****************************************************************** */
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
/* ******************************************************
    Create ReadMe.md file from data entered via terminal.
********************************************************* */
async function writeToFile(fileName, data) {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}


// TODO: Create a function to initialize app
/* ******************************************************************
    Initialize questionair for user to start building ReadMe.md file.
********************************************************************* */
async function init() {
    
    // Prompt questions for ReadMe file.
    inquirer.prompt(properties)
    .then((data) => {

        var questionData = data;
        
        // Prompt user to Save, Quit or Restart question prompting.
        inquirer.prompt([{
            type: 'list',
            message: 'Would you like to?  [' + printCyanText("Save") + '] [' + printCyanText("Quit") + '] or [' + printCyanText("Restart") + ']',
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


/* *****************************************************************
    Wrote function to capture multiple line entry from the terminal.
******************************************************************** */
function readMultipleLines(){
    var input = [];

    // Notify user to enter multiple lines of text and CTRL+C to end text entry.
    console.log("\n\nPress " + printCyanText("CTRL+C") + " to end text entry, enter mulitple lines.\n");

    // Create line reading variable.
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Start command line prompt.
    rl.prompt();

    // Capture each line of new text.
    rl.on('line', function (cmd) {
        input.push(cmd);
    });

    // When CTRL+C is encountered, close line capturing and return text entry.
    rl.on('close', function (cmd) {
        return(input.join('\n'));
        process.exit(0);
    });

}

// Function call to initialize app
init();

// Function call to initialize app
readMultipleLines();