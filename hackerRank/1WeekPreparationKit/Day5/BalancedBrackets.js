function isBalanced(s) {
  // Write your code here
  const stack = [];

  for (let i of s) {
    if (i === "(" || i === "[" || i === "{") {
      stack.push(i);
    } else if (i === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else return "NO";
    } else if (i === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else return "NO";
    } else if (i === "}") {
      if (stack[stack.length - 1] === "{") stack.pop();
      else return "NO";
    }
  }
  return stack.length < 1 ? "YES" : "NO";
}
