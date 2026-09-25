//optional parameter in function
function display(name:string,msg?:string):string{
    return msg?name+msg :name
}
console.log(display("gugan","error msg"))
console.log(display("ram"))