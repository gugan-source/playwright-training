//function inside the class means it is a method and method outside a class means it is a function
class student{          //inside the class using method
    //normal method
    display(){
        console.log("hi")
    }
    //method with parameters
    display1(name:string,age:number){
        console.log(name)
        console.log(age)
    }
    //method with return 
    add(a:number,b:number):number{
        return a+b
    }
    //static method    satic will have static key word
    static sub(a:number,b:number):number{
        return a-b
    }

}
//new classname()- to create an object
let ob=new student()
ob.display1("gugan",20)
ob.display()
console.log(ob.add(20,30))
//static method belong to class not object
console.log(student.sub(20,10))