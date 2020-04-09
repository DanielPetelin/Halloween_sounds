let x = document.querySelector('#myAudio');
let krik = false;
let kricInterval = 10000;
let interval = 0;

document.querySelector('.halloween').onclick = randonInterval;

function playAudio() {

}

function randonInterval() {
    if (interval == 0 && krik == false) {
        interval = Math.random() * kricInterval;
        console.log(interval);
        setTimeout(playAudio, interval);
        document.querySelector('.halloween').classList.add('.halloween-active')
    };
};