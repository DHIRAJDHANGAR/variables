/**
 * Var
 * 0- It's a functional scope variable
 * 1- It allows us to store any type of data
 * 2- It allows us re-initilisation
 * 3- It allows us re-declaration
 * 4- We can access the var data even before it's initialisation but it would be undefined
 */

/**
 * Let
 * 0- It's a block scope variable
 * 1- It allows us to store any type of data
 * 2- It allows us re-initilisation
 * 3- It doesn't allows us for re-declaration
 * 4- We can't access let variables before it's initialisation
 */

/**
 * Const
 * 0- It's a block scope variable
 * 1- It allows us to store any type of data
 * 2- It doesn't allows us re-initilisation
 * 3- It doesn't allows us for re-declaration
 * 4- We can't access let variables before it's initialisation
 */

// /*****   var   *****/
// console.log(a);
// console.log(typeof a);
// var a = 30;
// var a = "40";
// console.log(a);
// console.log(typeof a);

// /*****   let   *****/
// // console.log(c);
// // console.log(typeof c);
// let c = 30;
// c = 50;
// // let c = 40;
// console.log(c);
// console.log(typeof c);

// /*****   const   *****/
// // console.log(d);
// // console.log(typeof d);
// const d = 10;
// // d = 55;
// // const d = 5;
// console.log(d);
// console.log(typeof d);

// var h = null;
// console.log(h);
// console.log(typeof h); //null ojct


// var s = "10" + null;   // 10null string
// var s = 10 + null;     //10 num
// console.log(s);
// console.log(typeof s);

// var s = "10" - null;     // 10 num
// var s = null - "10";     // -10 num
// console.log(s);
// console.log(typeof s);

// const w = undefined + "2";
// console.log(w);
// console.log(typeof w);    //undefined2  string

// var k = undefined + 2;
// // var k = undefined - "2";
// // var k = undefined + 2 ;
// console.log(k);
// console.log(typeof k);    //NaN  num