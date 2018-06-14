// Code challenges *Reverse string variations*
'use strict';

// reverse a string
function reverseString(str) {
  let strArr = str.split('');
  strArr.reverse();
  return strArr.join('');
}

// cleaner code from above
function reverseString(str) {
  return str.split('').reverse().join('');
}

// for loop variation decreasing
function reverseString(str) {
  let revString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}

// for loop variation increasing
function reverseString(str) {
  let revString = '';
  for(let i in str) {
    revString = str[i] + revString;
  }
  return revString;
}

// for of loop
function reverseString(str) {
  let revString = '';
  for(let char of str) {
    revString = char + revString;
  }
  return revString;
}

// for each
function reverseString(str) {
  let revString = '';
  str.split('').forEach(function(char) {
    revString = char + revString;
  });
  return revString;
}

// display answer one
function myAnswerOne() {
  let answer = document.getElementById('show1').innerHTML = reverseString('hello');

};

// Code challenge *Palindrome*

// check if sting is a palindrome
function isPalindrome(str) {
  let revString = str.split('').reverse().join('');
  return revString === str;
}

// display answer two
function myAnswerTwo() {
  let answer = document.getElementById('show2').innerHTML = isPalindrome('radar');

};


// Code challenge *Reverse and integer
// reverse and integer
function reverseInt(int) {
  let revInt = int.toString().split('').reverse().join('');
  return parseInt(revInt) * Math.sign(int) ;
}

// display answer three
function myAnswerThree() {
  let answer = document.getElementById('show3').innerHTML = reverseInt(-12345);

};


// Code challenge *Capitalize letters
// capitalize the first letter of each word
function capitalizeLetters(str) {

}

// output
// const output = isPalindrome('hello');
// console.log(output);
