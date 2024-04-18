//stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.


let age : number = 25;


if(age<2){
    console.log('the prson is baby');
}else if(age>=2 && age<4){
    console.log("person is the toddler")
   }   else if(age>=4 && age<13){
        console.log("person is the kid")
     }  else if(age>=13 && age<20){
            console.log("person is the teenager")
      } else if(age>=20 && age<65){
                console.log("person is the adult")
         }else {
            console.log("person is an elder");
         }