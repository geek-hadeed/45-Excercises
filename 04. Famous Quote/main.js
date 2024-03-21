/*   Find a quote from a famous person you admire. Print the quote and the name of its
author. Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/
// 2\12\2024
import chalk from "chalk";
let author = "Prophet Muhammad (S.A.W)";
let message = "A good man treats women with honour";
console.log(chalk.blue.bold(`${author} Said,`) + chalk.yellow.bold(` ${message}.`));
