function solution(v) {
    var xNodes = [];
    var yNodes = [];
    for(let i = 0; i < v.length; i++){
        let x = v[i][1];
        let y = v[i][0];
        if(yNodes.indexOf(y) === -1){
            yNodes.push(y);
        }
        else{
            yNodes.splice(yNodes.indexOf(y), 1);
        }
        if(xNodes.indexOf(x) === -1){
            xNodes.push(x);
        }
        else{
            xNodes.splice(xNodes.indexOf(x), 1);
        }
    }
    return [yNodes[0], xNodes[0]];
}