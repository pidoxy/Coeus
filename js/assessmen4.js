var timeleft = 15;
const instruction = document.getElementById('instruction');
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        setTimeout((clearInterval(downloadTimer)), 4000);
        clearInterval(downloadTimer);
        setTimeout((location.assign('./assessment_game5.html')), 4000)
    } else if (timeleft > 0 && timeleft != 1) {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    } else if (timeleft = 1) {
        document.getElementById("timer").innerHTML = timeleft + " second remaining";

    }
    timeleft -= 1;
    edit.value = edit.value.toLowerCase();
    console.log(edit.value);
    console.log(timeleft);

    if (timeleft === 0 && edit.value == "the duck saw the cow") {
        instruction.style.color = 'blue';
        instruction.innerHTML = 'Nice!!'
    } else if (timeleft === 0 && edit.value !== "the duck saw the cow") {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
    else if (timeleft === 0 && edit.value === null) {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
    else if (timeleft === 0) {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
}, 1000);

