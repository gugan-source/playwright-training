function display() {   //sync
    console.log("Hello, World!")
    console.log("Hello, World1")
    console.log("Hello, World2")
}

function display1() {   //async
    console.log("Hello, World!")
    setTimeout(() => {console.log("Hello, World1")}, 1000)
    console.log("Hello, World2")
}
display()
display1()