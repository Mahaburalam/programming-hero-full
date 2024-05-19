function showUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => displayUser(data));
}

function displayUser(users){
    // console.log(data);
    const UL = document.getElementById("user-list");
    for(let user of users)
        {
            const Li = document.createElement('li');
            Li.innerText = user.name;
            UL.appendChild(Li);
        }
}