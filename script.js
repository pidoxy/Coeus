
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD2aDdWjyxcMSOTNezLfffQ_r_xX-BDYjQ",
    authDomain: "coeus-bdc5a.firebaseapp.com",
    projectId: "coeus-bdc5a",
    storageBucket: "coeus-bdc5a.appspot.com",
    messagingSenderId: "581258854646",
    appId: "1:581258854646:web:8404ffd976e6ac0c90acd7",
    measurementId: "G-WPF5SM7SNY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

const playGame = () => {
    window.location.href = '/signup.html';
}

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