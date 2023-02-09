function palindromeIndex(s) {
  if (s === s.split("").reverse().join("")) {
    return -1;
  }

  let modifiedS = "";
  const length = s.length;
  for (let i = 0; i < length / 2; i++) {
    if (s[i] !== s[length - 1 - i]) {
      modifiedS = s.substring(0, i) + s.substring(i + 1);
      if (modifiedS === modifiedS.split("").reverse().join("")) return i;

      modifiedS = s.substring(0, length - 1 - i) + s.substring(length - i);
      if (modifiedS === modifiedS.split("").reverse().join(""))
        return length - 1 - i;
    }
  }
  return -1;
}
