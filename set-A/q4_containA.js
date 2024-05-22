function containsA(strs){
    let str = strs.split(" ")   // It converts the **string** to **array** so .toLowerCase() won't work.
    // return str
    // let x = str.toLowerCase()  // ref2. line no.2
    // return x
    // let incA = str.includes("a")     // some() can be used to check for true or false
    // return incA
    res = str.filter(i => i.toLowerCase().includes("a"))    // for each i in the array checks if it includes a or not only where the conditions are                                                       are satisfied the new array will store the blalvbaojubvav
    return res
}
 
let myArr = "Hai Are you fain"
console.log(containsA(myArr))

function retWa(arr){
    return arr.filter(str => str.toLowerCase().includes('a'))
}

const a = ['hello', 'date', 'Awit']
console.log(retWa(a))