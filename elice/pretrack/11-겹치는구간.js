function solution(a, b) {

    a = a.split(',').map(Number);
    b = b.split(',').map(Number);

    a[0] = a[0] - (a[1] - a[0]);
    b[0] = b[0] - (b[1]- b[0]);

    console.log(a, b)

    if(a[1] < b[0]) return 0;

    let newA = a[0] > b[0] ? a[0] : b[0];
    let newB = a[1] < b[1] ? a[1] : b[1];


  return newB - newA;
}

console.log(solution(('2,6'),('4,8')));