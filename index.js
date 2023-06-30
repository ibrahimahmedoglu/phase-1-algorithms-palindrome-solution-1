function isPalindrome(word) {
  // reverse the input string
  const reversedWord = word.split("").reverse().join("");
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Split the word into an array of characters
  - Reverse the array of characters
  - Join the reversed array back into a string
  - Compare the original word with the reversed word
  - Return true if they are equal, false otherwise
*/

/*
  Solution Explanation:
  - The function takes a word as input and splits it into an array of characters.
  - The array is reversed using the reverse() method.
  - The reversed array is joined back into a string using join('').
  - Finally, the function compares the original word with the reversed word and returns true if they are equal, false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
