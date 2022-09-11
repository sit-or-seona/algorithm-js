function solution (lottos, win_nums) {
    let answer;
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let correct = lottos.filter(i => win_nums.includes(i)).length;

    let zero = lottos.filter(i => i === 0).length;

    return [rank[correct+zero], rank[correct]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));