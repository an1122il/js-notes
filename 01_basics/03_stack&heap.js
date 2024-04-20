// In all the programming languages memories are of two types
// 1. Stack (primitive)
// 2. Heap(non-primitive)

//      ------------Stack---------------

// 1 Stack memories are used in primitive datatype 
// 2 in stack a copy of variable is used 


let myChannel = "Anil" ;
let anotherChannel = myChannel;
console.log(myChannel);
console.log(anotherChannel + " Tiwari");

// ------------------Heap------------------

// 1. heap memories are used in refrence 
// 2. in heap a refrence value (address of that value) is stored 

// let Contact = [1,2,3,4,5,6,7,8];
// let upiID = Contact;
//      upiID.pop();


// console.log(Contact);
// console.log(upiID );

let objOne = {
     email: "anil@gmail.com",
     upi: "9670045144@ybl"
}
let objTwo = objOne;

objTwo.upi="991920067@ybl" //value get changed in both the object due to refrence variable
console.log(objOne.upi);
console.log(objTwo.upi);