//'prompt()'메소드가 vs code에선 에러가 뜨나, 콘솔창에선 실행됨

const n = prompt('숫자를 입력하세요.');

if(n%3 === 0) console.log("짝");
else console.log(n);