const graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']};

function dfs(graph, start){
  let answer = [];
  let stack = [start];

  while(stack.length !== 0){
    let pop = stack.pop();
    if(!answer.includes(pop)) answer.push(pop);
    let sub = graph[pop].filter(i => !answer.includes(i));
    for(let i of sub){
      stack.push(i);
    }
  }
  return answer.join().replace(/,/g, " ");
}
          
          
console.log(dfs(graph, 'E'));