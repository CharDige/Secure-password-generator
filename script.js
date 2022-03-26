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
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";


// generatePassword function
function generatePassword() {
    // Ask for number of characters
    var numChars = window.prompt("Enter number of characters for password length");

    // If user presses cancel when prompted for password length, immediately end function
    if (!numChars) {
        return;
    }

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

    // Ask if user wants uppercase, lowercase, numbers and special characters in their password
    var uppercaseRequest = window.confirm("Do you want uppercase characters in your password?");
    var lowercaseRequest = window.confirm("Do you want lowercase characters in your password?");
    var numberRequest = window.confirm("Do you want numbers in your password?");
    var specialCharactersRequest = window.confirm("Do you want special characters in your password?");

    // If all requests are cancelled, an alert to pop up to say at least one needs to be selected
    if (!uppercaseRequest === !lowercaseRequest === !numberRequest === !specialCharactersRequest) {
        window.alert("You must select at least one of the password requirements to generate a password");
        generatePassword();
    
    // If uppers are selected but no others are, generate a random password at the selected length with only uppercase characters
    } else if (uppercaseRequest && !lowercaseRequest && !numberRequest && !specialCharactersRequest) {
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppers.charAt(Math.floor(Math.random() * uppers.length));
        }
        return result;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
