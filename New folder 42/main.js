// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to e/ach magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians_names = ["Harry Portar", "Harry Houdini", "David Blaine"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name, " "); });
}
var great_megicians = make_great(magicians_names);
console.log(great_megicians);
