//인덱스 값을 이용해 출력하는 방법으로 해결
function planet(num) {
    let planets = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
    return planets[num-1];
}


console.log(planet(1));