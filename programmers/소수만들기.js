function solution (nums) {

    let result = 0;
    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (소수(sum)) {
                    result++;
                }
            }
        }
    }

    return result;
}

function 소수 (nums2) {

    for(let i = 2; i <= Math.sqrt(nums2); i++){
        if (nums2 % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(solution([1,2,7,6,4]));