//function with parameters
//parameters- variable that is passed to a function
//arguments- values that are passed to a function when it is called

function addNumbers(num1: number, num2: number)
 {
    console.log("Sum:", num1 + num2);

 }
 addNumbers(5, 10); // calling the function with arguments 5 and 10
 addNumbers(20, 30); // calling the function with arguments 20 and 30
 //any datatype can be passed as parameter

 function greet(name: string, age: number) {
   console.log("Hello " + name + ", you are " + age + " years old.");
 }
 greet("Alice", 25); // calling the function 
 greet("Bob", 30); // calling the function with different arguments