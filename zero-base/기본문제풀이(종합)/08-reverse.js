function answer(user) {
    let reverse = [];

    for(i = 0; i < user.length; i++){
        reverse.unshift(user[i]);
    }
    return reverse;
}


//출력
let input = [
    [1,2,3,4],
    [-1,6,"hello","mango"],
    ["apple","banana","mango"]
 ];
 
 for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i]));
};