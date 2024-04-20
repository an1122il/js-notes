// singleton (when we make objects through constructer then a singleton object is created and if we make through literals then singleton is not created)
// Object.create

// Object is a collection of properties and a propeties is an associated with name (key) and values.
// A properties value can be a function in which property is known as method

// Objects are declared in two ways 
// 1 Literals 
// 2 constructor


//  ----------------Object Literals----------------
// In object we store value in form of key and values
// We will seperate each key with the help of ',' (comma)
// creating an object 
const user = {
    name: 'Anil Tiwari',
    age: 18,
    email : 'anil@gmail.com',
    "company": "suan"

}
// access the value
// console.log(user.name);  //Anil Tiwari
// console.log(user.email); //anil@gmail.com

// while access in this way we have a problem i.e, we can't be able to access line 20 element
// console.log(user.company);// throws an error

// another way to access 
// console.log(user['email']);
// console.log(user['company']); 

// -------------- interview question ----------------
// Q- Use a symbol datatype in a object as a key

const mySym = Symbol('name');


const obj1 = {
    [mySym] : "Jai Shree Ram"
}
// console.log(obj1['mySym']);
// console.log(typeof obj1['mySym']); // String which is not corret. So, we will 


// To make changes in values
//  user.name = "Shyam"
//  console.log(user["name"]);

 // to make the Object freeze i.e, which cannot be changed
 Object.freeze(user);

 user.email = "Ram@gamil.com"
//  console.log(user)

//  console.log(obj1);

 /// to create a function in an object

 