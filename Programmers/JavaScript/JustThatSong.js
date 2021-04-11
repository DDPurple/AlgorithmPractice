function solution(m, musicinfos) {
    var answer = '(None)';

    var heardSound = convertSound(m);
    var maxPlayTime = 0;
    for(let i = 0; i < musicinfos.length; i++){
        let curMusicInfo = musicinfos[i].split(',');
        let curMusicPlayTime = getPlayTime(curMusicInfo);
        let curMusicSound = convertSound(curMusicInfo[3]);
        while(curMusicSound.length < curMusicPlayTime){
            curMusicSound +=curMusicSound;
        }
        curMusicSound = curMusicSound.substr(0, curMusicPlayTime);

        if(curMusicSound.indexOf(heardSound) > -1 && maxPlayTime < curMusicPlayTime){
            answer = curMusicInfo[2];
            maxPlayTime = curMusicPlayTime;
        }
    }
    return answer;
}

function convertSound(m){
    var result = [];
    for(let i = 0; i < m.length; i++){
        if(m[i] === '#'){
            result.push(String.fromCharCode(result.pop().charCodeAt(0) + 7));
        }
        else{
            result.push(m[i])
        }
    }
    return result.join('');
}

function getPlayTime(musicinfo){
    let duration = (musicinfo[1].split(':')[0] >> 0) * 60;
    duration += (musicinfo[1].split(':')[1] >> 0);
    duration -= (musicinfo[0].split(':')[0] >> 0) * 60;
    duration -= (musicinfo[0].split(':')[1] >> 0);

    return duration;
}
