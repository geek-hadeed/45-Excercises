"use strict";
/* Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var Alien_color = "green";
if (Alien_color == "green") {
    console.log(chalk_1.default.green("Ooh Yeah I Earned 5 points"));
}
else {
    console.log("No Output");
}
