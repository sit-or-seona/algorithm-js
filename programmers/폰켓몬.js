function solution(nums) {
    const setL = Array.from(new Set(nums)).length;
    const numsL = nums.length;
    return setL <= numsL ? setL : numsL;
}

console.log(solution([3,3,3,2,2,4]))