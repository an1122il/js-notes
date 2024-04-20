
/*  Datatypes determine the behavior and the operation that can be performed on them
                        OR WE CAN SAY THAT 
    It will tell us about what type of data we are going to use


Datatype are of two types 
    1. primitive datatype
    2. Refrence datatype(non primitive)

PREMITVE DATATYPES
  1. Number
  2. String
  3. Boolen
  4. Symbol
  5. null
  6. undefiend
  7. BigInt

  --primitive datatype are immutable , which means there values cannot be changed once they are created 
  -- if we are assinging a new value to a variable then we are creating a new copy of the values
*/
    let a = 3;
        c=a;
        g=c+2

    let b ="anil";
    // console.log(g); //5
    // console.log(a); //3

// console.log(typeof null); // null is a object type
// console.log(typeof undefined); // undefined is a undefiend type
// console.log(typeof a); // it is a number type
// console.log(typeof b); // it is a string type

// How to declaration Symbol 
const mySym = Symbol('Anil')
// console.log(typeof mySym);
/*

---------------------------------------------REFRENCE DATATYPE(Non Primitive)----------------------------------------


    --reference datatype are mutable, which means there values can be change by modifying thier proprties or elements
    --when we assign a refrence data type to a variable, you are actually storing a reference (memory address ) to the location where the data is stored

    types - 
    1. Array
    2.Object
    3.Function
*/
const number =[1,2,3,4,5,6,7] //array

const myObj={                //Object
    firstName: "Anil",
    lastName: "Tiwari",
         
}

let myFunction = function(){
    console.log("Hello World");
}
// myFunction();

let d= [1,2,3,4,5,6];
let e=d;
// console.log(d);
// console.log(e);
e.pop();
// console.log(d);
// console.log(e);

// 2 while learning datatypes we have also learn about reference datatype. So, if we have an array (ex- a =[1,2,3,4,5]) and we have to store that array in a variable (ex- b). Now if we perform any opration on b variable then the changes will also reflect to the array also. So, to deal with this problem we will use spread oprator

let x =[1,2,3,4,5];
/* const b = a; ===>*/  let y=[...x]   
  
//  b.pop();
//  console.log(x);
//  console.log(y);