"use strict";
/* Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
const magician = ['Aeiyan', 'Humaiz', 'Hadeed'];
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(`${magician} is a great maician`);
    }
}
show_magician(magician);
