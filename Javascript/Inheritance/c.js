class Account{

    constructor(i,exp){
this.Id=i
this.expenditure=exp
    }
    
}

class sav_acc extends Account{
    min_bal=20000
    constructor(n,Id,exp){
        super(Id,exp)
this.name=n
    }
    get_bal(){
        return this.min_bal-this.exp
}
}

class current extends Account{
    min_bal=25000
    constructor(n,Id,exp){
        super(Id,exp)
        this.name=n
    }
    get_bal(){
         return this.min_bal-this.exp
        }
}
let c1=new sav_acc('suhel',100,15000)
let c2=new current('rutuk',120, 10000)

console.log(c1.get_bal())
//console.log(c2)

