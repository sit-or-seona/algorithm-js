function minimumBribes(q) {
  // Write your code here
  let answer = 0;

  for (let i in q) {
    if (q[i] > +i + 3) {
      console.log("Too chaotic");
      return;
    }
    for (let j = Math.max(q[i] - 2, 0); j < i; j++) {
      if (q[i] < q[j]) answer++;
    }
  }

  console.log(answer);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
minimumBribes([2, 5, 1, 3, 4]);
