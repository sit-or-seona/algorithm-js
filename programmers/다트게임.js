function solution(dartResult) {
    let answer = [];
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    const [one, two, three] = dartResult.match(/([0-9]|10)([SDT])([\*\#]?)/g);
    
    for(let i of [one, two, three]) {
        let num = 0;
        if(i[1] === '0') {
            num = 10;
        } else {
            num = i[0]*1;
        }
        
        for(let j of i){
            if(!!bonus[j]) {
                num **= bonus[j];
                answer.push(num);
            }
            if(j === '*') {
                answer[answer.length-1] *= 2;
                answer[answer.length-2] *= 2;
            }
            if(j === '#') {
                answer[answer.length-1] *= -1;
            }
        }
    }
    
    return answer.reduce((acc, cur) => acc += cur, 0);
}

console.log(solution('1S2D*3T'));