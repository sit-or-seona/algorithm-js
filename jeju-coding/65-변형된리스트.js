const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

let answer = [];

a.forEach((item, i) => {
    if(i%2 === 0) {
        answer.push([item, b[i]]);
    } else {
        answer.push([b[i], item]);
    }
})

console.log(answer);
