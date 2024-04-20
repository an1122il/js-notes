// let's make two arrays and we have to merge that array 
const laptop = ['hp','vivobook','acer',];
const other_laptop = ['mackbook','dell','sony']

// laptop.push(other_laptop);

// console.log(laptop); // [ 'hp', 'vivobook', 'acer', [ 'mackbook', 'dell', 'sony' ] ]

// we have seen that in laptop we have two array in it one is laptop's array itself and another is other_laptop's array
// so, if we want to access elemet which are pushed then

// console.log(laptop[3][2]); // then we will got sony , but it is not a good practice

// ----so we will use concat method and while concatinating we have to store combined array in a new array--------


const newArray = laptop.concat(other_laptop)
// console.log(newArray);


// we can also used spread oprater 
// spread oprater mainly has two function 
// 1 it is used to join two or more array
  

const spread_array = [...laptop,...other_laptop]

console.log(spread_array);

// 2 while learning datatypes we have also learn about reference datatype. So, if we have an array (ex- a =[1,2,3,4,5]) and we have store that array in a variable (ex- b). Now if we perform any opration on b variable then the changes will also reflect to array also. So, to deal with this problem we will use spread oprator

const a =[1,2,3,4,5];
/* const b = a; ===>*/  const b=[...a]   
  
 b.pop();
//  console.log(a);
//  console.log(b);


const another_array = [1,2,3,4,[5,45,3,5],[1,2,34,5,4,6,7,9]] // in this we arrays into array 
// so if we want to print all element in single array then we will use flat() method

const sorted_array = another_array.flat();
 console.log(sorted_array);

// to convert any string , object etc to array we will use Array.from()

// console.log(Array.isArray('Anil'));
// console.log(Array.from('Anil')); //[ 'A', 'n', 'i', 'l' ]

// if we want to convert different variables in a single array then we will use Array.of

let score1 = 100;
let score2 = 500;
let score3 = 400;

let singleArray = Array.of(score1, score2, score3)

// console.log(singleArray);
// console.log(Array.of(score1, score2, score3));
