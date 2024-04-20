/*VARIABLES */

// 1. Variable is a type of container in which we can store some data and manage the data.
// 2. We cannot give the keyword(keyword are pre-reserved words which have some meaning in javascript) name as variable name.

// we can declare variables in three ways:-
    // 1. with the help of "var" keyword
    // 2. with the help of "let" keyword
    // 3. with the help of "const" keyword
    
// var Keyword
    // js have two version ES5 and ES6 . IN ES5 WE HAVE "VAR" AND IN ES6 WE HAVE "LET" AND "CONST". currently we are studing mixture of both the versions
    // 1. It is present in ES5 .
    // 2. If we decalre a variable with var keyword and put some data into it then we can change the data further. 
    // 3. variable which are declared with var keyword are accesed out of the block also i.e, it is function scoped and globle scoped 

    console.log(value);
    var value = 44;
        value=54;
 
                         /************ Prefer not to use var because of some issue ********************** */
// let keyword
    // 1. It is present in ES6 
    // 2. It is also used to declare variable but it has some + points
    // 3. variable which are declared with let keyword are accesed with in a block only i.e, it is block scoped
    // 4. if we access the let variable before declaration then an refrence error will be thrown because of its block scoped behavior this concept is known as temporal deadzone.  
    
    let name = 'anil';
    name='ram';
    console.log(name);

// const keyword
    // It is also present in ES6 version.
    // 1. if we have declared a variable with const keyword we cannot change the value of that variable entire the program.
    // 2. we use const keyword if we don't want to change the data of that variable entire the program

    const number=4;

    //number =9;
    console.log(number);


    /*if we want to print the output in the form of table we use console.tabale(variable_names) */

    console.table([value,number,name]);