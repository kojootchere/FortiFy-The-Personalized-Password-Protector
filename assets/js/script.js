// Assignment Code
var generateBtn = document.querySelector("#generate"); // Select the button with id 'generate'

// Create arrays to hold possible password values
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split(""); // Array of lowercase letters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Array of uppercase letters
var numeric = "0123456789".split(""); // Array of numbers
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split(""); // Array of special characters

// Function to generate password based on user inputs
function generatePassword() {
  // Ask the user for the password length
  var length = parseInt(prompt("Enter desired password length (choose between 8 and 128 characters)"));

  // Check if the length is a number within the specified range
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please provide a valid length!");
    return;
  }

  // Ask the user for the types of characters to include in the password
  var shouldIncludeLowercase = confirm("Include lowercase characters?");
  var shouldIncludeUppercase = confirm("Include uppercase characters?");
  var shouldIncludeNumeric = confirm("Include numeric characters?");
  var shouldIncludeSpecial = confirm("Include special characters?");

  // Check if at least one type of characters was chosen
  if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecial) {
    alert("You must select at least one character type!");
    return;
  }

  // Create a list of characters to be included in the password based on the user's choices
  var passwordCharacters = [];

  // If a type of characters was chosen, add it to the list
  if (shouldIncludeLowercase) passwordCharacters = passwordCharacters.concat(lowerCase);
  if (shouldIncludeUppercase) passwordCharacters = passwordCharacters.concat(upperCase);
  if (shouldIncludeNumeric) passwordCharacters = passwordCharacters.concat(numeric);
  if (shouldIncludeSpecial) passwordCharacters = passwordCharacters.concat(special);

  // Initialize the password variable
  var password = "";

  // Generate the password by picking random characters from the list
  for (var i = 0; i < length; i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  // Return the generated password
  return password;
}

// Function to write password to the #password input
function writePassword() {
  // Generate the password
  var password = generatePassword();

  // Check if the variable 'password' is undefined. If it is, terminate and exit the current function.
  if (password === undefined) {
    return
  }


  // Select the password field
  var passwordText = document.querySelector("#password");

  // Write the generated password to the password field
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // Call the writePassword function when the generate button is clicked
