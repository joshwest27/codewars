// Code challenges *Reverse string variations*
'use strict';

// reverse a string
// function reverseString(str) {
//   let strArr = str.split('');
//   strArr.reverse();
//   return strArr.join('');
// }

// cleaner code from above
// function reverseString(str) {
//   return str.split('').reverse('').join('');
// }

// for loop variation decreasing
// function reverseString(str) {
//   let revString = '';
//   for(let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
//   }
//   return revString;
// }

// for loop variation increasing
// function reverseString(str) {
//   let revString = '';
//   for(let i in str) {
//     revString = str[i] + revString;
//   }
//   return revString;
// }

// for of loop
function reverseString(str) {
  let revString = '';
  for(let char of str) {
    revString = char + revString;
  }
  return revString;
}



// const output = reverseString('hello');
// console.log(output);


function myAnswer() {
  let answer = document.getElementById('show').innerHTML = reverseString('hello');

};
