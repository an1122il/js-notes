 const score =100;
//  console.log(score);

 const balance = new Number(100);// its sure that this is a number
//  console.log(balance);

//  console.log(balance.toString().length);// converting the number into string and also finding the length of the string
//  console.log(typeof(balance.toString()));//checking the type of balance after the conversion


//  console.log(balance.toFixed(2));// to print decimal after number. In braces we will write how much deciaml we want 

 //-----toPrecision() is used to focus on given starting digits 
 // For example if we write 2 in braces then it will print 13 by roundoff and if we use 3 then the output is 12.9
 const otherNumber = 12.87;
//  console.log(otherNumber.toPrecision(3));

 // -----toLocaleString() used to represent comas in thousand, lakh, crore etc

 const Num = 10000000;
//  console.log(Num.toLocaleString());// it will print US Standard system 
//  console.log(Num.toLocaleString('en-IN'));// it will print INDIAN Standard system 

//++++++++++++++++++++++ Maths +++++++++++++++

// console.log(Math.abs(-4));// Converts the negative number in positive 
// console.log(Math.max(1,23,4,5,67,88)); // to find max number in the list
// console.log(Math.round(444.4));// it will round off the number
// console.log(Math.pow(2,9)); // to print the power of any number
// console.log(Math.ceil(67.9)); // to choose the upper value ex 67.9 if we use ceil then the roundoff value is 67
// console.log(Math.random());// to generate random number but it simple random() wil genrate number between 0-1
// console.log((Math.round()*10)+1)// *10 wil shift decimal to forword and we use +1 because what if the generated number is 0.0776 so in this if we will add 1 then the random value is 1.0776