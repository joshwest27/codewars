'use strict';

// Code challenges *Reverse string variations*
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
  for(let i = str.length; i >= 0; i--) {
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

// reduce
function reverseString(str) {
  return str.split('').reduce(function(revString, char) {
    return char + revString;
  }, '');
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
  let strArr = str.toLowerCase().split(' ');
  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}

// another variation with map
function capitalizeLetters(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(' ');
}

// another variation with regex
function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  })
}

//display answer four
function myAnswerFour() {
  let answer = document.getElementById('show4').innerHTML = capitalizeLetters('i love javascript');
};

// Code challege *Max characters
// most common character in String
function maxCharacter(str) {
  let charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    }else{
      charMap[char] = 1;
    }
  });
  for(let char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
maxCharacter('javascript');

//display answer five
function myAnswerFive() {
  let answer = document.getElementById('show5').innerHTML = maxCharacter('javascript');
};

// Code challenge *Max characters
// fizz buzz
function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }else if(i % 3 === 0) {
      console.log('fizz');
    }else if(i % 5 === 0) {
      console.log('buzz');
    }else{
      console.log(i);
    }
  }
}

//display answer six
function myAnswerSix() {
  let answer = document.getElementById('show6').innerHTML = "Open developer tool to see this result!";
};

// output
const output = reverseString('hello');
console.log(output);
