function solution(nums) {
    var answer = Math.floor(nums.length / 2);

    var check = {};
    var cnt = 0;
    for(let i = 0; i < nums.length; i++){
        if(check.hasOwnProperty(nums[i]) === false){
            check[nums[i]] = true;
            cnt++;
            if(cnt === answer){
                return cnt;
            }
        }
    }

    return cnt;
}