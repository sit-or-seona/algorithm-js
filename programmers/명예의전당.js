function solution(k, score) {
    let answer = [];
    let top = [];
    for (let i of score) {
        top.push(i);
        if(top.length > k) {
            top.splice(top.indexOf(Math.min(...top)), 1)
        }
        answer.push(Math.min(...top));
    }
    return answer;
}