function answer(arr) {
    let new_arr = [];
    
    //1
    new Set(arr).forEach(function (item){
        new_arr.push(item)
    })
    //2
    new_arr = Array.from(new Set(arr));
    
    return new_arr;
}

//출력
let input = [
    ["john","alice","alice"],
    ["Hello","hello","HELLO","hello"],
    ["kiwi", "banana", "mango", "kiwi", "banana"]
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i]));
};