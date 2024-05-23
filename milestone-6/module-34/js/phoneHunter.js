// console.log("test")
const loadPhone = async () =>{
    const url = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const res = await url.json();
    const data = res.data;
    // console.log(data);
    displayPhone(data)
}

const displayPhone = (phones) => {
    phones.forEach(phone =>{
        console.log(phone);
    })
}

loadPhone();