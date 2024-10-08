function solution(s){
    let arr = s.toLowerCase().split("");
    let strP = arr.filter((a)=>a === "p");
    let strY = arr.filter((a)=> a === "y");
    
    if(strP.length === strY.length){
        return true;
    }else{
        return false;
    }
}