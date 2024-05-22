// removing duplicates 
function noDuplicates(arr){
    return [...new Set(arr)]
}

let myArr = [1,3,2,1,5,"all", 'asv', 'all']
console.log(noDuplicates(myArr)) 