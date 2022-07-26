function average (nums) {
    let sum = 0;
    let arr = nums.split(" ");

    for(let i = 0; i < 3; i++){
        sum += arr[i] * 1; //string -> number 형 변환을 위해 *1 작성
    }
    return Math.floor(sum / 3);
}

console.log(average("20 30 50"));