/*You just heard that one of your guests can’t
make the dinner, so you need to send out a new set of
 invitations. You’ll have to think of someone else to invite. */
var guest = ["Ameen", "Aieyan", "Shayan", "Hassnain", "Qadir"];
/*
console.log( "Tomomorrow i held a dinner at my home for some of my friends the list of guests Invitations are: " )

for(let i=0 ; i<guest.length ; i++)
{
    console.log( `HEY ${guest[i]} You Are Invited on Dinner At my Place` )
    console.log("\n\n\t Thank You")
}


console.log( `\n !!!   Unfortunaely ${guest[0]} would not come to dinner` )
console.log( "\nAfter His Replacement The New Guests invitations are :" )

let new_guest: string = "Hadeed"
guest[0] = new_guest


console.log( "\n Good News! , I found A Bigger Table" )
*/
guest.unshift("Ahmed");
guest.splice(2, 0, "Asif");
guest.push("Ali");
/*
for(let i=0 ; i<guest.length ; i++)
{
    console.log( `\n HEY ${guest[i]} \n You Are Invited on Dinner At my Place \n Thankyou` )
}
*/
console.log("\n\n\t Sorry Unfortunately We can not Arrange Biger Table so Onky 2 guests Are Invited");
while (guest.length > 2) {
    var remove_guest = guest.pop();
    console.log("Sorry Mr. ".concat(remove_guest, " you Are Not Invited On Dinner"));
}
for (var i = 0; i < guest.length; i++) {
    console.log("\n HEY ".concat(guest[i], " , \n You Are Still Invited on Dinner At my Place \n Thankyou"));
}
guest.splice(0, 2);
console.log(guest);
