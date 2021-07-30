
var timeleft = 10;
const edit = document.getElementById('editable');
const instruction = document.getElementById('instruction');

localStorage.setItem('score', 0);
let score = parseInt(localStorage.getItem('score'));
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        setTimeout((clearInterval(downloadTimer)), 4000);
        clearInterval(downloadTimer);
        setTimeout((location.assign('./game5.html')), 4000)
    } else if (timeleft > 0 && timeleft != 1) {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    } else if (timeleft = 1) {
        document.getElementById("timer").innerHTML = timeleft + " second remaining";

    }
    timeleft -= 1;

    console.log(edit.value);
    console.log(timeleft)
    if ( timeleft === 0 && Number(edit.value) === 24796) {
        localStorage.setItem('score', score + 500);
    } else if (timeleft === 0 && Number(edit.value) !== 24796) {
        localStorage.setItem('score', score + 0);
    }
    else if (timeleft === 0 && edit.value === null) {
        localStorage.setItem('score', score + 0);
    }
    else if (timeleft === 0) {
        localStorage.setItem('score', score + 0);
    } 
}, 1000);