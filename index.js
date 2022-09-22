// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const fileName = "./NewReadMe.md"
var readline = require('readline');
const printCyanText = (text) => `\x1b[36m${text}\x1b[0m`; // Barrowed logic idea from Bootcamp - Week(5) - Day(3) - 08-Stu_for-of/Unsolved/index.js


// TODO: Create an array of questions for user input
const questions = [ "Enter Your-Project-Title? ",
                    "What was your motivation? ",
                    "Why did you build this project? ",
                    "What problem does it solve? ", 
                    "What did you learn?",
                    "What Key elements to your application, delimit them by an astrisk?",                    
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
        name: 'question' + (++index), // Make sure the answer in the answers hash is unique.        
    }
    properties.push(prop);
});


// TODO: Create a function to write README file
/* ******************************************************
    Create ReadMe.md file from data entered via terminal.
********************************************************* */
async function writeToFile(data) {
    // console.log("write: " + data);
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );    
}

// async function appendToFile(data) {
//     console.log("append: " + data);
//     fs.appendFileSync(fileName, "\n" + data, (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );
// }


// /*
//     Determine when the file exists in the given path.
// */
// async function exists (path) {  
//     try {
//         await fs.access(path)
//         return true
//     } catch {
//         return false
//     }
// }


// TODO: Create a function to initialize app
/* ******************************************************************
    Initialize questionair for user to start building ReadMe.md file.
********************************************************************* */
async function init() {
    console.clear();
    
    // Prompt questions for ReadMe file.
    console.log("\n\t***************************************" );
    console.log("\n\t**   " + printCyanText("Start building ReadMe.md File") + "   **" );
    console.log("\n\t***************************************\n" );
    await inquirer.prompt(properties)
    .then((data) => {

        // Prompt user to Save, Quit or Restart question prompting.
        inquirer.prompt([{
            type: 'list',
            message: '\n\nWould you like to?  [' + printCyanText("Save") + '] [' + printCyanText("Quit") + '] or [' + printCyanText("Restart") + ']',
            name: 'doWhat',
            choices: ['Save', 'Quit', 'Restart'],            
        }]).then((response) => {

            // Ask user what they want to do...
            switch (response.doWhat) {
                case "Save":
                    const dataOut = 
                    "# " + data.question0 + "\n" +
                    " " + data.question1 + "\n\n" +
                    "## " + data.question2 + "\n" +
                    " " + data.question3 + "\n\n" +
                    "### " + data.question4 + "\n" +
                    " " + data.question5.replace('* ', '\n* ');
                    writeToFile(dataOut);
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
async function readMultipleLines(quest){
    var input = [];

    // Notify user to enter multiple lines of text and CTRL+C to end text entry.
    console.log("\n\tPress " + printCyanText("CTRL+C") + " to end text entry, enter mulitple lines.");
    console.log("\n" + quest + "\n");

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
