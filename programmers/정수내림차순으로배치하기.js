function solution (n) {
    return (n + '').split('').sort((a,b) => b-a).join('')*1;
}

console.log(solution(118372));