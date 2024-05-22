function factorial(num){
    let res = 1
    if (num ===0 || num===1){
        return 1
    }
    for (let i = num; i>1; i--){
        res *= i
    }
    return res
}

console.log(factorial(5))
console.log(factorial(6)) 