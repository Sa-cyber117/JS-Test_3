function isSameArr(arr,arr2){
    if(arr.length !== arr2.length) return false

    for (let i = 0; i< arr.length; i++){
        if(arr[i] !== arr2[i]){
            return false
        }
    }
    return true
}

let z = [4,16,9,25,169]
let xz = [4,16,9,25,169]
let yz = [4,6,9,25,16]

console.log(isSameArr(yz, z))
console.log(isSameArr(xz, z))
