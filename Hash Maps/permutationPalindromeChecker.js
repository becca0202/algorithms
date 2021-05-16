function permutationPalindromeChecker(string) {
  let seen = {};
  for (let i = 0; i < string.length; i++) {
    if (seen[string[i]]) {
      seen[string[i]]++;
    } else {
      seen[string[i]] = 1;
    }
  }

  let counter = 0;
  for (let char in seen) {
    if (counter > 1) {
      return false;
    } else if (seen[char] % 2 === 1) {
      counter++;
    }
  }
  return true;
}

console.log(permutationPalindromeChecker('livci'));
