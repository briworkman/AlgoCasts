// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ! *******Solution One ********/

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// ! *******Solution Two ********/

// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

//*******Solution Three ********/

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
