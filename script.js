// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password requirement variables
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~"

// generatePassword function
function generatePassword() {
    // Ask for number of characters
    var numChars = window.prompt("Enter number of characters for password length");

    // If user a user selects a number below 8, an alert pops up that password length must be longer
    if (numChars < 8) {
        window.alert("Password must be at least 8 characters");
        generatePassword();
    
    // If user selects a number greater than 128, an alert pops up that the password length must be shorter
    } else if (numChars > 128) {
        window.alert("Password must not exceed 128 characters");
        generatePassword();
    
    // If user selects a number between 8 and 128, then it saves response for length of password to generate
    } else {
        var passwordLength = numChars;
    }

    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
