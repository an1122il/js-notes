// what is strings 
// a sequence of one or more charater that may consist of letter , number and symbol 

//  we can delare string in two ways 
//  1 let variableName = "output to print"
const firstName = "Anil";
const rollNO = 7;

// console.log("Name " + firstName + " roll number "+ rollNO + " Program MCA");// this type of syntax is very old to print any thing

// console.log(`my name is ${firstName} and my rollNo. is ${rollNO}`); // we use backtics(string interpolation), we just use $ sing and {} for ex '${}'
// console.log(typeof(firstName));

// ------------------------------------------------------------------------------------------------------

//  2 const gameName = new String
const gameName = new String('prajjwal is a very good boy. he does not even drink and nor smoke');
// console.log(gameName.length); // to find the length of the string
// console.log(gameName.toUpperCase());  // to convert the lower case character into uppercase
// console.log(gameName.charAt(3)); // On a specific index which character is present 
// console.log(gameName.indexOf('i')); // to find the index of an sepecific character
// console.log(typeof(gameName));// object type

const newString = gameName.substring(12);// it take the part of a string according to the given parameter (starting index , required last index +1)
// console.log(newString);

const anotherString = gameName.slice(-19,-5);// we can use negative values in slice method
console.log(anotherString);

// ----------------Trim-------------
//most of time user enter unnecessarly space. So, to remove that we use trim

const stringOne = "   Anil  "
// console.log(stringOne);
// console.log(stringOne.trim()); 

//------replace---------
// if we want to repalce some part of string with another part of string then we use replace

const url = "https://github.com/an1122il/clone";
// console.log(url);

console.log(url.replace('clone','advanced'));

// if we wants to check wheather a specific world or string is there or not then we used includes
// console.log(url.includes('anil'));