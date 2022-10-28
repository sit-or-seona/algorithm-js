function solution(babbling) {
    let answer = 0;
    for(let i of babbling) {
        let check = i
                    .replace(/aya/g, 'A')
                    .replace(/ye/g, 'B')
                    .replace(/woo/g, 'C')
                    .replace(/ma/g, 'D');
        if(check.toUpperCase() !== check) {
            continue;
        } else {
            if(!(
                check.includes('AA') || 
                check.includes('BB') || 
                check.includes('CC') || 
                check.includes('DD')
                )){
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayamaaya"]))