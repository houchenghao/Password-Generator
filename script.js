// Assignment Code
var generateBtn = document.querySelector("#generate");

function containsOnlyNumbers(x) {
  return /^\d+$/.test(x);
}

function generatePassword(){
  let Upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let chars = "abcdefghijkomnopqrstuvwxyz"
  let Numbers = "0123456789"
  let SpecialCharacters ="\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~" ;
  let password;
 

  do {
    var NumberOfCharacters_str = window.prompt("How many characters would you like your password to contain?");

    if(!NumberOfCharacters_str){
      return;
    }

    if(containsOnlyNumbers(NumberOfCharacters_str)===false){
      var EnterNumber = window.confirm("please enter numbers");
      if(!EnterNumber){
        return;
      }else{
        continue;
      }
    }else if (Number(NumberOfCharacters_str)<8 || Number(NumberOfCharacters_str)>128){
      var NumberLength = window.confirm("The length should be at least 8 characters and no more than 128 characters");
      if(!NumberLength){
        return;
      }else{
        continue;
      }
    }else{
      break;
    }
  } while (true);
  
  var SpecialCharactersOrNot = window.confirm("Click Ok to confirm including special characters");
  if(SpecialCharactersOrNot){
    chars = chars + SpecialCharacters;
  }

  var UppercharsOrNot = window.confirm("Click Ok to confirm including upper characters");
  if(UppercharsOrNot){
    chars = chars + Upperchars;
  }

  var NumericCharacters= window.confirm("Click Ok to confirm including numeric characters");
  if(NumericCharacters){
    chars = chars + Numbers;
  }
  
  for (let i=0; i<Number(NumberOfCharacters_str); i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length));    
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
