function solution(s){
    var answer = true;
    var count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            count++;
        }
        else{
            count--;
        }
        if(count < 0){
            return false;
        }
    }
    if(count != 0){
        return false;
    }
    return answer;
}