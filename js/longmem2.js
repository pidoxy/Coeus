
var timeleft = 10;
const edit = document.getElementById('editable');
const instruction = document.getElementById('instruction');
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        setTimeout((clearInterval(downloadTimer)), 4000);
        clearInterval(downloadTimer);
        setTimeout((location.assign('./longterm_game3.html')), 4000)
    } else if (timeleft > 0 && timeleft != 1) {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    } else if (timeleft = 1) {
        document.getElementById("timer").innerHTML = timeleft + " second remaining";

    }
    timeleft -= 1;

    console.log(edit.value);
    console.log(timeleft)
    if (edit.value.length === 1 && timeleft === 0 && Number(edit.value) === 6) {
        instruction.style.color = 'blue';
        instruction.innerHTML = 'Good!!'
    } else if (timeleft === 0 && Number(edit.value) !== 6) {
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