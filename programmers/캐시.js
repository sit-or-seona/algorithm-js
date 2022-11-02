function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    for(let i of cities) {
        i = i.toLowerCase();
        if(cache.includes(i)){
            cache.splice(cache.indexOf(i), 1);
            cache.push(i);
            answer++;
        } else {
            cache.push(i);
            answer += 5;
            if(cache.length > cacheSize) {
                cache.shift();
            }
        }
    }
    return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))