class Address{
    constructor(Area,City,State){
        this.Area=Area;
        this.City=City;
        this.State=State;
    }

}
let c1=new Address('R.K.','Kolhapur','Maharashtra')
console.log(c1)

module.exports= Address // Exporting class Address in ES --> module.exports=Address(name of class)