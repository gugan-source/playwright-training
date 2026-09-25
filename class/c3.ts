//inheritance  means one class may use other class properties using extend keyword
class students{
    display()
    {
        console.log("i am student")
    }

}
class teacher extends students{
    display1()
    {
        console.log("i am teacher")
    }
}

let b=new teacher()
b.display1()
b.display()