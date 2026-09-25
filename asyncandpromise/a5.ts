async function display(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 1000);
})
}

async function main(){
    let result = await display();
    console.log(result);
    console.log("This is the end of the program");
}
main();
