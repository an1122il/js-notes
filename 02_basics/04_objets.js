// declaring object with constructor

// const user1 = new Object();

const user1 = {}
user1.id = "anil1122"
user1.emailId = "anil@gmail.com"
user1.name = "Ram"
// console.log(user1);

const regularUser = {

    email : 'anil',
    fullname :{
        Userfullname :{
            firstName : 'Anil',
            lastname : 'Tiwari'
        }
    }
}

// console.log(regularUser.fullname.Userfullname);


// ---------------Merging of two or more object in a target object---------------

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};
const obj3 = {5:'c',6:'d'};
const obj4 = {7:'c',8:'d'};


// --------->>>  1  >>>-------------  WITH THE HELP OF ASSIGN METHOD

// const obj5 = {obj1,obj2} // it will print object inside a object which is not good
// console.log(obj5); 



//   1---->
            // const obj6 = Object.assign(obj1,obj2)

//     2-----> 
            // const obj= Object.assign(obj1,obj2,obj3,obj4) // in this first object will be the target object and other object will be the source object
 // both will display same answer but it better to use {} 
// console.log(obj);
// console.log(obj == obj1);


// >>>>>>>   2  >>>>>>>>  WITH THE HELP OF SPREAD OPRATOR

const obj7 = {...obj1,...obj2,...obj3} 
// console.log(obj7);

// Can we make array of objects -- the answer is YES

const user = [
    {
        id : '1',
        email : 'anil@gmail.com'
    },
    {
        id : '2',
        email : 'ani@gmail.com'
    },
    {
        id : '3',
        email : 'an@gmail.com'
    },
    {
        id : '4',
        email : 'a@gmail.com'
    },
]

// console.log(user[1].email);

// console.log(user1);

// console.log(Object.keys(user1));  // If we want to find all the keys present in any object 

// console.log(Object.values(user1)); // If we want to find all the values present in any object 

// console.log(Object.entries(user1)); // To print all the properties in form of array (we can easily apply loop in it)


// console.log(user1.hasOwnProperty('emailId')); // to find whether a specific properties is present or not

// ----------------------------------------------------------------------------------------------------------------

// Destructuring is a javaScript expression that allows us to extract data from array,objects and maps and set them into a new , distinct variable
// At a time we can extract different properties from an array

const suan = {
    name : 'SUAN',
    ceo : 'Sunil Tiwari',
    goal : 'To provide best quality of product at reasonable price'
}

// console.log(suan.name);

const {ceo} = suan;
const {ceo : ss} = suan;

// console.log(ceo);
// console.log(ss);

// -----------------------------------------------------JSON------------------------------------------------------------

// In json all the key and values should be in double couts
// Information which comes from backend 
// {
//     "name":'anil',
//     "collage":'ITS',

// }