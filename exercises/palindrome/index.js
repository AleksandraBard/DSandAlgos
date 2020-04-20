// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  if (str.length <= 1) return true;
  if (str[i] === str[j]) {
    let newStr = str.slice(1, j);
    console.log(newStr);
    return palindrome(str.slice(1, j));
  }
  return false;
}

function palindrome(str) {
    let reversed = str.split('').reverse().join('')
    return reversed === str
}


module.exports = palindrome;
