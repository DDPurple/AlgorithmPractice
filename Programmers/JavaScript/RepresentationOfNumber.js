function solution(n) {
    var answer = 0;

    var val = 1;

    do{
        if(n % val === 0){
            answer++;
        }
        n -= val;
        val++;
    }while(n > 0);

    return answer;
}