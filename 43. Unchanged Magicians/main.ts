/* Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

const magicians: string[] = ['Aeiyan','Humaiz','Hadeed']

function make_great(magicians: string[]): void
{
    for(let magician of magicians)
        {
            console.log(`${magicians} is a great magician` )
        }
}

function great_magician(magicians: string): void
{

    for(let great_magician of magicians)
        {
            great_magician.push(`${magicians}  the Great`)
        }
}

console.log("This Is Previos");

make_great(magicians)


console.log("\n\n Thats New ");

great_magician(magicians)