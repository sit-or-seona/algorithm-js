// 특정 단만 출력
function timesTable(n) {
    for(let i = 1; i <= 9; i++) {
        document.write(`${n} x ${i} = ${n*i} <br>`);
    }
}

timesTable(2); // 2단만 출력
timesTable(3); // 3단만 출력


// 2단부터 9단까지 출력하는 반복문을 완성시켜 보세요.
for(let i = 2; i <= 9; i++) {
    for(let j = 1; j <= 9; j++){
        document.write(`${i} x ${j} = ${i*j} <br>`);
    }    
}