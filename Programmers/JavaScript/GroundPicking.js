function solution(land) {
    var answer = 0;
    var preDP = [0,0,0,0];
    var curDP = [];
    for(let i = 0; i < land.length; i++){
        curDP = [];
        curDP.push(land[i][0] + Math.max(preDP[1], preDP[2], preDP[3]));
        curDP.push(land[i][1] + Math.max(preDP[2], preDP[3], preDP[0]));
        curDP.push(land[i][2] + Math.max(preDP[3], preDP[0], preDP[1]));
        curDP.push(land[i][3] + Math.max(preDP[0], preDP[1], preDP[2]));
        preDP = curDP;
    }
    return Math.max(...preDP);
}