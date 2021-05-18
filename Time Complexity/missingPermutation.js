//Problem: In a list of integers

//O(n * log(n)) T and O(1) S
function solution1(A) {
  if (A.length === 0) {
    return 1;
  }

  A.sort((a, b) => a - b);
  let counter = 1;
  for (let i = 0; i < A.length; i++) {
    if (counter !== A[i]) {
      return counter;
    }
    counter++;
  }
  return counter;
}

//Summation - Find the total sum of all numbers and subtract it from n*(n+1)/2, where n is the length of the expected array. The number left over is the missing value

//More optimal time because we don't have to sort, and the calculations happen in constant time

//O(n) T and O(1) S
function solution2(A) {
  let n = A.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let givenSum = 0;
  for (let num of A) {
    givenSum += num;
  }
  return expectedSum - givenSum;
}
