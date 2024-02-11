let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let signIn = document.querySelector('#button');
signIn.addEventListener('click', signInFunc);
let users = JSON.parse(localStorage.getItem('USERS')) || [];
function signInFunc(event) {
    event.preventDefault();
    if (users.length) {
        let result = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === emailInput.value && users[i].password === passwordInput.value) {
                result = true;
                break;
            }
        }
        if (result) {
            localStorage.setItem('USERNAME2', emailInput.value.toString());
            let admin = {};
            localStorage.setItem('ADMIN', JSON.stringify(admin));
            window.location.replace('computers.html');
        } else {
            alert('Invalid username or password :(');
        }
    } else {
        alert('No users found. Please sign up first.');
    }
}
let idkAl = document.querySelector('.sign');
idkAl.addEventListener('click', btn);

function btn(event) {
    event.preventDefault();
    window.location.replace('signUp.html');
}
