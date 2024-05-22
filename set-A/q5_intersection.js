// Intersection 
function intersectArr(arr, arr2){
    let res = arr.filter(i=> arr2.includes(i))
    return res
}

let asd = [15,28,3,14]
let asd2 = [15,208,3,414]
console.log(intersectArr(asd, asd2))

// string 

function intersectStr(str1, str2){
    let strA = str1.split(" ")
    let strB = str2.split(" ")
    let res = strA.filter(i=> strB.includes(i))
    return res
}
let stri1 = "hello world"
let stri = "hello worldd"
console.log(intersectStr(stri, stri1))