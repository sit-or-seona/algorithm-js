// 매개변수 n이 소수라면 true를, 소수가 아니라면 false를 반환합니다.
function isPrime(n){
    let divisor = 2;

    while(n > divisor){
        if(n % divisor === 0) return false;
        else divisor++;
    }
    if(n === 1) return false;
    return true;
    
}