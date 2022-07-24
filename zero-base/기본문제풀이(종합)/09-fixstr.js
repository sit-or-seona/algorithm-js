function answer(str) {
    let fix_str="";

    //1. 공백 기준으로 나눈다.
    //2. 단어의 앞 철자를 대문자로 변환한다.
    //3. 문장으로 변환한다.
    for(let item of str.split(" ")){
        fix_str += item[0].toUpperCase() + item.slice(1) + " ";
        //fix_str = fix_str + item[0].toUpperCase() + item.slice(1) + " ";
    }

    return fix_str;
}



//출력
let input = [
    "Hello, My name is john",
    "This week is closed due to COVID-19",
    "fifty percent off this week"
 ];
 
 for(let i =0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`)
 };