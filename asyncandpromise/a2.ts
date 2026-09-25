//promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed. 

let f=new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 10
        if (a > 5) {
            resolve(a)
        }           
        else {
            reject("Promise is rejected")
        }
},3000)
})
//then method is used to handle the resolved value of a Promise. It takes two arguments: a callback function to handle the resolved value and an optional callback function to handle any errors that may occur during the execution of the Promise.
//catch method is used to handle any errors that may occur during the execution of the Promise. It takes a single argument: a callback function to handle the error.
//finally method is used to execute code after the Promise has been settled, regardless of whether it was fulfilled or rejected. It takes a single argument: a callback function to execute after the Promise has been settled.
f.then((result) => { console.log(result) })
f.catch((error) => { console.log(error) })
f.finally(() => { console.log("Promise has been settled") })

