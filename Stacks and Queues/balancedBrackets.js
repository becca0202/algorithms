//O(n) Time and Space where n is the length of the input string
function solution(S) {
  if (S.length === 0) {
    return 1;
  }

  let stack = [];
  let pairs = { ')': '(', ']': '[', '}': '{' };

  for (let i = 0; i < S.length; i++) {
    let curSymbol = S[i];
    if (curSymbol === '(' || curSymbol === '{' || curSymbol === '[') {
      stack.push(curSymbol);
    } else {
      if (pairs[curSymbol] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }

  if (stack.length) {
    return 0;
  } else {
    return 1;
  }
}
