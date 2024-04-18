var name_1 = "Quaide";
var name_2 = "Azam";
var name_3 = "jinnah";
if (name_1 === name_1) {
    console.log("Equality test with strings:", "name_1:string" === "name_1:string");
}
//  test nmbr 2
if (name_1 != name_2) {
    console.log("inequality test with  string:", "name_1" != "name_2");
}
else {
    console.log("Equality test with strings:", "is fals");
}
// test 3 LowerCase
console.log("lowercase function test:", "HELLO".toLowerCase() === "hello");
// TEST 4
//           • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// let age_1 :number = 18;
// let age_2 :number = 25;
// if(age_1 == 18){
//     console.log("Eligible for vote");
// }
// if(age_1 !== 25){
//     console.log("not eligible for vote")
// }
// test graterthan and less than
console.log('greater then  test', 10 > 5);
// less than
console.log('less then and equal to test', 5 <= 10);
// test greater than and equal to
console.log('greater then and equal to test', 10 >= 10);
// less than and equal
console.log('less then and equal to test', 5 <= 10);
// Test using 'and' operator
console.log("and operators test", 5 === 5 && 10 > 5);
// / Test using 'or' operator
console.log("or operators test", 5 === 5 || 4 > 5);
// test weather in array
// let countryname:string[] = ["pakistan","india","iran","chaina"];
// console.log("test 'chaina' in the array:", countryname.includes('chaina'))
// test weather an items in a array
var countryname = ["pakistan", "india", "iran", "chaina"];
console.log('test "chaina" in the array:', countryname.includes("chaina"));
// test weather an items is not an array
console.log('test "japan" not in the array:', !countryname.includes("japan"));
