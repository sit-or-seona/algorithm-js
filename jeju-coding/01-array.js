var nums = [100, 200, 300, 400, 500];

//solution 1
nums.pop();
nums.pop();

//solution 2
nums = nums.slice(0,3)

//solution 3
nums.splice(3, 2)

console.log(nums);