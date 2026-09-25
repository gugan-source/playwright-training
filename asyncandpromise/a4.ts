function cal(): Promise<number> {
    return new Promise((resolve, reject) => {
        let number=Math.random(); // it will take random no from 0 to1
        setTimeout(() => {
            if (number > 0.5) {
                resolve(number);
            } else {
                reject(new Error("Number is not greater than 0.5"));
            }   
        }, 2000);
    })
}
cal().then((result) => { console.log(result) })
.catch((error) => { console.log(error.message) })