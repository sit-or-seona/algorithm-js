const graph = {'E': ['D', 'A'],
'F': ['D'],
'A': ['E', 'C', 'B'],
'B': ['A'],
'C': ['A'],
'D': ['E','F']};

function bfs (graph, start) {
    let answer = [];
    let queue = [start];

    while(queue.length !== 0){
        let shift = queue.shift();
        if(!answer.includes(shift)) answer.push(shift);
        let sub = graph[shift].filter(i => !answer.includes(i));
        for(let i of sub){
            queue.push(i);
        }
    }
    return answer.join().replace(/,/g, " ");
}

console.log(bfs(graph, 'E'));