function invert(obj) {

   let newobj = {};

   for(const [key, value] of Object.entries(obj) ){

      newobj[value] = key
   }
   return newobj
}


console.log(invert({
    "merci":12,
    "age":15,
    "non":"yvan"
}))

