function solution(A) {
  let map = new Map();

  if (A.length === 0) {
    return A;
  }

  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      map.set(A[i], map.get(A[i]) + 1);
    } else {
      map.set(A[i], 1);
    }
  }

  for (const [key, value] of map.entries()) {
    if (value % 2 === 1) {
      return key;
    }
  }
}
