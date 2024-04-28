// step-1: get login button
document.getElementById('login-btn').addEventListener('click', function(){
    // console.log("test......");

    // step-2: email input field
    const userEmailElement = document.getElementById('user-email');
    // console.log(userEmailElement);
    const userEmailValue = userEmailElement.value;
    // console.log(userEmailInput);

    // step-3: password input field
    const userPasswordElement = document.getElementById('user-password');
    // console.log(userPasswordElement);
    const userPasswordValue = userPasswordElement.value;
    // console.log(userPasswordValue);

    // step-4: check condition and redirect
    if(userEmailValue === 'ahnaf@gmail.com' && userPasswordValue === '12345678')
    {
        alert("It is valid user");
        window.location.href = 'bank.html';
    }
    else
    {
        alert("Your email and password is not correct!! please input valid email and password");
    }

    // step-5 : clear input filed value
    userEmailElement.value = '';
    userPasswordElement.value = '';

})