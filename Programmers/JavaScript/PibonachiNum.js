function solution(n) {
    if(n === 1 || n === 2){
        return 1;
    }
    var pre2 = 1;
    var pre1 = 1;
    var cnt = 2;
    var flag = false;
    while(cnt < n){
        cnt++;
        flag = !flag;
        if(flag){
            pre2 = (pre2 + pre1) % 1234567;
        }
        else{
            pre1 = (pre1 + pre2) % 1234567;
        }
    }
    return flag === true ? pre2 : pre1;
}