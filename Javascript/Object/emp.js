//Object is group of key value pair
/*
let emp={ Id:2000, Name:'Suhel',Sal:1000000 }


emp.pos='Buisuiness analyst' //Updating in object

console.log(emp)
*/

//For in

let emp={ Id:2000, Name:'Suhel',Sal:1000000, loc:'pune', HomeTown:'Kolhapur' }
/*
for(key in emp){
    console.log(key)// Printing key values --> Id, Name, Sal.
}
*/

for( key in emp){
   console.log(emp[key])
}