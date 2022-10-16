function solution (s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'.repeat(2).split('');
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2).split('');

    let result = '';
    for(let i of s){
        if(i === ' ') {
            result += ' ';
        } else if(i === i.toUpperCase()) {
            result += upper[(upper.indexOf(i)) + n];
        } else if(i === i.toLowerCase()) {
            result += lower[(lower.indexOf(i)) + n];
        }
    }

    return result;
}

console.log(solution("a B z", 4));