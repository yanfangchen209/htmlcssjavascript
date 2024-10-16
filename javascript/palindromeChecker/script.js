//empty-aler, a, _eye(true), eyE(true)
function checkPalindrome() {
  
  let userInput = document.getElementById("text-input").value;

  if (!userInput || userInput.trim() === '') {
    alert("Please input a value");
    //must return
    return;

  }

let divarea = document.getElementById("result");

if (isPanlindrome(userInput)) {
  divarea.textContent = userInput + " is a palindrome";
} else {
  divarea.textContent = userInput + " is not a palindrome";
}



}

/*You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.*/

function isPanlindrome(input) {
  //must initialize
  let newStr = "";
  for (let c of input){
    c = c.toLowerCase();
    if (isAlphaNumeric(c)) {
      newStr += c;
    }
  }
  console.log(newStr);
  //use two pointer to check if a alphanumeric word is palindrome
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  } 
  return true;


}

function isAlphaNumeric(c) {

  let code = c.charCodeAt(0);
  if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return true;
  } else {
    return false;
  }
}