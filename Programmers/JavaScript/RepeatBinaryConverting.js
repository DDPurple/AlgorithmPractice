function solution(s) {
    var arrAnswer = [0,0];

    while(s != '1'){
        var countZero = 0;
        var countOne = 0;
        for(let i = 0; i < s.length; i++){
            if(s[i] === '1'){
                countOne++;
            }
            else{
                countZero++;
            }
        }
        s = '';
        while(countOne > 0){
            if(countOne % 2){
                s = '1' + s;
            }
            else{
                s = '0' + s;
            }
            countOne = Math.floor(countOne / 2);
        }
        arrAnswer[0]++;
        arrAnswer[1] += countZero;
    }

    return arrAnswer;
}