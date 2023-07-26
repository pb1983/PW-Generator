// Assignment code here
var generateBtn = document.querySelector("#generate");

//Write password to the #password input

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let builtArray = [];



// Get references to the #generate element

function generatePassword() {

  let passwordLength = prompt("How long do you want the password?");

  if (passwordLength < 8) {
  return "Your length must be longer than 8 characters";
}  else if (passwordLength > 128) {
    return "Your length must not exceed 120 characters";
}
  
  let upper = confirm("Do you want to include upper case letters?");
  let lower = confirm("Do you want to include lower case letters?");
  let numbers = confirm("Do you want to include numbers?");


  if (upper && lower && numbers === true)  {
    builtArray = [...builtArray, ...lowerAlphabet, ...upperAlphabet, ...numbersArray];
  } else if (upper && lower === true) {
    builtArray = [...builtArray, ...upperAlphabet, ...lowerAlphabet];
  } else if (upper && numbers === true) {
    builtArray = [...builtArray, ...upperAlphabet, ...numbersArray];
  } else if (lower && numbers === true) {
    builtArray = [...builtArray, ...lowerAlphabet, ...numbersArray];
  }  else if (upper === true) {
    builtArray = [...builtArray, ...upperAlphabet];
  } else if (numbers === true) {
    builtArray = [...builtArray, ...numbersArray];
  } else if (lower === true) {
    builtArray = [...builtArray, ...lowerAlphabet];
  } else {
      return "You must select at least one type of input";
    }
 

  
  
  for (let i= 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random()*builtArray.length);
    password += builtArray[randomIndex];
  }
  

  return password;

} 



// generatePassword()

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Ask user how many characters they want
//ask user if they want lower case, upper case, and numbers
//Create error message if they do not have enough characters, too many character, or do not select any uc or lc options
//Be able to return the number of characters the user wants in their password with the options they selected (ucc lcc and numbers)
  //Math.floor(Math.random()*builtArray.length) * passwordLength;

   