let timeleft = 10;
let val;

const instruction = document.getElementById('instruction');

let score = parseInt(localStorage.getItem('score'));

const yes = () => {
    val = "yes"
}

const no = () => {
    val = "no"
}

var downloadTimer = setInterval(function () {
    if (timeleft <= 0 && val == "yes") {
        setTimeout((clearInterval(downloadTimer)), 4000);
        clearInterval(downloadTimer);
        setTimeout((location.assign('./congrats_login.html')), 4000)
    }
     else if (timeleft <= 0 && (val === "no" || val === undefined)) {
        setTimeout((clearInterval(downloadTimer)), 4000);
        clearInterval(downloadTimer);
        setTimeout((location.assign('./congrats_login.html')), 4000)
    }
    else if (timeleft > 0 && timeleft != 1) {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    } else if (timeleft = 1) {
        document.getElementById("timer").innerHTML = timeleft + " second remaining";

    }
    timeleft -= 1;
    console.log(val);
    console.log(timeleft);

    if (timeleft === 0 && val === "yes") {
        localStorage.setItem('score', score + 500);
    } else if (timeleft === 0 && val === "no") {
        localStorage.setItem('score', score + 0);
    }
    else if (timeleft === 0 && val === undefined) {
        localStorage.setItem('score', score + 0);
    }
    else if (timeleft === 0) {
        localStorage.setItem('score', score + 0);
    }
}, 1000);

