 

 //-------Importing from ex1 in ES5
 //to import tax from ex1.js

//const { name } = require("./ex1")



//const { name } = require("./ex1")

 
//const tax=require('./ex1')       //for single value
//
//to import multiple values from ex1.js 
/*const{tax,name}=require('./ex1')       // for multiple value
 
console.log(tax)
console.log(name)

*/

//-------Es6 import (did not execute on this )----------// 
/*
import tax from './ex1'
console.log(tax)
*/


import {tax,name} from './ex1'
console.log(tax)
console.log(name)