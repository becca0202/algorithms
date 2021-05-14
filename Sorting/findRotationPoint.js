/* 
Problem: 
 I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary.
*/

// O(log(n)) Time and O(1) Space
function rotationPoint(arrayOfWords) {
  let firstWord = arrayOfWords[0];
  let left = 0;
  let right = arrayOfWords.length - 1;

  while (left < right) {
    let midpoint = Math.floor((left + right) / 2);
    if (arrayOfWords[midpoint - 1] > arrayOfWords[midpoint]) {
      return arrayOfWords[midpoint];
    } else if (arrayOfWords[midpoint] >= firstWord) {
      right = midpoint;
    } else {
      left = midpoint;
    }
  }
  // Array is not rotated
  return 0;
}

function solution(N) {
  let binaryNum = N.toString(2);
  console.log('type of', typeof binaryNum);
  return binaryNum;
}

console.log(solution(1041));
