function solution(input) {

    if(input % 10 !== 0) return -1;
    
    let a = 250;
    let b = 40;
    let c = 10;
    
    let count = 0;
    
    while (input > 0){
        if(input > a){
            input -= a;
            count++;
        }else if(input > b){
            input -= b;
            count++;
        }else{ //else 대신 else if를 작성하니 무한루프에 돌았다.
            input -= c;
            count++;
        }
    }
      // 출력할 결과를 return 하세요.
      return count;
    }
    