//Object is group of key value pair
/*
let emp={ Id:2000, Name:'Suhel',Sal:1000000 }


emp.pos='Buisuiness analyst' //Updating in object

console.log(emp)
*/

//For in

//let emp={ Id:2000, Name:'Suhel',Sal:1000000, loc:'pune', HomeTown:'Kolhapur' }
/*
for(key in emp){
    console.log(key)// Printing key values --> Id, Name, Sal.
}
*/

/*
for( key in emp){
   console.log(emp[key])
}
*/


let emp=[{ Id:2000, Name:'Paunikar',Sal:1000000, loc:'pune', HomeTown:'Kolhapur' },
{ Id:2001, Name:'Suhel',Sal:1000000, loc:'pune', HomeTown:'Kolhapur' },
{ Id:2002, Name:'Sanket',Sal:1000001, loc:'Mumbai', HomeTown:'Kolhapur' },
{ Id:2003, Name:'Rutwik',Sal:1000002, loc:'Hyedrabad', HomeTown:'Kolhapur' },
{ Id:2004, Name:'Nitin',Sal:1000003, loc:'pune', HomeTown:'Kolhapur' },
{ Id:2005, Name:'Vaibhav',Sal:1000004, loc:'pune', HomeTown:'Kolhapur' },]

for(x of emp){
    console.log( x.Name)
}