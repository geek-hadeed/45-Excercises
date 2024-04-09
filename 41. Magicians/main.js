"use strict";
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
const magician = ["Aafiyan", "Dawood", "Ali"];
function show_magicians(magicians) {
    // for(let magician of magicians)
    // {
    //     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    // };
    magician.forEach(magician => {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    });
}
show_magicians(magician);
