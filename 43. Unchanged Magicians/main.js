"use strict";
/* Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
const magicians = ["Aafiyan", "Dawood", "Ali"];
function copyArray(magician1) {
    return [...magician1];
}
function show_magicians(magicians) {
    // for(let magician of magicians)
    // {
    //     console.log(magician);
    // };
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]}, The Great`;
    }
    // magicians.forEach(magicians => {
    //     console.log(`${magicians} The Great `)
    // })
}
const copyMagcians = copyArray(magicians);
make_great(copyMagcians);
console.log("This Is My Original array");
show_magicians(magicians);
console.log("\n\n This Is My Modified Copy Of The Array");
show_magicians(copyMagcians);
