function answer(str) {
    let spam_flag;

    str = str.toLowerCase();
    if(str.includes("advert") === true) spam_flag = true;
    else spam_flag = false;

    //풀이
    spam_flag = str.toLowerCase().includes("advert");

    return spam_flag;
}


//출력
let input = [
    "RE: Request documents",
    "[Advertisement] free mobile",
    "50% off this week (advertising)"
 ];
 
 for(let i =0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`)
 };