function userPost(){
    // console.log("rrr")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showPost(data));
    // .then(data => console.log(data));
}

function showPost(posts){
    console.log(posts);
    const postContainer = document.getElementById('post-container');
    for(const post of posts)
    {
        // console.log(post)
        let createDiv = document.createElement('div');
        createDiv.classList.add("post-div-container")
        createDiv.innerHTML = `
            <h4>Post-ID: ${post.userId}</h4>
            <h5>Title: ${post.title}</h5>
            <p>Body: ${post.body}</p>
        `
        postContainer.appendChild(createDiv);
    }
}
userPost();