var alphabetlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialChars;
var confirmLength = "";

document.querySelector("#generate")
document.addEventListener("click", writePassword);

function generatePassword() {
  var confirmLength = (prompt("How many characters do you need in your password?"));

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password must have a length between 8-128");
    var confirmLength = (prompt("How many characters do you need in your password?"));
  }

  var confirmLowerCase = confirm("Select if your password requires lower case letters");
  var confirmUpperCase = confirm("Select if your password requires upper case letters");
  var confirmNumeric = confirm("Select if your password requires numbers");
  var confirmSpecialChars = confirm("Select if your password requires special characters");

  while (confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && confirmSpecialChars === false) {
    alert("You must choose one");
    var confirmLowerCase = confirm("Select if your password requires lower case letters");
    var confirmUpperCase = confirm("Select if your password requires upper case letters");
    var confirmNumeric = confirm("Select if your password requires numbers");
    var confirmSpecialChars = confirm("Select if your password requires special characters");
  }

  var passwordCharacters = []

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphabetlower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphabetupper)
  }

  if (confirmNumeric) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmSpecialChars) {
    passwordCharacters = passwordCharacters.concat(special)
  }

  console.log(passwordCharacters)

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}