const date = new Date();
let year = date.getTime();
year = Math.floor(year / (365 * 24 * 3600 * 1000) + 1970);

console.log(year);