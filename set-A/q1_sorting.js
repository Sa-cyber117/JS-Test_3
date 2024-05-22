class sorting{
    constructor(arr){
        this.arr = arr
        console.log(this.arr)
    }
    sortingDesc(){
        let res = this.arr.slice().sort((a,b)=> b-a)
        return res
    }
    sortingAsc(){
        let res = this.arr.slice().sort((a,b)=> a-b )
        return res
    }
}
let asd = [15,28,3,14]
let x = new sorting(asd)
console.log(x.sortingAsc())
console.log(x.sortingDesc())

// console.log(sortingAsc(asd))
// console.log(asd.slice().sort((a,b)=> b-a))