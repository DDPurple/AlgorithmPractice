function solution(msg) {
    var answer = [];
    var rootDic = initDic();
    var curDic = rootDic;
    var curAnswerIdx = 0;
    var curMsgIdx = 0;
    var nextIdx = 27;
    while(curMsgIdx < msg.length){
        if(curDic.hasOwnProperty(msg[curMsgIdx])){
            curDic = curDic[msg[curMsgIdx]];
            curAnswerIdx = curDic.num;
        }
        else{
            curDic[msg[curMsgIdx]] = {num : nextIdx};
            nextIdx++;
            answer.push(curAnswerIdx);  
            curDic = rootDic[msg[curMsgIdx]];
            curAnswerIdx = curDic.num;      
        }
        curMsgIdx++;
    }
    answer.push(curAnswerIdx);
    return answer;
}

function initDic(){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = {};
    for(let i = 0; i < alphabet.length; i++){
        result[alphabet[i]] = {num : i + 1};
    }
    return result;
}