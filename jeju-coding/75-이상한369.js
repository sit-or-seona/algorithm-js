//split("")
//replace(/3/gi).replace(/6/gi).replace(/9/gi)
//!== '' count++
//filter()

const n = '93';

let count = 0;

for(let i = 1; i <= n*1; i++){
    let str = i + '';
    for(let j = 0; j < str.length; j++){
        if(str[j] !== '3' || str[j] !== '6' || str[j] !== '9') break;
    }

}

console.log(count);