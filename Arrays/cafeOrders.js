function cafeOrderChecker(takeOut, dineIn, served) {
  let takeOutIdx = 0;
  let dineInIdx = 0;
  for (let i = 0; i < served.length; i++) {
    if (takeOutIdx <= takeOut.length - 1 && takeOut[takeOutIdx] === served[i]) {
      takeOutIdx++;
    } else if (
      dineInIdx <= dineIn.length - 1 &&
      dineIn[dineInIdx] === served[i]
    ) {
      dineInIdx++;
    } else {
      return false;
    }
  }
  return true;
}
