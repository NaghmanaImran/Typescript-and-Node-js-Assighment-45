// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestsArray = ["Ali", "Farah", "seher"];
var absentguest = "Ali";
var newguest = "imran";
guestsArray[guestsArray.indexOf(absentguest)] = newguest;
console.log("welcome we found bigger dinner table");
guestsArray.unshift("Erum");
console.log(guestsArray);
var middleguest = "maryam";
var midleindex = guestsArray.length / 2;
guestsArray.splice(midleindex, 0, middleguest);
console.log(guestsArray);
guestsArray.push("nahid");
console.log(guestsArray);
guestsArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner")); });
