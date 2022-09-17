function solution (n, lost, reserve) {

    let realLost = lost.filter(i => !reserve.includes(i)).sort((a,b) => a - b);
    let realReserve = reserve.filter(i => !lost.includes(i)).sort((a,b) => a - b);

    realReserve.forEach(i => {
        if(realLost.includes(i-1)) {
            realLost.shift();
        }else if(realLost.includes(i+1)){
            realLost.shift();
        }
    })
    
    return n - realLost.length;
}

console.log(solution(5, [2,4], [1,3,5]));