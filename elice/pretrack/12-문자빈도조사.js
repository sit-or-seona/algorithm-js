 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(str) {

    str = str.toLowerCase().replace(/ /gi, '');

    let alpha_cnt = {};

    for(let i = 0; i < str.length; i++){
        if(!alpha_cnt.hasOwnProperty(str[i])) alpha_cnt[str[i]] = 1;
        else alpha_cnt[str[i]] += 1;
    }


  return alpha_cnt;
}