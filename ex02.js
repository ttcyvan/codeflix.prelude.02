function initial(arr, n = 1) {

 return arr.slice(0, arr.length-n)

}

console.log(initial([12,5,25],2))
console.log(initial([12,5,28]))
console.log(initial([12,5,25],-1))