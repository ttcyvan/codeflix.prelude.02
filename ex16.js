function pick(obj, ...options) {
    const [firstOpts] = options  // const firstOpts = options [0]
    const newObj = {}

    if (typeof firstOpts === 'function') {
      const callback = firstOpts
      // with callback
      for (const item of Object.entries(obj)) {
        const [key, value] = item
        if (callback(value, key) === true) {
          newObj[key] = obj[key]
        }
      }
    } 

    else {
      // with keys
      for (const key of options) {
        if (obj[key] !== undefined) { // obj.key reccupere la valeur de mot clé key
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
}

  const user = {
    firstname: 'Majdi',
    lastname: 'Toumi',
    age: 18
  }

  console.log(pick(user, 'firstname', 'age'))
  console.log(
    pick(user, function(value, key) {
      return Number.isInteger(value)
    })
  )