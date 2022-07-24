function answer(arr) {
    let product = 1;

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

//출력
let input = [
    [[1],[2],[3]],
    [
        [1,2],
        [3,4],
        [5,6,7]
    ],
    [
        [5,1],
        [0.2, 4, 0.5],
        [3,9]
    ]
 ];
 
 for(let i =0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`)
 };