/*  Store a person’s name in a variable, and then print that person’s 
name in lowercase, uppercase, and titlecase. */

// 2\12\2024

let me: string = "Hadeed"


console.log("Lower Case:" , me.toLowerCase() )
console.log("Upper Case:" , me.toUpperCase() )
console.log("Title case:" , me.charAt(0).toUpperCase() + me.slice(1).toLowerCase() )