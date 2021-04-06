// Assignment Code
var generateBtn = document.querySelector("#generate");
//Character Types
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var symbol = "!@#$%^&*()-_+=~`[]|";
//Blank variable to fill with eligible characters
var charSet = ""
//Blank variable to fill with generated password
var password

generateBtn.addEventListener("click", writePassword);

//Ask for password length
function passwordPrompt() {
  passwordLength = prompt("Enter password length: between 8 and 128", 8)
}
//Ask for password length
var passwordLength = prompt("How many characters long should the password be (Must be between 8 and 128)");
if (passwordLength <8 || passwordLength > 128) {
  alert("Password must contain between 8 and 128 characters")
}
//Confirm which character sets to use
var useLower = confirm("Should password contain lowercase letters?")
var useUpper = confirm("Should password contain uppercase letters?")
var useNum = confirm("Should password contain numbers?")
var useSymbol = confirm("Should password contain symbols?")

if (useLower) {
  charSet = charSet += lowerCase
}
if(useUpper) {
  charSet = charSet +=
}
 //If user chooses no characters
if(!useLower && !useUpper && !useNum && !useSymbol) {
    userChoices = alert("You must select at least one character type to generate a password");

