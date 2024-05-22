function countChar(str, char){
    let c = 0
    for (let i of str){
        if (char === i){
            c +=1
        }
    }
    return c
}

let x = "Hello World dd"
console.log(countChar(x ,"o"))
console.log(countChar(x ,"d"))