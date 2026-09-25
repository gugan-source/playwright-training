//
interface Detail {
    name:string|number,
    readonly id:string|number,
    isstudents?: boolean;
    //declare the function
    display1(): void;
}

let student: Detail = {
    name: "gugan",
    id: "sddf",
    display1() {
        console.log("welcome")
    }
    
}
console.log(student)
student.display1()
//student.id = 22 i use readonly that y its shows error (to check remove the comment)