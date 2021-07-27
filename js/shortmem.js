
var timeleft = 10;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        // location.assign('./shortterm_game2.html');
    } else if (timeleft > 0 && timeleft != 1) {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    } else if (timeleft = 1) {
        document.getElementById("timer").innerHTML = timeleft + " second remaining";

    }
    timeleft -= 1;
}, 1000);

const edit = document.getElementById('editable');
const instruction = document.getElementById('instruction');

const check = () => {
    console.log(typeof edit.value);
    if (edit.value.length === 6 && timeleft === 0 && Number(edit.value) === 905674) {
        instruction.style.color = 'blue';
        instruction.innerHTML = 'Good!!'
        setTimeout(location.assign('./shortterm_game4.html'), 3 * 1000);
    } else if (timeleft === 0 && Number(edit.value) !== 905674) {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
    else if (timeleft === 0 && edit.value === null) {
        instruction.style.color = 'red';
        instruction.innerHTML = 'Game Over!!'
    }
    // else {
    //     instruction.style.color = 'red';
    //     instruction.innerHTML = 'Game Over!!'
    // }
}

check();

