function answer (str) {
    let arr = str.split(" ").map(Number);

    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1] + 1) return "NO";
    }
    return "YES";
}

console.log(answer('1 4 2 6 3'));