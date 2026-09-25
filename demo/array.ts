//array
/*let myarray: number[] = [1, 2, 3, 4, 5];
console.log("myarray: " + myarray);
let myarray1: string[] = ['Gugan', 'Kumar', 'Raja'];
console.log("myarray1: " + myarray1);   
let myarray2: boolean[] = [true, false, true];
console.log("myarray2: " + myarray2);   

//another way to declare array
let myarray4: Array<number> = [6, 7, 8, 9, 10];
console.log("myarray4: " + myarray4);
let myarray5: Array<string> = ['Tamil', 'English', 'Hindi'];
console.log("myarray5: " + myarray5);   
let myarray6: Array<boolean> = [false, true, false];
console.log("myarray6: " + myarray6);*/

//mixed array
let myarray7: (string | number)[] = ['Gugan', 23, 'Kumar', 25];
console.log("myarray7: " + myarray7);   
let myarray8: Array<string | number> = ['Tamil', 1, 'English', 2];
console.log("myarray8: " + myarray8);
myarray7.push('Raja');
console.log("myarray7 after push: " + myarray7);   
myarray8.pop();
console.log("myarray8 after pop: " + myarray8); 
//fixed array can't be changed
const myarray9: readonly number[] = [1, 2, 3, 4, 5]; // can't able push,pop,shift,unshift,splice,sort,reverse
console.log("myarray9: " + myarray9);
