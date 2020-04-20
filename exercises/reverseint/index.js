// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numStr;
  if (n < 0) {
    numStr = String(-1 * n);
    let reversedStr = numStr.split("").reverse().join("");
    let reversedNum = Number(reversedStr) * -1;
    return reversedNum;
  }
  numStr = String(n);
  let reversedStr = numStr.split("").reverse().join("");
  let reversedNum = Number(reversedStr);
  return reversedNum;
}

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('')

     return parseInt(reversed) * Math.sign(n)   
}


module.exports = reverseInt;
