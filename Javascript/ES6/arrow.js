//normal function

/*function vw(a){
    return a +' das auto'
}
console.log(vw("polo"))
*/

//--        Fat Arrrow: Function_Name=(parameter)=>{} also represened as Fn=()=>{}
/*
let vw=(a)=>
  {return a +" das auto"}

console.log(vw("polo"))
*/

//--       Implicit function When only one statement is there we use this function 

//let msg=(a)=>a+' hello '
//console.log(msg('Gm'))


//--          Function overriding conflict resolve using fat arrow


//normal fumction in which overriding of function occurs
/*
function wish(){
    return "GM"
}
console.log(wish())

function wish(){
    return "Gn"

}


console.log(wish())
*/

//Fat arrow
/*
var wish=()=> 'Gm'

console.log(wish())

var wish=()=> 'Gn'

console.log(wish())

*/

//--      this is used as pointer