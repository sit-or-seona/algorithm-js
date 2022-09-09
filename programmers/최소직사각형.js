function solution (sizes) {

    let width = [];
    let height = [];

    for(let i of sizes){
        i.sort((a,b) => b-a);
        width.push(i[0]);
        height.push(i[1]);
   }

    return Math.max(...width) * Math.max(...height);
}

console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));