// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians (magicians: string[]){
    magicians.forEach(name => console.log(name));
}
//  make a another function through . map method
function make_great(magicians: string[]){
   return magicians.map(name =>`The Great ${name} `);
}

// Define an array of magicians names
let magicians_names = ["Harry Portar","Harry Houdini","David Blaine"];

// making a copy of array throuh.slice method

let copy_magician_names = magicians_names .slice();

// Modify the copy of array to include "the Great"function

let copy_great_magicians = make_great(copy_magician_names);

// show both array origianal and copied

// original
console.log("Original Array\n");

show_magicians(magicians_names);
// copy
console.log("copy\n");

 show_magicians(copy_great_magicians);


