/* Problem:
Given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1

the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.
*/

//Optimized Space
//O(n * log(n)) Time and O(1) Space where n is the length of the input array
function solution(A) {
  if (A.length === 0) {
    return 0;
  }
  A.sort((a, b) => a - b);
  let curNum = A[0];
  let counter = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== curNum) {
      counter++;
      curNum = A[i];
    }
  }
  return counter;
}

//Optimized Time
//O(n) Time and O(n) Space where n is the length of the input array
function solution(A) {
  let nums = {};
  for (let i = 0; i < A.length; i++) {
    if (nums[A[i]]) {
      nums[A[i]]++;
    } else {
      nums[A[i]] = 1;
    }
  }

  let counter = 0;
  for (let num in nums) {
    counter++;
  }
  return counter;
}
