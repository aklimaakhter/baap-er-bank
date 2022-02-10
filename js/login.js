document.getElementById('login-submit').addEventListener('click', function () {
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    // get user passward
    const passwardField = document.getElementById('user-passward');
    const userPassward = passwardField.value;
    console.log(userEmail, userPassward)
    if (userEmail == 'sontan@baap.com' && userPassward == 'secret') {
        console.log('valid email');
        window.location.href = 'banking.html'
    }
})


