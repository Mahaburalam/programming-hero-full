function a(){
    c();
    console.log("a");
}

function b(){
    console.log("b");
}

setTimeout(()=>{
    console.log("111");
}, 600)

function c(){
    b();
    console.log("c");
}
a();
// b();