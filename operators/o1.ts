//conditional operator
let age: number = 20;
let isAdult: string = (age >= 18) ? "Yes" : "No";
console.log("Is Adult:", isAdult);

//assignment operator 
console.log(age+=10)
console.log(age-=5)
console.log(age*=2) 
console.log(age/=3)

//logical operator
let a:number = 10;
let b:number = 20;//&& and || operator

console.log("Logical AND:", a > 5 && b < 30); // true
console.log("Logical AND:", a < 5  && b > 15); // false
console.log("logical AND:", a > 5 && b > 15); // false
console.log("Logical AND:", a < 5 && b < 15); // false                   
//or operator
console.log("Logical OR:", a < 5 || b > 15);    
console.log("Logical OR:", a < 5 || b < 15);
console.log("Logical OR:", a > 5 || b < 15);
console.log("Logical OR:", a < 5 || b < 15);
//not equal operator
console.log("Not Equal:", a != b);
console.log("Not Equal:", a==b)


