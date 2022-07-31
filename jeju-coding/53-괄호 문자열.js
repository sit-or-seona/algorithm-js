function answer (arr) {
    const str = arr.split("");
    let count = 0;

    // 괄호 개수가 같지 않으면 false
    let left = str.filter((i) => i === "(");
    let right = str.filter((i) => i === ")");
    if(left.length !== right.length) return "NO";

    for(let i of str){
        if(i === "(") {
            count++;
        } else if(i === ")"){
            count--;
            if(count < 0){
                return "NO";
            }
        }
    }

    if(count !== 0) return "NO";
    else return "YES";
}

console.log(answer('(((()())))'))