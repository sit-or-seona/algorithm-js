function solution(babbling) {
    let answer = 0;
    for(let i of babbling) {
        let check = i
                    .replace(/aya/, '0')
                    .replace(/ye/, '0')
                    .replace(/woo/, '0')
                    .replace(/ma/, '0');
        if(check*1 === 0) answer++;
    }
    return answer;
}

// function solution(babbling) {
//     let answer = 0;
//     const words = ['aya', 'ye', 'woo', 'ma'];
    
//     for(let i of babbling) {
//         for(let j of words) {
//             if(i.includes(j)) {
//                 i = i.slice(0, i.indexOf(j)) + i.slice(i.indexOf(j) + j.length);
//             }
//         }
//         if(!i) answer++;
//     }
//     return answer;
// }

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))