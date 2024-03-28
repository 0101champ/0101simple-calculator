#! /usr/bin/env node
//simple calculator
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modules"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modules") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else
    console.log("choose the correct operator");
