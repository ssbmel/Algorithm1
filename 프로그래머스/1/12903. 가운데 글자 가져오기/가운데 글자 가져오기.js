function solution(s) {
    let str = "";
    if(s.length % 2 !== 0) {
        str = s[Math.floor(s.length / 2)];
    }else {
        str = s[Math.floor(s.length / 2)-1] + s[Math.floor(s.length / 2)]
    }
    return str;
}