//조건: 숫자X, 파일이름 및 경로X, 시간과 날짜 함수X, 에러번호X, inputX

//정규표현식과 length 사용
//0은 null 값이 되므로 *1 을 붙여 숫자형으로 변환

const str = 'aacdddddddddfffffffffgghhh';

console.log(`${str.match(/a/g).length}${str.match(/b/g)*1}${str.match(/c/g).length}${str.match(/d/g).length}${str.match(/e/g)*1}${str.match(/f/g).length}${str.match(/g/g).length}${str.match(/h/g).length}`);