

//  Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program fr
// Shrinkingom Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let  guestsArray:string[] = ["Ali","Farah","seher"];

let absentguest:string = "Ali";


let newguest:string = "imran"
guestsArray[guestsArray.indexOf(absentguest)]=newguest;


guestsArray.unshift("Erum");

 

 let middleguest:string = "maryam"
  let midleindex = guestsArray.length/2;
guestsArray.splice(midleindex,0,middleguest); 
console.log(guestsArray);



guestsArray.push("nahid");
console.log(guestsArray)
console.log("we can invite only two people dinner");

while(guestsArray.length>2){
  let removesguest = guestsArray.pop();
  console.log(`\nsorry ${removesguest}" " We can't invite you to dinner`);
}
guestsArray.map((items)=>console.log(`${items} you are invited`));

guestsArray.pop();
guestsArray.pop();
console.log(guestsArray);






















