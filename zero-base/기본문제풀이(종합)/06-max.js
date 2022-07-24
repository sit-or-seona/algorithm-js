function answer(arr) {
    let max;

    max = arr[0]    //1
    max = Number.MIN_SAFE_INTEGER   //2
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        } 
    }
    
    max = Math.max.apply(null, arr) //Math 객체 사용 제약 조건이 없는 경우 (arr를 넣으려면 apply 사용)

    return max;
}


//출력
let input = [
   [1,6,5,2,3],
   [19,41,23,-4,17],
   [-64,-27,-41,-33,-59]
];

for(let i =0; i < input.length; i++){
    console.log(`#${i + 1} ${answer(input[i])}`)
};