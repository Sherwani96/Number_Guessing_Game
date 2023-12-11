#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { welcome } from "./welcome.js";
await welcome();
let questionTitle = chalk.red(`Let's Guess a number between 1 to 4. You'll have 3 attempts\n`);
console.log(questionTitle);
let numTries = 3;
let randNum = Math.floor(Math.random() * (5 - 1) + 1);
let actualAnswer = randNum;
while (numTries > 0) {
    const answer = await inquirer.prompt([
        {
            name: "yourGuess",
            type: "number",
            message: "Enter your Guess Number:",
        }
    ]);
    let randNum = Math.floor(Math.random() * (5 - 1) + 1);
    let actualAnswer = randNum;
    if (answer.yourGuess === actualAnswer) {
        let congrats = chalk.bgGreen("Congratulations! You Guessed the Right Number");
        console.log(congrats);
        if (numTries === 3) {
            let succ1 = chalk.bgMagenta("You are successfull in First attempt. Your score is 1500/1500");
            console.log(succ1);
        }
        else if (numTries === 2) {
            let succ2 = chalk.bgCyan("You are successfull in Second attempt. Your score is 1000/1500");
            console.log(succ2);
        }
        else if (numTries === 1) {
            let succ3 = chalk.bgRed("You are successfull in Third attempt. Your score is 500/1500");
            console.log(succ3);
        }
        break;
    }
    else {
        let resp1 = chalk.cyan("Alas!! You Guessed the Wrong Number");
        console.log(resp1);
        let resp2 = chalk.magenta(`The random number was ${randNum}`);
        console.log(resp2);
        let resp3 = chalk.yellow(`You have ${numTries - 1} Tries left`);
        console.log(resp3);
    }
    numTries--;
}
