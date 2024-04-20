// Dates is an OBJECT in javascript

const myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
console.log(typeof(myDate));// 

const myCreatedDate = new Date(2003,3,5);
console.log(myCreatedDate.toDateString());

