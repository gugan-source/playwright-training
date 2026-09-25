let detail:[string, number] = ["raj", 10]; // tuple declaration and initialization
console.log("Name:", detail); // accessing the first element of the tuple

//destructuring:converting tuple to variables
let[myname,id] = detail; // destructuring the tuple into variables
console.log("Name:", myname);
console.log("Id:", id);

//enum this is also a type of tuple but it is used to store a set of named constants
enum Color {
    Red=10,  // if we give value to first element then the next elements will be incremented by 1
    Green, //if we doesn't assign any value means the index will start from o
     Blue  // are else we give fixed value to all the elements of the enum
    
}
console.log("Color:", Color.Red); // accessing the first element of the enum    
console.log("Color:", Color.Green); // accessing the second element of the enum
console.log("Color:", Color.Blue); // accessing the third element of the enum


//any data type is used to store any type of data like string, number, boolean, object, array, etc. but it is not recommended to use any data type because it will not provide any type checking and it will lead to runtime errors. so it is better to use specific data types like string, number, boolean, object, array, etc.
let data:any = "raj"; // any data type declaration and initialization
console.log("Data:", data); // accessing the any data type variable 
let data1:any = 10; 
console.log("Data:", data1); 
let data2:any = true; 
console.log("Data:", data2); 


//unknown data type is used to store any type of data like string, number, boolean, object, array, etc. but it is recommended to use unknown data type because it will provide type checking and it will lead to compile time errors. so it is better to use unknown data type instead of any data type.
let data3:unknown = "raj"; // unknown data type declaration and initialization
console.log("Data:", data3); // accessing the unknown data type variable 
let data4:unknown = 10; 
console.log("Data:", data4); 
let data5:unknown = true; 
console.log("Data:", data5);    

//data3.toupperCase(); // compile time error because unknown data type does not provide type checking
if (typeof data3 === "string") { // type checking for unknown data type
          console.log("Data:", data3.toUpperCase());
}