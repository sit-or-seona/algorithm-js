const n = '93';

let count = 0;

for(let i = 1; i <= n*1; i++){
    let str = (i + '').replace(/3/g, '').replace(/6/g, '').replace(/9/g, '');
    if(str === '') count++;
}

console.log(count);