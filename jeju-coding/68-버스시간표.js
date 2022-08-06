const bus = ["12:30", "13:20", "14:13"];
const now = "12:40";

let answer = [];

let nowMin = now.split(":").map(Number);
nowMin = nowMin[0] * 60 + nowMin[1];

for(let i of bus){
    let busMin = i.split(":").map(Number);
    busMin = busMin[0] * 60 + busMin[1];
    if((nowMin - busMin) > 0) {
        answer.push('지나갔습니다');
    } else {
        let gap = busMin - nowMin;
        let hour = String(Math.floor(gap/60)).padStart(2, '0');
        let min = String(gap%60).padStart(2, '0');
        answer.push(`${hour}시간 ${min}분`);
    }
}

console.log(answer);