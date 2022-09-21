function solution (participant, completion) {
    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]) return participant[i];
    }
}

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]));