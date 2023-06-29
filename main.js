
hamburger = document.querySelector(".Hamburger");
hamburger.onclick = function(){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

// Agrega este código al archivo main.js
const searchIcon = document.querySelector('.search');
const searchBox = document.querySelector('.searchBox');
const searchInput = document.querySelector('.searchBox input[type="text"]');
const closeIcon = document.querySelector('.fa-xmark');

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('active');
  searchInput.focus();
});

closeIcon.addEventListener('click', () => {
  searchBox.classList.remove('active');
  searchInput.value = '';
});






