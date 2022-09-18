function solution (answers) {
    let correct = [0, 0, 0];
    let result = [];
    
    let one = '12345'.repeat(answers.length/5+1);
    let two = '21232425'.repeat(answers.length/8+1);
    let three = '3311224455'.repeat(answers.length/10+1);

    for(let i = 0; i < answers.length; i++){
        if(answers[i] === one[i]*1) correct[0]++;
        if(answers[i] === two[i]*1) correct[1]++;
        if(answers[i] === three[i]*1) correct[2]++;
    }

    let max = Math.max(...correct);

    correct.forEach((val, i) => {
        if(val === max) result.push(i+1);
    })

    return result;
}

console.log(solution([1,2,3,4,5]));