// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function gets you the randomness.
function randomElement(arr) {
  var random = Math.random();
  var index = Math.floor(random * arr.length);
  return arr[index];
}

// Error
var error = 'ERROR';

// Password generator
function passwordGenerator() {

// Blank password
var password = '';

// Accepted Criteria
var acceptedCriteria = [];

// Characters
var charNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '?', '<', '>', ':', '{', '}', '[', ']'];

// Password content criteria
var passwordNumbers = window.confirm("Would you like to have numbers in your password?");
var passwordUppercase = window.confirm("Would you like to have uppercase letters in your password?");
var passwordLowercase = window.confirm("Would you like to have lowercase letters in your password?");
var passwordSymbols = window.confirm("Would you like to have symbols in your password?");

// Password length criteria
var passwordLength = window.prompt("How many characters would you like your password to have? You can choose between 8-128.");
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("You have chosen a number that is below 8 or above 128.  Please choose a number that is in between 8 and 128.");
  return error
}

// Logic for users choices
if (passwordNumbers === true) {
  acceptedCriteria = acceptedCriteria.concat(charNumbers);
  password = password + randomElement(charNumbers);
}

if (passwordUppercase === true) {
  acceptedCriteria = acceptedCriteria.concat(charUppercase);
  password = password + randomElement(charUppercase);
}

if (passwordLowercase === true) {
  acceptedCriteria = acceptedCriteria.concat(charLowercase);
  password = password + randomElement(charLowercase);
}

if (passwordSymbols === true) {
  acceptedCriteria = acceptedCriteria.concat(charSymbols);
  password = password + randomElement(charSymbols);
}

if (password === '') {
  window.alert("You need to select at least one of the options.");
  return error
}

// The final password with user chosen criteria
for(var i = password.length; i < passwordLength; i++) {
  password = password + randomElement(acceptedCriteria);
}
return password 
}

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


