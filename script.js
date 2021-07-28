
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
    window.location.href = '/memoryTest.html';
}