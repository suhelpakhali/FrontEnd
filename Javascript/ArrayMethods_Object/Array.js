


let S=[10,20,30]
//Push method--> Adding element at the end of array

/*
S.push(80)
console.log(S)

// Pop method is used to delete element at the last of Array.


S.pop()
console.log(S)
*/

//Unshift is used to add values at the starting position of aray and unshift the previos one
/*
S.unshift(0)
console.log(S)
S.shift()
console.log(S)
S.shift()
console.log(S)
*/


//Object methods
let O={ Product:'mobile', Model:'Iphone X', Price:10000 }
//console.log(O)

//To find out whether object is empty or not
console.log(Object.keys(O))      //We convert the object into array.
console.log(Object.values(O))

if(Object.keys(O).length==0){
    console.log('object is empty')
}
else console.log('object is not empty')


