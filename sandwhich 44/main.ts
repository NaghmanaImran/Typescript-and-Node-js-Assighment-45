// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
function  makeSandwich(...items : string[]){
    console.log("\nMaking a sandwich with followimg items:\n");

    items.forEach(singleItem => console.log(singleItem))
    console.log("\n Now enjoy sandwich\n");
}
  makeSandwich("chicken",",Mayo","egg",);
   
  makeSandwich("bread","butter","mayo","Egg","chees","tomato");

  makeSandwich("bread","butter");
