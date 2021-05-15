/* 
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30

the function should return 3.
*/

//O(n) Time where n is the number of jumps between X and Y
function solution(X, Y, D) {
  let jumps = 0;
  let curNum = X;
  while (curNum < Y) {
    curNum += D;
    jumps++;
  }
  return jumps;
}

//O(1) Constant time
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
