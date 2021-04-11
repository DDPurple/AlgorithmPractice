function solution(stones, k) {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < stones.length; i++){
        let cur = stones[i];
        max = Math.max(max, cur);
        min = Math.min(min, cur);
    }

    while(max != min){
        let mid = Math.floor((max + min) / 2);
        if(canCrossing(stones, mid, k) === true){
            if(canCrossing(stones, mid + 1, k) === false){
                return mid;
            }
            else{
                min = mid + 1;
            }
        }
        else{
            max = mid - 1;
        }
    }
    return max;
}

function canCrossing(stones, number, k){
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        if(stones[i] < number){
            count++;
            if(count > k - 1){
                return false;
            }
        }
        else{
            count = 0;
        }
    }
    return true;
}