"use strict";
/*  Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
const magician = ['Aeiyan', 'Humaiz', 'Hadeed'];
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let magician of magicians) {
        console.log(`${magician} is a great magician`);
    }
}
show_magician(magician);
make_great(magician);
