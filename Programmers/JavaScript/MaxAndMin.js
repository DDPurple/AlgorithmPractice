function solution(s) {
    var arrS = s.split(' ');
    var max = parseInt(arrS[0]);
    var min = parseInt(arrS[0]);
    for(let i = 1; i < arrS.length; i++){
        var cur = parseInt(arrS[i]);
        if(cur > max){
            max = cur;
        }
        if(cur < min){
            min = cur;
        }
    }
    return min + ' ' + max;
}