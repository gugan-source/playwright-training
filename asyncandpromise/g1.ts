//generic is allows to write a reusable code that can work with any data type. It allows us to create a function, class, or interface that can operate on different types without losing type safety.

//generic function
function identity<T>(arg: T): T {
    return arg;
}
// this is one way to call it 
console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42    
console.log(identity<boolean>(true)); // Output: true

//without declaring the type
console.log(identity("Hello")); // Output: Hello
console.log(identity(42)); // Output: 42

//generic class with 2 type patrameters

function display<T, U>(value1:T,value2:U){
    console.log(value1);
    console.log(value2);
}
display("Hello", 42); // Output: Hello 42
display(22,22)
display(true,false)
display("Hello",true)
