const Address = require('./add') //Importing Address class from add.js -->Syntax=> const name of class i.e. const Address = require('./add')
class Account{
    constructor(Id, n, bal,add){
this.Id=Id
this.name=n;
this.balance=bal
this.address=add
}
}


let cc1=new Account( 101,'suhel',2000, new Address('R.K. nagar','Kolhapur','Maharashtra')); 
console.log(cc1)