// // // program to check if the string is palindrome or not

// function checkPalindrome(string) {
//   const length = string.length;

//   for (let i = 0; i < length / 2; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[length - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// const string = prompt("Enter a string: ");

// const result = checkPalindrome(string);

// console.log(result);

function checkPalindrome() {
  const inputString = document.getElementById("inputString").value;
  const length = inputString.length;

  for (let i = 0; i < length / 2; i++) {
    if (inputString[i] !== inputString[length - 1 - i]) {
      showResult("It is not a palindrome");
      return;
    }
  }
  showResult("It is a palindrome");
}

function showResult(resultText) {
  const resultElement = document.getElementById("result");
  // resultElement.textContent = resultText;
  resultElement.innerHTML = `
   <h3>Result</h3>
    <p>${resultText}</p>
  `;
}
