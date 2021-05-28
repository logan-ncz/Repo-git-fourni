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
const closeModalBtn = document.querySelectorAll(".close")
const form = document.querySelector("form");

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// form validation functions

function firstValidation() {
	let inputValue = document.getElementById("first").value;
	if (inputValue !== null && inputValue.length < 2) return true;
	else return false;
}

function lastValidation() {
	let inputValue = document.getElementById("last").value;
}

function emailValidation() {
	let inputValue = document.getElementById("email").value;
}

function quantityValidation() {
	let inputValue = document.getElementById("quantity").value;
}
function locationValidation() {}

function checkboxValidation() {
	let inputValue = document.getElementById("checkbox1").value;
}

// close modal event

closeModalBtn.forEach((span) => span.addEventListener("click", closeModal));

form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// close modal form

function closeModal() {
  modalbg.style.display = "none";
}

