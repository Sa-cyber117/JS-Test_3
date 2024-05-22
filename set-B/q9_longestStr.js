function longestStr(arr){
    longStr = ""
    for (let str of arr){
        if (str.length > longStr.length){
            longStr = str
        }
    }
    return longStr
}

let z = ['4','16','546vgrw','9','25','169','4']
console.log(longestStr(z))