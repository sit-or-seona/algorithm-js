function answer(year) {
    let result;

    if(year%4 === 0 && year%100 !== 0){
        result = true;
    } else if(year%400 === 0){
        result = true;
    } else {
        result = false;
    }
    return result;
}

//출력
let input = [
    4,
    100,
    124,
    247,
    400
];

for(let i =0; i < input.length; i++){
    console.log(`#${i + 1} ${answer(input[i])}`)
};