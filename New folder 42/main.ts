// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to e/ach magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians_names = ["Harry Portar","Harry Houdini","David Blaine"];
function show_magicians (magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
   return magicians.map(name =>`The Great ${name} `)
}

let great_megicians = make_great(magicians_names)
console.log(great_megicians)