function solution (s) {

    // 1. 정규표현식 - 런타임에러
    // let countP = s.match(/p/gi).length ?? 0;
    // let countY = s.match(/y/gi).length ?? 0;
    // return countP === countY;

    // 2. for of 반복문
    let answer = 0;
    for(let i of s){
        if(i === 'p' || i === 'P') {
            answer++;
        }else if(i === 'y' || i === 'Y'){
            answer--;
        }
    }
    return answer === 0;
}

console.log(solution("pPoooyY"));