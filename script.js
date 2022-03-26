// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~"


function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
