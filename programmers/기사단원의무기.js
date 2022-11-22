function solution(number, limit, power) {
    // 1
    let answer = 0;
    for(let i = 1; i <= number; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                if(j * j === i){
                    count++;
                } else {
                    count += 2;
                }
            }
        }
        answer += count > limit ? power : count;
    }
    return answer;

    
    //2
    return [...Array(number)]
            .map((v, i) => {
                v = i + 1;
                let count = 0;
                for(let j = 1; j <= Math.sqrt(v); j++){
                    if(v % j === 0){
                        if(j ** 2 === v){
                            count++;
                        } else {
                            count += 2;
                        }
                    }
                }
                return count > limit ? power : count;
            })
            .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(10, 3, 2));