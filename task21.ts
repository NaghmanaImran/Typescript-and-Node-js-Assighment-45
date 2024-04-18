// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface person{
    age : number,
    name : string,
    nationality : string,
    student : boolean
}

let person:person={
    age : 27,
    name : 'naghma',
    nationality: 'pakistani',
    student : true
};
console.log(person);