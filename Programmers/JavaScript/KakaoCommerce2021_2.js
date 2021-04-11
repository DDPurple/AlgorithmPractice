function solution(m, v) {
    var tetris = [];
    tetris.push(v[0]);
    for(let i = 1; i < v.length; i++){
        var length = v[i];
        if(length > m - tetris[tetris.length - 1]){
            tetris.push(length);
        }
        else{
            var layer = getTargetLayer(m, tetris, length);
            tetris[layer] = tetris[layer] + length;
        }
    }

    return tetris.length;
}

function getTargetLayer(m, tetris, length){
    var result = tetris.length - 1;
    while(true){
        if(length > m - tetris[result]){
            break;
        }
        result--;
        if(result === -1){
            break;
        }
    }
    return result + 1;
}