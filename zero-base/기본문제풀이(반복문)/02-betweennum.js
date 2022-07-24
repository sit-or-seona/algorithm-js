function answer(x,y) {
    let result = [];

//     if(y > x){
//         for(let i = 0; i <= y-x; i++){
//             result[i] = x+i;
//         }
// } else {
//     for(let i = 0; i <= x-y; i++){
//         result[i] = y+i;
//     }
// }
//     return result;
// }

    //타 언어에서도 실행되는 클래식한 방법
    // if(x > y){
    //     let t = x;
    //     x = y;
    //     y = t;
    // }

    if (x > y) {
        [x , y] = [y, x];
    }

    for(let i = x; i <= y; i++){
        result.push(i);
}
    return result;
}


// 출력
let input = [
    [3, 7],
    [8, 3],
    [12, 10]
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i][0], input[i][1]));
};