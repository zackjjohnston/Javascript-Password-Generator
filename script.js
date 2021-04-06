// Assignment Code
var generateBtn = document.querySelector("#generate");
//Character Types
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var symbol = "!@#$%^&*()-_+=~`[]|";




function generatePassword() {
  //Ask for password length
  var passwordLength = prompt("How many characters long should the password be (Must be between 8 and 128)");
  if (!passwordLength) {
    passwordLength = alert("You must enter a password length between 8 and 128")
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters")
  }
  else{
    console.log(passwordLength)
    //Blank variable to fill with generated password
    var password = ""
    //Blank variable to fill with eligible characters
    var charSet = ""
    //Confirm which character sets to use
    var useLower = confirm("Should password contain lowercase letters?")
    var useUpper = confirm("Should password contain uppercase letters?")
    var useNum = confirm("Should password contain numbers?")
    var useSymbol = confirm("Should password contain symbols?")
    //Take our confirm values and add to the valid charSet as necessary
    if(useLower === true) {
      charSet = charSet += lowerCase
    }
    if(useUpper === true) {
      charSet = charSet += upperCase
    }
    if(useNum === true) {
      charset = charSet += num
    }
    if(useSymbol === true) {
      charset = charSet += symbol
    }
    console.log(charSet)
    //If user chooses no characters
    if(!useLower && !useUpper && !useNum && !useSymbol) {
        charSet = alert("You must select at least one character type to generate a password");
    }
    //for loop that generates randomly from our charSet, until we have passwordLength number of characters
    for (i = 0; i < passwordLength; i++) {
        var randomChar = charSet[Math.floor(Math.random() * charSet.length)];
    
        password += randomChar;
      }
  }
  return password;
}
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  generateBtn.addEventListener("click", writePassword);