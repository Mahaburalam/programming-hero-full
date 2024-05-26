// synchronous example
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// asynchronous example
console.log("Apple")
console.log("Banana")
setTimeout( () => {
    console.log('Orange');
},5000)
console.log("Pine-apple")
console.log("Lemon")