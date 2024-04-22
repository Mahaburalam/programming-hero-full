const postButton = document.getElementById('post-button').addEventListener('click', function(){
    // console.log("hjbdhgbk");
    const postArea = document.getElementById('post-area');
    // console.log(postArea);
    const postValue = postArea.value;
    // console.log(postValue);
    const mainSection = document.getElementById('section-div');
    const createSection = document.createElement('section');
    // console.log(createSection);
    mainSection.appendChild(createSection);
    createSection.innerText = postValue;
    postArea.value = '';
});
// const mainSection = document.getElementById('section-div');
// // console.log(createSection);
// mainSection.appendChild(createSection);

const createSection = document.createElement('section');
// add class name using dom
const addClass = createSection.classList.add('my-custom-comment-section');
// console.log(createSection);
// console.log(addClass);