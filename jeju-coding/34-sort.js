const height = prompt();

if(height === height.split(" ").sort((a,b)=> a-b).join(" ")){
    console.log("YES");
}else{
    console.log("NO");
}