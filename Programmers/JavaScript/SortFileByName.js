function solution(files) {
    var answer = [];
    var arrFileObjs = [];
    for(let i = 0; i < files.length; i++){
        arrFileObjs.push(GetFileObj(files[i], i));
    }
    var condition = (a,b) => {
        if(a["Head"] < b["Head"]){
            return -1;
        }
        else if(a["Head"] > b["Head"]){
            return 1;
        }
        else if(a["Num"] < b["Num"]){
            return -1;
        }
        else if(a["Num"] > b["Num"]){
            return 1;
        }
        else if(a["Idx"] < b["Idx"]){
            return -1;
        }
        else if(a["Idx"] > b["Idx"]){
            return 1;
        }
    }

    arrFileObjs.sort((a,b) => condition(a,b));

    for(let i = 0; i < arrFileObjs.length; i++){
        answer.push(arrFileObjs[i]["Value"]);
    }

    return answer;
}

function GetFileObj(str, n){
    var fileObj = {};
    var numSrtIndex = str.search(/[0-9]/g);
    var numlength = str.substr(numSrtIndex).search(/[^0-9]/g);
    if(numlength === -1){
        numlength = str.length - numSrtIndex;
    }
    fileObj["Value"] = str;
    fileObj["Head"] = str.substr(0,numSrtIndex).toLowerCase();
    fileObj["Num"] = parseInt(str.substr(numSrtIndex, numlength));
    fileObj["Tail"] = str.substr(numSrtIndex + numlength);
    fileObj["Idx"] = n;

    return fileObj;
}