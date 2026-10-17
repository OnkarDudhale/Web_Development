let info = document.querySelector('p');
let maxScore = 0;
let gameTrack = [];
let userTrack = [];
let body=document.querySelector('body');
let randomColor = ['orange', 'cyan', 'yellow', 'pink'];
let started = false;
let level = 0;
let gameActive = false;
document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('game started');
        started = true;
        gameActive = true;
        levelUp();
    }
})

function blockFlash(btnBlock) {
    btnBlock.classList.add('flash');
    setTimeout(() => {
        btnBlock.classList.remove('flash');
    }, 300);
}
function levelUp() {
    userTrack = [];
    info.innerText = `level : ${level += 1}`
    info.innerText = `Level: ${level} | Max Score: ${maxScore}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let color = randomColor[ranIdx];
    let btnBlock = document.querySelector(`.${color}`);
    console.log(btnBlock);
    gameTrack.push(color);
    console.log(gameTrack);
    blockFlash(btnBlock);
}

function check(idx) {
    if (userTrack[idx] === gameTrack[idx]) {
        if (userTrack.length == gameTrack.length) {
            if (level > maxScore) {
                maxScore = level; 
            }
            setTimeout(levelUp, 1000);
        }
    } else {
        info.innerHTML = `<b>Game Over !</b> Press Any Key to Start New! Final Level: ${level} | Max Score: ${maxScore}`;
        // info.innerHTML = `<b>Game Over</b> Press any key to start <br><b>Your Score is:${level}<b>`;
        body.classList.add('red');
        setTimeout(function(){
            body.classList.remove('red');
        },200);
        reset();
    }
}
function userPressed() {
    if (!gameActive) return;
    let btn = this;
    console.log(btn);
    blockFlash(btn);
    let userColor = btn.getAttribute('id');
    userTrack.push(userColor);
    console.log(userTrack);
    check(userTrack.length - 1);
}


let btns = document.querySelectorAll('.block');
for (let btn of btns) {
    btn.addEventListener('click', userPressed);
}


function reset() {
    gameActive = false;
    started = false;
    level = 0;
    gameTrack = [];
}