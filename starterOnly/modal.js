function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".form-close")

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal event

closeModalBtn.forEach((span) => span.addEventListener("click", closeModal));

formData[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// close modal form

function closeModal() {
  modalbg.style.display = "none";
}

