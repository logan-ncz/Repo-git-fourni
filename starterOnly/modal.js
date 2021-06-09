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
const heroSection = document.querySelector(".hero-section")
const form1 = document.querySelector("form")

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
  heroSection.style.display = "none";
}

// close modal event

closeModalBtn.forEach((span) => span.addEventListener("click", closeModal));

formData[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// close modal form

function closeModal() {
  modalbg.style.display = "none";
  heroSection.style.display = "grid";
  form1.reset();
}

