#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t Welcome to Code With Aiman-CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5)",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You have guess a correct number");
}
else {
    console.log("Sorry, you have guess a wrong number");
}
