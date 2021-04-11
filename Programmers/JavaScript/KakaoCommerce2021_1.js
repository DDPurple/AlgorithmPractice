function solution(n, record){
    var answer = [];
    var servers = [];
    for(let i = 0; i < n; i++){
        var server = [];
        servers.push(server);
    }
    for(let i = 0; i < record.length; i++){
        var date = record[i].split(' ');
        var serverNum = date[0] >> 0;
        var nickName = date[1];
        var server = servers[serverNum - 1];
        if(server.indexOf(nickName) !== -1){
        }
        else if(server.length === 5){
            server.shift();
            server.push(nickName);
        }
        else{
            server.push(nickName);
        }
    }
    for(let i = 0; i < servers.length; i++){
        for(let j = 0; j < servers[i].length; j++){
            answer.push(servers[i][j]);
        }
    }
    return answer;
}