//1.create an array that contains fruit names, add a fruit at last, remove a fruit from first position, iterate through the array and print it
let fruits: string[] = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.shift();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//2..use Enum concept, store ur details (height and weight) and print it
enum Details {
    Height = 170,
    Weight = 65
}

console.log("Height:", Details.Height, "cm");
console.log("Weight:", Details.Weight, "kg");

//3.print 9th table in reverse order for loop
for ( i = 9; i <=90; i=i+9) {
    console.log(i);
}

//4.create a function that finds body mass index (use return type as number)
function bmi(weight: number, height: number): number {
    return weight / (height * height);
}

console.log(bmi(65, 1.7));

//5.create an interface that contains ur company details (name, address) and print it
interface Company {
    name: string;
    address: string;
}

let company: Company = {
    name: "Pepagora",
    address: "Coimbatore, Tamil Nadu"
};

console.log("Company Name:", company.name);
console.log("Address:", company.address);
//6.create a module that contains a function (area of circle) and use it another file
export function area(radius: number): number {
    return 3.14 * radius * radius;
}

//7.use promise concept and check whether a number is positive or negative
function checkNumber(num: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (num >= 0) {
            resolve("Positive number");
        } else {
            reject("Negative number");
        }
    });
}

checkNumber(10)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

    //8.use asynchronous function and promise concept , check whether a number is divisible by 3 or not
    function checkDivisible(num: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (num % 3 === 0) {
            resolve("Number is divisible by 3");
        } else {
            reject("Number is not divisible by 3");
        }
    });
}

async function check() {
    try {
        let result = await checkDivisible(9);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

check();

//9.use generics concept, create a function that returns ur age and ur name
function getDetails<T, U>(name: T, age: U): [T, U] {
    return [name, age];
}

let details = getDetails("Gugan", 22);

console.log("Name:", details[0]);
console.log("Age:", details[1]);

//10.find smallest of two numbers using ternary operator

let a: number = 10;
let b: number = 20;

let smallest = a < b ? a : b;

console.log("Smallest number:", smallest);