function solution(n, computers) {
    var answer = 0;
    var arrBitMask = new Array(n).fill(false);
    var qNextSearch = [];
    for(let i = 0; i < n; i++){
        if(arrBitMask[i] === false){
            arrBitMask[i] = true;
            answer++;
            for(let j = 0; j < n; j++){
                if(computers[i][j] === 1 && arrBitMask[j] === false){
                    qNextSearch.push(j);
                    arrBitMask[j] = true;
                }
            }
            while(qNextSearch.length > 0){
                var num = qNextSearch.shift();
                for(let j = 0; j < n; j++){
                    if(computers[num][j] === 1 && arrBitMask[j] === false){
                        qNextSearch.push(j);
                        arrBitMask[j] = true;
                    }
                }
            }
        }
    }
    return answer;
}