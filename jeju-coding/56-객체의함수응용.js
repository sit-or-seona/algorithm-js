const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
    }

let arr = [];
let result;
let tmp = Number.MAX_SAFE_INTEGER;
let nation = 0;

for(let key in nationWidth){
    arr.push([key, nationWidth[key]]);
}

for(let i = 1; i < arr.length; i++){
    let gap = Math.abs(arr[0][1] - arr[i][1]);
    if(gap < tmp){
        tmp = arr[i][1];
        nation = arr[i][0];
        result = gap;
    }
}

console.log(nation, result);