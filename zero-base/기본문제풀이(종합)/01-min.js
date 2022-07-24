function answer(x, y) {
    let min;

    //1
    if(x < y) min = x;
    else min = y;

    //2
    min = x > y ? y : x;

    return min;
}


//출력
let input = [
    [16,3],
    [-3,1],
    [1000,525]
];

for(let i =0; i < input.length; i++){
    console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`)
};