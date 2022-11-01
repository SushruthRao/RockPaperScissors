
const emotes = ["✊", "🖐️", "✌️"]
var robowins = 0;
var playerwins = 0;
const emoji = document.getElementById("emoji");
const rock = document.getElementsByClassName("rock");
const paper = document.getElementsByClassName("paper");
const sic = document.getElementsByClassName("sic");
const result = document.getElementById("result");
const playeremoji = document.getElementById("playeremoji");
const endbox = document.getElementById("end-box");
var r = document.querySelector(':root');
var bg = document.querySelector('body');
function doBattle(userchoice) {
    playeremoji.innerText = userchoice;
    result.style.animation = "none";
    endbox.style.animation = "none";
    r.style.setProperty('--c1', '#f8fce1');
    emoji.innerText = emotes[Math.floor(Math.random() * emotes.length)];
    let emojitext = emoji.innerText;
    if ((userchoice == "✊" && emojitext == "🖐️") || (userchoice == "🖐️" && emojitext == "✌️") || (userchoice == "✌️" && emojitext == "✊")) {

        result.innerText = "😅 DEFEAT 😅";
        result.style.animation = "anim-defeat 2s 0.3s linear infinite";
        endbox.style.animation = "anim-defeat 2s 0.3s linear infinite";
        r.style.setProperty('--c1', '#df7051');
        robowins++;
        endbox.innerHTML = "STATS <br> 😁 PLAYER - "+ playerwins + "  &nbsp&nbsp&nbsp&nbsp  🤖 ROBOT - "+ robowins +" &nbsp";




    }
    else if ((userchoice == "✊" && emojitext == "✌️") || (userchoice == "🖐️" && emojitext == "✊") || (userchoice == "✌️" && emojitext == "🖐️")) {
        result.innerText = "😃 WIN 😃";
        result.style.animation = "anim-win 2s 0.3s linear infinite";
        endbox.style.animation = "anim-win 2s 0.3s linear infinite";
        r.style.setProperty('--c1', '#5ddf51');
        playerwins++;
        endbox.innerHTML = "STATS <br> 😁 PLAYER - "+ playerwins + "  &nbsp&nbsp&nbsp&nbsp  🤖 ROBOT - "+ robowins +" &nbsp";


    }
    else {
        result.innerText = "😝 DRAW 😝";
        result.style.animation = "anim-draw 2s 0.3s linear infinite";
        endbox.style.animation = "anim-draw 2s 0.3s linear infinite";
        r.style.setProperty('--c1', '#f8fce1');
        endbox.innerHTML = "STATS <br> 😁 PLAYER - "+ playerwins + "  &nbsp&nbsp&nbsp&nbsp  🤖 ROBOT - "+ robowins +" &nbsp";




    }


}

