function solution(number) {
    let sum = 0;
    let num = number.split('');

    for(let i=0; i<=num.length-1; i++) {
        sum += +num[i]
    }
    return sum % 9
}

