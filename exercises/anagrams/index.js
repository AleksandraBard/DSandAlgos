// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = stringA.toLowerCase().split('').sort().join('')
    let strB = stringB.toLowerCase().split('').sort().join('')
    let newA = ''
    let newB = ''
    for (let i = 0; i < strA.length; i++) {
        if(!'!?/\.,;:-'.includes(strA[i])) {
            newA += strA[i]
        }
    }
    for (let i = 0; i < strB.length; i++) {
        if(!'!?/\.,;:-'.includes(strB[i])) {
            newB += strB[i]
        }
    }
    if (newA === newB) return true
    else return false
}

module.exports = anagrams;
