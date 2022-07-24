function answer(s, e) {
    let sequence = [];

    sequence.push(s);
    sequence.push(e);

// //나의 풀이
//     let i = 0;
//     while(1) { //(1)은 무한루프를 의미
//         i = sequence[sequence.length-2] - sequence[sequence.length-1];
//         if(i < 0) break;
//         sequence.push(i);
//     }


//     return sequence;
// }

//강의 풀이

    let sum;
    while(1) { //(1)은 무한루프를 의미
        sum = s - e;
        s = e;
        e = sum;

        if(e < 0) break;
        sequence.push(e);
    }
    return sequence;
    }

//출력
let input = [
    [9,3],
    [6,3],
    [13,7]
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i][0], input[i][1]));
};