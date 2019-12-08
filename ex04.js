function rest(arr , index = 1) { // commence a compter a parties de 1 et non de 0
   
    return arr.slice(index, arr.length) // la methode slice ne modifier pas les valeur du tableau original
}
// la methode splite peut modifier pas les valeur du tableau original


console.log(rest([12,25,881,5],2))
console.log(rest([12,25,881,5]))
console.log(rest([12,25,881,5],3))