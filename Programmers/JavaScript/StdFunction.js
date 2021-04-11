function getArrCombinations(arrData, r){
    var arrResult = [];
    var arrTemp = new Array(r);
    rcsvSearchCombinations(arrData, arrResult, arrTemp, arrData.length, r, 0, 0);
    return arrResult;
}

function rcsvSearchCombinations(arrData, arrResult, arrTemp, n, r, idx, cnt){
    if(cnt === r){
        var arrCombi = [];
        for(var i = 0; i < arrTemp.length; i++){
            arrCombi.push(arrTemp[i]);
        }
        arrResult.push(arrCombi);
        return;
    }
    if(idx === n){
        return;
    }
    arrTemp[cnt] = arrData[idx];
    rcsvSearchCombinations(arrData, arrResult, arrTemp, n, r, idx + 1, cnt + 1);
    rcsvSearchCombinations(arrData, arrResult, arrTemp, n, r, idx + 1, cnt);
}

function getArrPermutations(arrData, r){
    var arrResult = [];
    var arrTemp = [];
    rcsvSearchPermutations_Queue(arrData, arrResult, arrTemp, r, 0);
    return arrResult;
}
function rcsvSearchPermutations_Queue(arrData, arrResult, arrTemp, r, cnt){
    if(cnt === r){
        arrPermu = [];
        for(var i = 0; i < arrTemp.length; i++){
            arrPermu.push(arrTemp[i]);
        }
        arrResult.push(arrPermu);
        return;
    }
    var curArrDataLength = arrData.length;
    for(var i = 0; i < curArrDataLength; i++){
        arrTemp.push(arrData.shift());
        rcsvSearchPermutations_Queue(arrData, arrResult, arrTemp, r, cnt + 1);
        arrData.push(arrTemp.pop());
    }
}