//Math.pow(a, b) === a의 b승  메소드를 사용 가능

function squared (nums) {
    let arr = nums.split(" ");
    return (arr[0]*1) ** (arr[1]*1);
}

console.log(squared("7 3"));