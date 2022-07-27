function twogram (str) {
    let answer = "";
    for(let i = 0; i < str.length - 1; i++){
        answer += str[i] + str[i+1] + '\n';
    }
    return answer;
}

console.log(twogram('Javascript'));