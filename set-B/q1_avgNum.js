function findAvg(arr){
    let s = 0
    for (let i = 0; i<arr.length; i++){
        s = arr[i] + s
    }
    res = s/arr.length
    return res
}

let z = [4,16,9,25]
console.log(findAvg(z))


let asd = [15,28,3,14]
console.log(findAvg(asd))