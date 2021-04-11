function solution(next_student) {
    var answer = 0;
    var arrOpenCnts = new Array(next_student.length).fill(0);
    var arrBitMask = new Array(next_student.length).fill(false);
    for(let i = 0; i < next_student.length; i++){
        if(next_student[i] === 0){
            arrOpenCnts[i] = 1;
        }
    }
    for(let i = 0; i < next_student.length; i++){
        if(arrOpenCnts[i] === 0){
            var arrSteps = [];
            checkOpenCnts(i, next_student, arrOpenCnts, arrBitMask, arrSteps);
        }
    }
    var cnt = -1;
    for(let i = next_student.length - 1; i > -1; i--){
        if(arrOpenCnts[i] > cnt){
            cnt = arrOpenCnts[i];
            answer = i + 1;
        }
    }
    return answer;
}

function checkOpenCnts(num, next_student, arrOpenCnts, arrBitMask, arrSteps){

    var curNum = num;
    arrBitMask[curNum] = true;
    arrSteps.push(curNum);
    var nextNum = next_student[curNum] - 1;
    while(true){
        var nextNum = next_student[curNum] - 1;
        if(arrOpenCnts[nextNum] !== 0){
            fillCnt_NoCycle(arrOpenCnts, arrSteps, nextNum)
            break;
        }
        if(arrBitMask[nextNum] === true){
            fillCnt_Cycle(arrOpenCnts, arrSteps, nextNum)
            break;
        }
        arrBitMask[nextNum] = true;
        arrSteps.push(nextNum);
        curNum = nextNum;
    }
}

function fillCnt_NoCycle(arrOpenCnts, arrSteps, nextNum){
    var cnt = arrOpenCnts[nextNum];
    for(let i = arrSteps.length - 1; i > -1; i --){
        cnt++;
        arrOpenCnts[arrSteps[i]] = cnt;
    }
}
function fillCnt_Cycle(arrOpenCnts, arrSteps, nextNum){
    var flag = true;
    var cnt = arrSteps.length - arrSteps.indexOf(nextNum);
    for(let i = arrSteps.length - 1; i > -1; i --){
        if(flag === false){
            cnt++;
        }
        arrOpenCnts[arrSteps[i]] = cnt;
        if(flag && arrSteps[i] === nextNum){
            flag = false;
        }
    }
}
