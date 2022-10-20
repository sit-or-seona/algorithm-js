function solution (s) {
    
    // !Number.isNaN(s*1) 은 e를 숫자로 인식하기 때문에 에러
    return (s.length === 4 || s.length === 6) && parseInt(s) === s*1
}

console.log(solution("2e34"));