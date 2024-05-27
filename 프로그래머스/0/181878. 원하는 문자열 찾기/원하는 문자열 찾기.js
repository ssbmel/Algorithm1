function solution(myString, pat) {
    let newString = myString.toLowerCase();
    let newPat = pat.toLowerCase();
    let str = newString.includes(newPat);
    if(str === true) {
        return 1;
    }else 
        return 0;
    
}