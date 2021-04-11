function solution(n, costs) {
    var answer = 0;
    var arrBitMask = new Array(n).fill(false);
    var arrCurMinCost = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    var matrixBridgeCosts = [];
    for(let i = 0; i < n; i++){
        var arrBridgeCost = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        matrixBridgeCosts.push(arrBridgeCost);
    }
    for(let i = 0; i < costs.length; i++){
        var isl_1 = costs[i][0];
        var isl_2 = costs[i][1];
        var cost = costs[i][2];
        matrixBridgeCosts[isl_1][isl_2] = cost;
        matrixBridgeCosts[isl_2][isl_1] = cost;
    }

    var nextIsl = 0;
    var curMinCost = 0;
    var cntVisit = 0;
    while(cntVisit < n){
        var curIsl = nextIsl;
        arrBitMask[curIsl] = true;
        cntVisit++;
        answer += curMinCost;

        curMinCost = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < n; i++){
            arrCurMinCost[i] = Math.min(arrCurMinCost[i], matrixBridgeCosts[curIsl][i]);
            if(curMinCost > arrCurMinCost[i] && arrBitMask[i] === false){
                curMinCost = arrCurMinCost[i];
                nextIsl = i;
            }
        }
    }

    return answer;
}