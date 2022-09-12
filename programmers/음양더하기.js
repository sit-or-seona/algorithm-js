function solution (absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => 
        acc += (signs[i] === true ? cur : -cur),0)
}

console.log(solution([4,7,12],[true,false,true]));