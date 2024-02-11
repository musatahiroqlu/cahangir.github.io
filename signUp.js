let nameInput = document.querySelector('#name');
let mailInput = document.querySelector('#mail');
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let signUp = document.querySelector('.Sign');
let logg = document.querySelector('.log');
let users = JSON.parse(localStorage.getItem('USERS')) || [];

signUp.addEventListener('click', btnUp);
logg.addEventListener('click', btnLog);

function btnUp(event) {
  console.log("btnUp clicked");
  event.preventDefault();

  if (isInputEmpty(nameInput) || isInputEmpty(mailInput) || isInputEmpty(usernameInput) || isInputEmpty(passwordInput)) {
    console.log("Inputs are empty"); 
    alert('Please fill in all of the inputs!');
    return;
  }

  let user = {
    name: nameInput.value,
    mail: mailInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
  };

  if (isUserExists(user)) {
    console.log("User already exists");
    alert('This account already exists!');
  } else {
    console.log("Adding user:", user);
    users.push(user);
    localStorage.setItem('USERS', JSON.stringify(users));
    window.location.replace('login.html');
  }
}


function btnLog(event) {
  event.preventDefault();
  window.location.replace('login.html');
}

function isInputEmpty(input) {
  return input.value.trim().length === 0;
}

function isUserExists(newUser) {
  return users.some(user => user.username === newUser.username);
}
