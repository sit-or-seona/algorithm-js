function solution (s) {
    let result = '';
    const word = ['zero','one','two','three','four','five','six','seven','eight','nine'];

    let str = '';
    for(let i of s){
        if(i && (i * 1)) result += i;
        else if(i === '0') result += i;
        else str += i;
        if(word.includes(str)) {
            result += word.indexOf(str);
            str = '';
        }
    }
    
    return result * 1;
}

console.log(solution("one4seveneight"));