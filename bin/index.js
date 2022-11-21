#! /usr/bin/env node
process.argv;
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import inquirer from "inquirer";
// Animation starts
let points = 0;
const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));
const welcome = async function () {
    const rainbow = chalkAnimation.rainbow("Guess my number 🫣\n");
    await sleep();
    rainbow.stop();
    console.log(`${chalk.blueBright("Guess a number")} \nIf guess is Correct: ${chalk.blue("+10 Points")}\n`);
};
const handleAnswer = async function (guess) {
    let num = Math.round(Math.random() * 10);
    if (guess === num) {
        console.log("Correct Guess: 🥳 You WON");
        points += 10;
        console.log(`You earned +10 points\nToal Score: ${chalk.greenBright(points)}`);
        startGame();
    }
    else {
        console.log("Wrong guess: 🤮 You LOST");
    }
};
const startGame = async function () {
    const guessNum = await inquirer.prompt({
        name: "userGuess",
        type: "number",
        message: "⇨ Guess a number between 0 and 10:",
    });
    handleAnswer(guessNum.userGuess);
};
console.clear();
const render = async function () {
    await welcome();
    await startGame();
};
render();
