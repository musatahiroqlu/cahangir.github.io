document.addEventListener("DOMContentLoaded", function() {
  let user2 = localStorage.getItem('USERNAME2');
  if (user2) {
      document.getElementById("userr").innerHTML = user2;
      setLogout();
  }
});
let login = document.querySelector('#login');
login.addEventListener('click', loginBtn);
function loginBtn(event) {
  event.preventDefault();
  localStorage.removeItem('USERNAME2');
  setLogout();
  window.location.replace('login.html');
}
function setLogout() {
  const loginLink = document.getElementById("loginLink");
  const userLoggedIn = localStorage.getItem('USERNAME2') !== null;

  if (userLoggedIn) {
    loginLink.innerHTML = "Log Out";
    let shopLink = document.getElementById('shopLink');
shopLink.addEventListener('click', function (event) {
  window.location.href = 'shopping.html';
})
    loginLink.href = "#";
    loginLink.onclick = function () {
      localStorage.removeItem('USERNAME2');
      setLogout();
      alert("You Successufully Logged out!");
    };
  } else {
    loginLink.innerHTML = "Log into account";
    loginLink.href = "index.html";
    loginLink.onclick = loginBtn;
  }
}
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}
