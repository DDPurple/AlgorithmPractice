var arrStdInfo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function solution(n, t, m, p) {
    var totalStr = '';
    var targetTotalCnt = (t-1) * m + p;
    var curNum = 0;
    while(totalStr.length < targetTotalCnt){
        totalStr += GetNumStrWithBaseN(curNum, n);
        curNum++;
    }

    var answer = '';
    for(let i = 0; i < t; i++){
        answer += totalStr[m * i + p - 1];
    }
    return answer;
}

function GetNumStrWithBaseN(num, base){
    var result = '';
    if(num === 0){
        return '0';
    }
    while(num > 0){
        result = arrStdInfo[num % base] + result;
        num = Math.floor(num / base);
    }
    return result;
}