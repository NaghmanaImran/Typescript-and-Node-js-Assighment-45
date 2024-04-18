// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Names: Store thel names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ["Ali", "Taha", "Anas", "Amir", "Farah"];
var message = 'CONGRATULATION YOU WIN';
for (var i = 0; i < Names.length; i++) {
    console.log("".concat(message, " + ").concat(Names[i]));
}
