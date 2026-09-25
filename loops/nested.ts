let A:number = 10;
let B:number = 20;  
let C:number = 30;
let D:number = 40;

if (A > B && C > D)
{
    console.log("Both conditions are false");
}
else if (B > A && C < D)
{
   console.log("both conditions are true");
}
else if (A < B && C > D)
{
    console.log("first condition is true and second condition is false");
}
else
{
    console.log("first condition is false and second condition is true");
}