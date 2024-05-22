function squareRoot(arr){
    sqt = num => Math.sqrt(num)
    return arr.map(sqt)
}

let z = [4,16,9,25,169]
console.log(squareRoot(z))