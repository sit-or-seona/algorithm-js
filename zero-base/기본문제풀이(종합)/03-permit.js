function answer(user){
    let permit;
    //1
    if(user.height >= 150) permit = true
    else permit = false
    //2
    permit = user.height >= 150;

    return permit;
}


//출력
let input = [
    {name: "john", age: 27, height: 181},
    {name: "alice", age: 12, height: 148},
    {name: "bob", age: 14, height: 156}
];

for(let i =0; i < input.length; i++){
    console.log(`#${i + 1} ${answer(input[i])}`)
};