function solution(n) {
    var answer = n + 1;
    var target = GetCntWhenBinaryNum(n);
    while(true){
        if( target == GetCntWhenBinaryNum(answer)){
            break;
        }
        answer++;
    }
    return answer;
}

function GetCntWhenBinaryNum(num){
    var cnt = 0;
    while(num > 0){
        cnt += num % 2;
        num = Math.floor(num / 2);
    }
    return cnt;
}