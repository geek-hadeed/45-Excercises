/*You just heard that one of your guests can’t
make the dinner, so you need to send out a new set of
invitations. You’ll have to think of someone else to invite. */


let guests: string[] = ["Ameen" , "Aieyan" , "Shayan" , "Hassnain" , "Qadir"]


// console.log("Tomomorrow i held a dinner at my home for some of my friends the list of guests Invitations are: " )

// for(let i=0 ; i<guest.length ; i++)
// {
//     console.log( `HEY ${guest[i]} You Are Invited on Dinner At my Place` )
//     console.log("\n\n\t Thank You")
// }


console.log(` \n !!!   Unfortunaely ${guests[0]} would not come to dinner `)
console.log(" \n After His Replacement The New Guests invitations are : ")

let new_guest: string = "Hadeed"
guests[0] = new_guest


// for(let guest of guests)
// {
    // console.log( `\n\nHEY ${guests} You Are Invited on Dinner At my Place` )
    // console.log("\t Thank You")
// }

// guests.forEach(guest => {
//     console.log( `\n\nHEY ${guest} You Are Invited on Dinner At my Place` )
//     console.log("\t Thank You")
// });

let invitation = guests.map(guest => `HEY ${guests} You Are Invited on Dinner At my Place` )

invitation.forEach(invitations => console.log(invitation))




export{guests}