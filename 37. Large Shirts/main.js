/*  Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(size, text) {
    if (size === void 0) { size = "Small"; }
    if (text === void 0) { text = "i love typescript"; }
    console.log("The Shirt You Order Is ".concat(size, " and text is ").concat(text, " "));
}
make_shirt();
make_shirt("Medium");
make_shirt("Large", "I love Myself");
