//O(n) time | O(1) space
function bubbleSort(array) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSorted = false;
      }
    }
  }

  return array;
}
