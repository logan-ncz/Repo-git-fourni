// form validation
function firstValidation() {
    let inputValue = document.getElementById("first").value;
    if (inputValue !== null && inputValue.length > 2) {
      return true;
    }  else {
      return false;
    }
  }