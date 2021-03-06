const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

function checkInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Enter a value to continue";
  }
}

///Questions in the array that will output when called
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
    //Validates that a user is actually inputting data
    validate: checkInput,
  },
  {
    type: "input",
    message: "Explain the description of your project.",
    name: "Description",
    validate: checkInput,
  },
  {
    type: "input",
    message: "Explain the Installation instructions for this app?",
    name: "Instructions",
    validate: checkInput,
  },
  {
    type: "input",
    message: "Explain the usage for this information?",
    name: "Usage",
    validate: checkInput,
  },
  {
    type: "input",
    message: "Provide the contributors for this app.",
    name: "Contribution",
    validate: checkInput,
  },
  {
    type: "input",
    message: "What test is needed to run this app?",
    name: "Test",
    validate: checkInput,
  },
  {
    type: "input",
    message: "What license is used for this app?",
    name: "License",
    choices: ["MIT", "MOZILLA", "IBM"],
    validate: checkInput,
  },

  {
    type: "input",
    message: "Enter your GitHub username",
    name: "userName",
    validate: checkInput,
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "userEmail",
    validate: checkInput,
  },
];

//file that writes the data for output
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully created README: " + fileName);
  });
}
//writes the file to to push to the generateMarkdown file when called.
function init() {
  inquirer.prompt(questions).then((answers) => {
    const response = generatorMarkdown(answers);
    console.log(answers);

    writeToFile("README.MD", response);
  });
}

//Outputs the data
init();
