//async function with promise
async function fetchData(): Promise<number> {
    return 30

}
fetchData().then((result) => { console.log(result) })
//async function without promise
async function fetchSimpleData() {
    throw new Error("An error occurred while fetching data")
}
fetchSimpleData().catch((error) => { console.log(error.message) })