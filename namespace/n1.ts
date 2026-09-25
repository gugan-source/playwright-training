//namespace is used to group releted variables ,functions,classes under single name

namespace mydetail{
    export let name:string="gugan"
    export let age:number=20
    export function display()
    {
        console.log(name)
        console.log(age)
    }
}
console.log(mydetail.name)
console.log(mydetail.age)
mydetail.display()