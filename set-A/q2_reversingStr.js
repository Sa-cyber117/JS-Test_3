function revStr(str){
    res = str.split("").reverse().join("")
    return res
}

let x = "Hello World!"
console.log(revStr(x))