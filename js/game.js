const goToGame = (props) => {
    if (props === 1) {
        window.location.href = '/shortterm.html';

    } else if (props === 2) {
        window.location.href = '/longterm.html';

    } else if (props === 3) {
        window.location.href = '/memoryTest.html';

    }
}

const workingMemory = () => {
    window.location.href = '/game.html';

}

const longTerm = () => {
    window.location.href = '/longterm_game.html';

}

const shortTerm = () => {
    window.location.href = '/shortterm_game.html';

}