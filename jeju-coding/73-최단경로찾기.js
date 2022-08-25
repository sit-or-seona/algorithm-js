const graph = {'A': ['B', 'C'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F'],
         'D': ['B'],
         'E': ['B', 'F'],
         'F': ['C', 'E']};

function solution (input) {
    let start = input[0];
    let end = input[2];

    let count = 0;
    let visited = [];
    let queue = [start];


}

console.log(solution('A F'));