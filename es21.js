function map(list, iterateCb){
    let arr =[]

    for(let [key, value] of Object.entries(list)){
        //const [key, value] = item
        const res = iterateCb(value)
        /*let res = iterateCb(value)*/
        arr.push(res)
    }
        return arr
}
console.log(map([1,2,3], function(num) {
    return num *3 
}));

console.log(map({one:1, two:2, three: 3}, function(num, key ) {
    return num *3 
}));