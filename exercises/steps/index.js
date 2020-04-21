// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let step = ''
    if (n === 1) {
        console.log('#')
        return
    }
    for (let i = n; i > 0; i--) {
        step += "#"
    }
    console.log(step)
    steps(n-1)
}

module.exports = steps;
