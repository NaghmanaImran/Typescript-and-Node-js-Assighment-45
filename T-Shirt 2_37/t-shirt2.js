// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
// Making a funcion
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "i LOVE TYPESCRIPT"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printmessage, " print on it"));
}
// calling a function with by-default values
make_shirt();
// calling a function now with Medium size and default message
make_shirt("Medium", "I LOVE JAVA SCRIPT");
