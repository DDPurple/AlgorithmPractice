function solution(s) {
    var answer = [];
    s = s.substr(2, s.length - 4);
    var arr = s.split('},{');
    var objNumCount = {};
    for(let i = 0; i < arr.length; i++){
        var arrSub = arr[i].split(',');
        for(let j = 0; j < arrSub.length; j++){
            var num = arrSub[j];
            if(objNumCount.hasOwnProperty(num)){
                objNumCount[num]++;
            }
            else{
                objNumCount[num] = 1;
            }
        }
    }
    var objCountNum = {};
    Object.keys(objNumCount).forEach(element => {
        objCountNum[objNumCount[element]] = element;
    });
    var arrSortedObjCount = Object.keys(objCountNum).sort((a,b) => b-a);
    for(let i = 0; i < arrSortedObjCount.length; i++){
        answer.push(objCountNum[arrSortedObjCount[i]]>>0);
    }
    
    return answer;
}