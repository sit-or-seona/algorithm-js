function candy (score){
    score = score.split(" ").sort((a,b)=> b-a).map(Number);
    let answer = 0;

    let set = Array.from(new Set(score));

    for (let i = 0; i < score.length; i++){
        if(score[i] === set[0] || score[i] === set[1] || score[i] === set[2]) {
            answer++;
        }
    }

    return answer;
}

console.log(candy("97 86 75 66 55 97 85 97 97 95"))


// let high = [];

// for (let i = 0; i < score.length; i++){
    
//     if(!high.includes(score[i])){
//         high.push(score[i]);
//         answer++;
//     } else {
//         answer++;
//     }
//     if(high.length === 3) return answer;
// }

