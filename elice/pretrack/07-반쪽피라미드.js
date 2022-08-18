function solution(input) {
    const num_tuple = ['2','3','5','6','7','8','9'];
  
    let arr = input.split('');
    console.log(arr);
  
    let result = arr.filter(i => {
        num_tuple.includes(i);
    })
  
    return result;
  }

  console.log(solution('asd222222'))