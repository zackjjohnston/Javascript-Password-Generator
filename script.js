// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = ""
var passwordLength = 0
var characterCode = ""
var passwordGen= []
var upperASCII = arrayGenMinToMax (65, 90);
var lowerASCII = arrayGenMinToMax (97, 122);
var numASCII = arrayGenMinToMax (48, 57);
var specialASCII = arrayGenMinToMax (33, 47)
  .concat(arrayGenMinToMax (58, 64)
  ).concat(arrayGenMinToMax (91,96)
  ).concat(arrayGenMinToMax (123,126)
  );  
// Write password to the #password input
function writePassword() {
  for(let i = 0; i < passwordLength; i++) {
    var passwordGen = []
    var characterCode = charSet [Math.floor(Math.random() * passwordLength)]
    passwordGen.push(String.fromCharCode(characterCode))
  }
  return passwordGen.join("")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// TODO: Create prompts for password criteria
//   - Length of password (between 8 and 128 characters) - prompt
//   - Character types (lower/upper cases, numeric, symbols) - boolean "include 'x'"
//   - Validate character types "you want your password to include Uppercase, lowercase and special characters, is this correct?"
// Make password generator:

function arrayGenMinToMax(min, max) {
  var array = []
  for (i = min; i <= max; i++) {
    array.push(i)
  }
  return array
}; 

//   Select characterset
// if (window.confirm("Use uppercase letters?")) charSet = charSet.concat(upperASCII)
// if (window.confirm("Use lowercase letters?")) charSet = charSet.concat(lowerASCII)
// if (window.confirm("Use numbers?")) charSet = charSet.concat(numASCII)
// if (window.confirm("Use special characters?")) charSet = charSet.concat(specialASCII)


//Ask for password length
function passwordPrompt() {
  passwordLength = prompt("Enter password length: between 8 and 128", 8)
}
//Confirm which character sets to use
function charSetPrompt() {
  if (window.confirm("Use uppercase letters?")) charSet = charSet.concat(upperASCII)
  if (window.confirm("Use lowercase letters?")) charSet = charSet.concat(lowerASCII)
  if (window.confirm("Use numbers?")) charSet = charSet.concat(numASCII)
  if (window.confirm("Use special characters?")) charSet = charSet.concat(specialASCII)
}
//Password must contain at least one "character set"
while (charSet == "") {
  charSetPrompt()
}
//Password must be between 8 and 128 characters
while (passwordLength < 8) {
  passwordPrompt()
}
while (passwordLength > 128) {
  passwordPrompt()
}
// passwordPrompt()
// charSetPrompt()
console.log(passwordLength)
console.log(charSet)
console.log(passwordGen)
