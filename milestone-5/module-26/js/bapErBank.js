// step-1: get submit button
document.getElementById('submit-button').addEventListener('click', function(){
    // console.log("button clicked");
    // step-2: get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // step-3: get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if(userEmail === "mahaburcse@gmail.com" && userPassword === 'password')
    {
        // console.log("Valid user")
        window.location.href = 'bank.html'
    }
    else
    {
        alert('Invalid User!!Please enter correct email and password.');
    }

})