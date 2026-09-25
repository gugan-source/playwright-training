//function with return statement

function multiplyNumbers(a: number, b: number){
    return a * b;
}
console.log("Product:", multiplyNumbers(5, 10)); // calling the function with arguments 5 and 10 (this is one way)

let total=multiplyNumbers(5, 8);
console.log("Total:", total); // calling the function with arguments 5 and 8 (this is another way)

//menstioning the datatype
function words(name:string): string{
    return "Hello " + name;

}
console.log(words("Alice")); // calling the function with argument "Alice"
let myname=words("Bob");
console.log(myname);         // calling the function with argument "Bob"

//void function- a function that does not return any value
function printMessage(message: string): void {
    console.log("Message:", message);
}
printMessage("good morning")

//function with never in real time we will not use
/*
function tosted(message:string): never{
    throw new Error(message)
}
console.log(tosted("it will never use"))*/

//function with default parameters
function calculation(a:number,b:number=10):number{
    return a*b
}
console.log(calculation(30))
console.log(calculation(10*10))

//function nested parametrs
function display(...a:number[]):void{
    console.log(a)
}
display(10,20,30,40,50)
display(1,2,3,4,5,6,7)