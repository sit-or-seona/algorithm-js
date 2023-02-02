function timeConversion(s) {
  // Write your code here
  const arr = s.slice(0, -2).split(":");

  if (s.includes("PM") && +arr[0] < 12) arr[0] = +arr[0] + 12;
  if (s.includes("AM") && +arr[0] === 12) arr[0] = "00";

  return arr.join(":");
}
