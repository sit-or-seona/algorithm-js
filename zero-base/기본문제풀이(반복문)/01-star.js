function answer(num) {
    let result = "";

    for(let i = 0; i < num; i++) {
        result += "*";
    }

    return result;
}
console.log(answer(10));
