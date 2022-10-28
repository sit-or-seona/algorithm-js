function solution(ingredient) {
    let result = 0;
    let left = ingredient.join('');

    while (left.length >= 4) {
        if(left.match(/1231/)) {
            result++;
            left = left.replace(/1231/, '');
        } else {
            break;
        }
    }
    return result;
}


console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))