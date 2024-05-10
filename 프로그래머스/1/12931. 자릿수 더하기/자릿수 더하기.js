function solution(N) {
    var digits = N.toString().split('');
    var sum = 0;

    for (var i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    
    }    
    return sum;
}