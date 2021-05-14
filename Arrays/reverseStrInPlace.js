function reverseInPlace(string) {
  if (string.length <= 1) {
    return string;
  }

  let p1 = 0;
  let p2 = string.length - 1;
  while (p1 <= p2) {
    let temp = string[p1];
    string[p1] = string[p2];
    string[p2] = temp;
    p1++;
    p2--;
  }

  return string;
}
