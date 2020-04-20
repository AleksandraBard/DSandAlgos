// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {}
    let count = 0
    let max = ''
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            if(obj[str[i]]) {
                obj[str[i]]++
            } else {
                obj[str[i]] = 1
            }
        }
    }
    for (let key in obj) {
        if (obj[key] > count) {
            count = obj[key]
            max = key
        }
    }
    return max
}




module.exports = maxChar;
