function mergeArrays(array1, array2) {
  let p1 = 0;
  let p2 = 0;
  let solution = [];
  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] <= array2[p2]) {
      solution.push(array1[p1]);
      p1++;
    } else {
      solution.push(array2[p2]);
      p2++;
    }
  }

  if (p1 < array1.length) {
    while (p1 < array1.length) {
      solution.push(array1[p1]);
      p1++;
    }
  } else if (p2 < array2.length) {
    while (p2 < array2.length) {
      solution.push(array2[p2]);
      p2++;
    }
  }

  return solution;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5];

console.log(mergeArrays(myArray, alicesArray));
