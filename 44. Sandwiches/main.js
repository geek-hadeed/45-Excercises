"use strict";
/* Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
function makeSandwich(items) {
    console.log(`\nMaking sandwich with ${items.join(', ')}`);
    console.log(`Sandwich is ready!`);
    console.log(`\t\t Thank you for your order!`);
}
makeSandwich(['lettuce', 'tomato', 'cheese']);
makeSandwich(['ham', 'cheese']);
makeSandwich(['lettuce', 'tomato', 'cheese', 'ham']);
