let x = document.querySelector('#myAudio');
let krik = false;
let krikInterval = 10000;
let interval = 0;

document.querySelector('.halloween').onclick = randomInterval;

function playAudio() {
    if (krik) {
        x.play();
        innerval = 0;
    } else {
        x.pause();
    }
};

function randomInterval() {
    if (interval == 0 && krik == false) {
        interval = Math.random() * krikInterval;
        // console.log(interval);
        setTimeout(playAudio, interval);
        document.querySelector('.halloween').classList.add('halloween-active');
        krik = true;
    };
};