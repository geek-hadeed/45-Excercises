/*  Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */


const magicians: string[] = ["Aafiyan", "Dawood", "Ali"];

function show_magicians(magicians: string[]) : void 
{
    // for(let magician of magicians)
    // {
    //     console.log(magician);
    // };

    magicians.forEach(magicians => {
        console.log(magicians)
    });

}

function make_great(magicians: string[]) : void
{
    // for(let magician of magicians)
    // {
    //     console.log(`${magician} The Great `)
    // }


    magicians.forEach(magicians => {
        console.log(`${magicians} The Great `)
    })
}


console.log("Original Magicians:");
show_magicians(magicians);

console.log("\n\nModified Magicians:");
make_great(magicians);