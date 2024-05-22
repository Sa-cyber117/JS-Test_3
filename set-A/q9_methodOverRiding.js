function mulByTwo(arr){
    newArr = []
    for (let i = 0; i<arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}

let x = [1,2,3,45,6,7]
console.log(mulByTwo(x))