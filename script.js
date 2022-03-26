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
    var numChars = window.prompt("Enter number of characters for password length", "Type in number of characters");
    numChars = parseInt(numChars);

    if (isNaN(numChars)) {
        window.alert("Must provide a number for password length");
    }

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
    if (!uppercaseRequest && !lowercaseRequest && !numberRequest && !specialCharactersRequest) {
        window.alert("You must select at least one of the password requirements to generate a password");
        generatePassword();
    
    // If uppers are selected but no others are, generate a random password at the selected length with only uppercase characters
    } else if (uppercaseRequest && !lowercaseRequest && !numberRequest && !specialCharactersRequest) {
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppers.charAt(Math.floor(Math.random() * uppers.length));
        }
        return result;
    
    // If lowers are selected but no others are, generate a random password at the selected length with only lowercase characters
    } else if (!uppercaseRequest && lowercaseRequest && !numberRequest && !specialCharactersRequest) {
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += lowers.charAt(Math.floor(Math.random() * lowers.length));
        }
        return result;
    
    // If numbers are selected but no others are, generate random password at the selected length with only numbers
    } else if (!uppercaseRequest && !lowercaseRequest && numberRequest && !specialCharactersRequest) {
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += nums.charAt(Math.floor(Math.random() * nums.length));
        }
        return result;

    // If special characters are selected but no others are, generate random password at the selected length with only special characters
    } else if (!uppercaseRequest && !lowercaseRequest && !numberRequest && specialCharactersRequest) {
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        }
        return result;

    // If uppers and lowers are selected, but nums and special characters aren't, generate random password with only uppers and lowers
    } else if (uppercaseRequest && lowercaseRequest && !numberRequest && !specialCharactersRequest) {
        var uppersLowers = uppers + lowers;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppersLowers.charAt(Math.floor(Math.random() * uppersLowers.length));
        }
        return result;

    // If uppers and nums are selected, but others aren't, generate random password with only uppers and nums
    } else if (uppercaseRequest && !lowercaseRequest && numberRequest && !specialCharactersRequest) {
        var uppersNums = uppers + nums;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppersNums.charAt(Math.floor(Math.random() * uppersNums.length));
        }
        return result;

    // If uppers and specialChars are selected, but others aren't, generate random password with only uppers and specialChars
    } else if (uppercaseRequest && !lowercaseRequest && !numberRequest && specialCharactersRequest) {
        var uppersSpecial = uppers + specialChars;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppersSpecial.charAt(Math.floor(Math.random() * uppersSpecial.length));
        }
        return result;

    // If lowers and nums are selected, but others aren't, generate random password with only lowers and nums
    } else if (!uppercaseRequest && lowercaseRequest && numberRequest && !specialCharactersRequest) {
        var lowersNums = lowers + nums;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += lowersNums.charAt(Math.floor(Math.random() * lowersNums.length));
        }
        return result;

    // If lowers and specialChars are selected, but others aren't, generate random password with only lowers and specialChars
    } else if (!uppercaseRequest && lowercaseRequest && !numberRequest && specialCharactersRequest) {
        var lowersSpecial = lowers + specialChars;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += lowersSpecial.charAt(Math.floor(Math.random() * lowersSpecial.length));
        }
        return result;

    // If nums and specialChars are selected, but others aren't, generate random password with only nums and specialChars
    } else if (!uppercaseRequest && !lowercaseRequest && numberRequest && specialCharactersRequest) {
        var numsSpecial = nums + specialChars;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += numsSpecial.charAt(Math.floor(Math.random() * numsSpecial.length));
        }
        return result;

    // If uppers, lowers and nums are selected, but specialChars aren't, generate random password with only uppers, lowers and nums
    } else if (uppercaseRequest && lowercaseRequest && numberRequest && !specialCharactersRequest) {
        var uppersLowersNums = uppers + lowers + nums;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppersLowersNums.charAt(Math.floor(Math.random() * uppersLowersNums.length));
        }
        return result;

    // If uppers, lowers and specialChars are selected, but nums aren't, generate random password with only uppers, lowers and specialChars
    } else if (uppercaseRequest && lowercaseRequest && !numberRequest && specialCharactersRequest) {
        var uppersLowersSpecial = uppers + lowers + specialChars;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppersLowersSpecial.charAt(Math.floor(Math.random() * uppersLowersSpecial.length));
        }
        return result;

    // If uppers, nums and specialChars are selected, but lowers aren't, generate random password with only uppers, nums and specialChars
    } else if (uppercaseRequest && !lowercaseRequest && numberRequest && specialCharactersRequest) {
        var uppersNumsSpecial = uppers + nums + specialChars;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += uppersNumsSpecial.charAt(Math.floor(Math.random() * uppersNumsSpecial.length));
        }
        return result;

    // If lowers, nums and specialChars are selected, but uppers aren't, generate random password with only lowers, nums and specialChars
    } else if (!uppercaseRequest && lowercaseRequest && numberRequest && specialCharactersRequest) {
        var lowersNumsSpecial = lowers + nums + specialChars;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += lowersNumsSpecial.charAt(Math.floor(Math.random() * lowersNumsSpecial.length));
        }
        return result;

    // If all selections are made, a random password is generated using all types of characters
    } else (uppercaseRequest && lowercaseRequest && numberRequest && specialCharactersRequest); {
        var allChars = uppers + lowers + nums + specialChars;
        var result = ' ';
        for (var i = 0; i < passwordLength; i++) {
            result += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        return result;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
