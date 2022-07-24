function answer(withdraw, total){
    let result;
    
    //1
    let all = withdraw + 0.5;
    if(all > total){
        result = total;
    } else if(withdraw%5 !== 0){
        result = total;
    } else {
        result = total - all;
    }
    //2
    if(withdraw%5 !== 0 || withdraw+0.5 > total){
        result = total;
    } else {
        total -= withdraw + 0.5;
        result = total;
    }


    return result;
}


//출력
let input = [
    [40,130.0],
    [33,130.0],
    [300,300.0]
];

for(let i =0; i < input.length; i++){
    console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`)
};