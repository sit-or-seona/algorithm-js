function answer(employee) {
    let employee_id;
    let max = 0;
    for(let i = 0; i < employee.length; i++){
        if(employee[i] > max){
            max = employee[i];
            employee_id = i + 1;
        }
    }
    
    return employee_id;
}


//출력
let input = [
    [3,7,9,6,1],
    [2,7,1,4,3,0,5],
    [7,5,0,1,2,12,6]
];

for(let i =0; i < input.length; i++){
    console.log(`#${i + 1} ${answer(input[i])}`)
};