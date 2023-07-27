
var generateBtn = document.querySelector("#generate");



let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let charArray = ["!", "@", "#", "$", "%", "^", "&", "*",];

let builtArray = [];

let password = ""; 



function generatePassword() {

  password = "";
  builtArray = [];
  let passwordLength = prompt("How long do you want the password?");

  if (passwordLength < 8) {
  return "Your length must be longer than 8 characters. Please try again. ";
}  else if (passwordLength > 128) {
    return "Your length must not exceed 128 characters. Please try again.";
}
  

    if (confirm("Do you want to include upper case letters?")) {
    builtArray = [...builtArray, ...upperAlphabet];
    }

    if (confirm("Do you want to include lower case letters?")) {
      builtArray = [...builtArray, ...lowerAlphabet];
    }

   if (confirm("Do you want to include numbers?")) {
      builtArray = [...builtArray, ...numbersArray]; 
    }

   if (confirm("Do you want special characters?")) {
      builtArray = [...builtArray, ...charArray];
    } 

   if (builtArray.length === 0) {
    return "You must select at least one type of character. Please try again.";
   }

    
  for (let i= 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random()*builtArray.length);
    password += builtArray[randomIndex];
  }
  
  return password;

}


// Write password to the #password input
function writePassword() {
  password = generatePassword();
  console.log(password);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);