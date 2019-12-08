function initial(arr, n = 1) {

    return arr.slice(arr, arr.length-n)
}

console.log(initial([12,5,25],2))
console.log(initial([12,5,25]))
console.log(initial([12,5,25]))