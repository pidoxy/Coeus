let timeleft = 10;
let val;

const instruction = document.getElementById('instruction');

const yes = () => {
    val = "yes"
}

const no = () => {
    val = "no"
}

var downloadTimer = setInterval(function () {
    if (timeleft <= 0 && val == "no") {
        setTimeout((clearInterval(downloadTimer)), 4000);
        clearInterval(downloadTimer);
        setTimeout((location.assign('./congrats_login.html')), 4000)
    } else if (timeleft <= 0 && (val === "no" || val === undefined)) {
        setTimeout((clearInterval(downloadTimer)), 4000);
        clearInterval(downloadTimer);
        setTimeout((location.assign('./login.html')), 4000)
    } else if (timeleft > 0 && timeleft != 1) {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    } else if (timeleft = 1) {
        document.getElementById("timer").innerHTML = timeleft + " second remaining";

    }
    timeleft -= 1;
    console.log(val);
    console.log(timeleft);

    if (timeleft === 0 && val === "yes") {
        instruction.style.color = 'blue';
        instruction.innerHTML = 'Nice!!'
    } else if (timeleft === 0 && val === "no") {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
    else if (timeleft === 0 && val === undefined) {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
    if (timeleft === 0) {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
}, 1000);

