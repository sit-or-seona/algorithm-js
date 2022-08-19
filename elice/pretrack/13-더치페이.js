function solution(input) {

    const menu = {
    "떡볶이":5000,
    "김밥":2000,
    "튀김세트":3000,
    "순대":4000,
    "라면":6000,
    "콜라":1000,
    "사이다":1000
    };
  
    let answer = {'A': 0, 'B': 0, 'C': 0}; // 객체에 밸류 값을 넣지 않으니 아래 반복문 += 가 작동하지 않았음!
  
    for(let i of input){
        let price = menu[i[1]] * i[2];
        if(i[0] === 'A'){
            answer['A'] += price;
        } else if(i[0] === 'B'){
            answer['B'] += price;
        } else if(i[0] === 'C'){
            answer['C'] += price;
        }else {
            let k = price/3;
            answer['A'] += k;
            answer['B'] += k;
            answer['C'] += k;
        }
    }
  
    return answer;
  }

  console.log(solution([ 
    [ "A", "라면", 1],
    [ "B", "김밥", 2],
    [ "B", "떡볶이", 1],
    [ "K", "튀김세트", 1],
    [ "C", "콜라", 1 ]
    ]))