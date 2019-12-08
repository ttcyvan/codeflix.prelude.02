function keys(obj) {
        //return Object.values(obj);
    let arr = [];
    for(const [key,value] of Object.entries(obj)){ // on reccupere les keys et les values du tableau
        arr.push(key) // on push les values
    }
    return arr
}

console.log(keys({
    "merci":12,
    "age":15,
    "non":"yvan"
}))