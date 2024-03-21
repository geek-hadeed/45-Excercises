"use strict";
/*You just heard that one of your guests can’t
make the dinner, so you need to send out a new set of
invitations. You’ll have to think of someone else to invite. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
var guest = ["Ameen", "Aieyan", "Shayan", "Hassnain", "Qadir"];
exports.guest = guest;
console.log("Tomomorrow i held a dinner at my home for some of my friends the list of guests Invitations are: ");
// for(let i=0 ; i<guest.length ; i++)
// {
//     console.log( `HEY ${guest[i]} You Are Invited on Dinner At my Place` )
//     console.log("\n\n\t Thank You")
// }
console.log(" \n !!!   Unfortunaely ".concat(guest[0], " would not come to dinner "));
console.log(" \n After His Replacement The New Guests invitations are : ");
var new_guest = "Hadeed";
guest[0] = new_guest;
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var guests = guest_1[_i];
    console.log("\n\nHEY ".concat(guests, " You Are Invited on Dinner At my Place"));
    console.log("\t Thank You");
}
