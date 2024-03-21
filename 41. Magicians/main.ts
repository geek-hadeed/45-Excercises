/* Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

const magician: string[] = ['Aeiyan','Humaiz','Hadeed']

function show_magician(magicians: string[]): void
{
for(let magician of magicians)
    {
        console.log(`${magician} is a great magician` )
}
}


show_magician(magician)


