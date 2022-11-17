function solution(number, limit, power) {
    // let answer = 0;
    // for(let i = 1; i <= number; i++){
    //     let count = 0;
    //     for(let j = 1; j <= Math.sqrt(i); j++){
    //         if(i === 1) count++;
    //         if(i % j === 0){
    //             count+=2;
    //             if(count > limit){
    //                 count = power;
    //                 break;
    //             }
    //         }
    //     }
    //     answer += count;
    // }
    // return answer;
    
    
    
    return [...Array(number)]
            .map((v, i) => {
                v = i + 1;
                let count = 0;
                for(let j = 1; j <= v; j++){
                    if(v % j === 0){
                        count+=2;
                        if(count > limit){
                            count = power;
                            break;
                        }
                    }
                }
                return v = count;
            })
            .reduce((acc, cur) => acc + cur, 0)
}

console.log(solution(5, 3, 2));