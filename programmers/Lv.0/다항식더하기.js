function solution(polynomial) {
    let x = 0;
    let constant = 0;
    polynomial.split(' + ')
        .forEach(v => v[v.length-1] === 'x' ? x += +v.slice(0, -1) || 1 : constant += +v)
    return (x ? (x === 1 ? 'x' : x + 'x') : '') + (constant ? (x ? ' + '+ constant : constant) : '');
}

console.log(solution("3x + 7 + x"));