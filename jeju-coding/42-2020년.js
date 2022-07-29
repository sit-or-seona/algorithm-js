const a = prompt('월을 입력하세요.');
const b = prompt('일을 입력하세요.');

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const date = new Date(2020,a-1,b); //월도 0~11로 표현한다는 걸 잊지 말 것!

console.log(day[date.getDay()]); //get~가 메소드이기 때문에 ()을 작성해야 한다는 걸 잊지 말 것!