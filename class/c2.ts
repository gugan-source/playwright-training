//constructor is a special type of method 
// it invoked when ever the object is created
//mainly used for initialisation purpose

class demo{
    name:string //variable
    age:number

    constructor(name:string,age:number) // values will first assign to the constructure and using this keyword it will go to above variables
{
    this.name=name
    this.age=age
}
sample():string
{
return "name is ${this.name}and age is ${this.age}"
}

}
let obj=new demo("gugan",20)
console.log(obj.sample())
