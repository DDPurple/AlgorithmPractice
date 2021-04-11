function solution(board){
    var answer = 0;
    for(let j = 0; j < board[0].length; j++){
        if(board[0][j] === 1){
            answer = 1;
        }
    }
    for(let i = 1; i < board.length; i++){
        if(board[i][0] === 1){
            answer = Math.max(answer, 1);
        }
        for(let j = 1; j < board[i].length; j++){
            if(board[i][j] === 1){
                var vert = board[i-1][j];
                if(vert === undefined){
                    vert = 0;
                }
                var diag = board[i-1][j-1];
                if(diag === undefined){
                    diag = 0;
                }
                var horz = board[i][j-1];
                if(horz === undefined){
                    horz = 0;
                }
                var now = Math.min(vert, diag, horz) + 1;
                board[i][j] = now;
                answer = Math.max(answer, now);
            }
        }
    }
    return answer * answer;
}