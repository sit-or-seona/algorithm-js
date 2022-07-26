function answer (nums) {
    let arr = nums.split(" ");

    return (arr[0]*1/arr[1]*1 + " " + arr[0]*1%arr[1]*1);
}

console.log(answer("10 2"));