console.log(1)
console.log(2)
console.log(3)
const setIntervalId =  setInterval(()=>{
    console.log(11)
    clearInterval(setIntervalId);
}, 3000);
console.log(4)
console.log(5)