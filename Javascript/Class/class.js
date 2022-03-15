// Class is like  mould which creates object.



/*
class Emp{                  // class name should be start with capital letter
    min_bal=2000

}

let c1=new Emp              // with 'new' keyword we can create object from class
let c2= new Emp             //c1,c2 are two objects
console.log(c1)
console.log(c2)
*/


class Emp{
    min_bal=20000
    constructor(a,b,c){
        this.name=a
        this.salary=b
        this.position=c
        
    }
    get_details(){
       console.log(`name: ${this.name} salary: ${this.salary} position: ${this.position}`)
    }

}

let c1=new Emp()                            // if we donot pass the values the constructor assign values as undefined eg. name: undefined
let c2=new Emp('suhel',1200000,"sde")
let c3=new Emp('sanket',1200000,"sde2")
let c4=new Emp('rutwik',1200000,"sde1")
let c5=new Emp('nitin',1200000,"techlead")
let c6=new Emp('vaibhav',1200000,"manager")

c6.get_details()