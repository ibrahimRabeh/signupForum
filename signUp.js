// Check if the password contains at least 1 capital letter, 1 small letter, 1 number, and 1 special character.

function checkPassword(password, passCofirm) {
  let numberOfConditions = 6;
  // Check if the password contains at least 1 capital letter.
  if (/[A-Z]/.test(password))
    document.getElementById("cap").style.color = "green";
  else {
    document.getElementById("cap").style.color = "grey";
    numberOfConditions--;
  }

  // Check if the password contains at least 1 small letter.
  if (/[a-z]/.test(password))
    document.getElementById("small").style.color = "green";
  else {
    document.getElementById("small").style.color = "grey";
    numberOfConditions--;
  }
  // Check if the password contains at least 1 number.
  if (/[0-9]/.test(password))
    document.getElementById("number").style.color = "green";
  else {
    document.getElementById("number").style.color = "grey";
    numberOfConditions--;
  }
  // Check if the password contains at least 1 special character.
  if (/[!@#$%^&*()_+-]/.test(password))
    document.getElementById("special").style.color = "green";
  else {
    document.getElementById("special").style.color = "grey";
    numberOfConditions--;
  }
  if (password.length >= 8)
    document.getElementById("length").style.color = "green";
  else {
    document.getElementById("length").style.color = "grey";
    numberOfConditions--;
  }
  if (password == passCofirm) {
    document.getElementById("confirm").style.color = "green";
  } else {
    document.getElementById("confirm").style.color = "grey";
    numberOfConditions--;
  }

  
  if (numberOfConditions!=6) {
    document.getElementById("submetbtn").type = "button";
  }
  else
  document.getElementById("submetbtn").type = "submet";

}

// Add an event listener to the password input fields
const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

passwordInput.addEventListener("keyup", (e) => {
  // Get the password value
  checkPassword(passwordInput.value, passwordConfirm.value);
});
passwordConfirm.addEventListener("keyup", (e) => {
  checkPassword(passwordInput.value, passwordConfirm.value);
  
});
