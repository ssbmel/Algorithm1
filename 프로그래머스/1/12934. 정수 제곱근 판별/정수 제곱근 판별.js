function solution(n) {
    let square;
    if(Number.isInteger(Math.sqrt(n))){
        square = Math.sqrt(n)
    }else{
        square= -1
    }
    return square === -1 ? square : (square+1)*(square+1);
}