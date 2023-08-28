// Check if the password contains at least 1 capital letter, 1 small letter, 1 number, and 1 special character.

function checkPassword(password) {
    if(password.length>8)
    document.getElementById("length").classList.toggle("correct");
  // Check if the password contains at least 1 capital letter.
  if (/[A-Z]/.test(password)) {
    document.getElementById("cap").classList.toggle("correct");
  }
  
  // Check if the password contains at least 1 small letter.
 if(/[a-z]/.test(password))
 document.getElementById("small").classList.toggle("correct");
  // Check if the password contains at least 1 number.
  if(/[0-9]/.test(password))
  document.getElementById("number").classList.toggle("correct");
  // Check if the password contains at least 1 special character.
  if(/[!@#$%^&*()_+-]/.test(password))
  document.getElementById("special").classList.toggle("correct");
  
}
// Add an event listener to the password input field
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("pointerover", (e) => {
  // Get the password value
  const password = passwordInput.value;
  checkPassword(document.querySelector("#password").value);
});
// When the "Check Password" button is clicked, call the checkPassword() function.
