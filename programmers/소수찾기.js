function solution (n) {

    // 런타임 에러를 해결하기 위해 홀수만 판별
    // 소수인 2가 빠지고, 소수가 아닌 1이 더해졌기 때문에 개수는 변함 없음
    const arr = Array(Math.floor(n / 2)).fill(0).map((_, index) => index * 2 + 1);

    return arr.filter(item => {
        for(let j = 2; j <= Math.sqrt(item); j++){
            if(item % j === 0) {
                return false;
            }
        } return true;
    }).length;
}

console.log(solution(10));