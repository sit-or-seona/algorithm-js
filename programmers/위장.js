function solution(clothes) {
    let answer = 1;
    const obj = {};
    
    for(const cloth of clothes) {
        obj[cloth[1]] = (obj[cloth[1]] || 0) + 1;
    }
    
    for(const key in obj){
        answer *= obj[key] + 1
    }
    return answer - 1;
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log(solution(clothes));