/*  Store a person’s name, and include some whitespace characters at the beginning 
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the 
name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */


// 2\12\2024


let Name: string = "\n\t  Hadeed \t\n"


console.log("Name with white spaces")
console.log(Name)


console.log("Name without white spaces")
console.log(Name.trim())