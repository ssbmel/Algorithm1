function solution(n) {
    let x = Math.sqrt(n);
    if (Number.isInteger(x)) { 
        return (x + 1) ** 2;
    } else {
        return -1;
    }
}
