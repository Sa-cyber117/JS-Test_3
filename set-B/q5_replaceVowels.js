//  replace not working

function removeVowels(str){
    let strs = str.toLowerCase()
    // res = strs.replace('a', "").replace('e', "").replace('i', "").replace('o', "").replace('u', "")
    let res = strs.replace(/[aieou]/g, "")
    return res
}

let x = "Heloo removing Only vowels"
console.log(removeVowels(x))