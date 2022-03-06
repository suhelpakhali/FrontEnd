/*var i=1;
while(i<11 )
{
    if(i%2==0)
    console.log(i);
    i++;
}

*/


/*for (i=0;i<11;i++){
    if(i%2==0)
    console.log(i)
}*/








/*for( var i=5;i<16;i++)
{console.log(i)}
*/


/*let  i=10;
while(i>=1){
console.log( i);
i--;
}*/

/*var input = 1;
while (input <= 10) {
 console.log(input);
 input++;
}*/

//15-10 using for
/*
for (var i=15; i>9; i--)
{
    console.log(i)
}*/

//1-10 even numbers using while 
/*
var i=1
while(i<11){
    if(i%2==0){
        console.log(i)
    }
    i++;
    
   
}
*/
//1-10 odds using for
/*for(var i=1;i<11;i++){
    if(i%2!==0){

  
    console.log(i)
}
}*/
//Multiples of 4 10 times
/*
var i=1
var j=10
while(i<=10){
    
        console.log(i*4)
        i++
        
    }
*/

/*
var i=1
while(i<25){
    if(24%i==0){
        console.log(i);
     
    }
     i++;
} 
*/
var rev=0
var n=12345
while(n!=0){

var rem=n%10
 rev=rev*10+rem
 n=Math.floor(n/10);
 
}
console.log(rev)