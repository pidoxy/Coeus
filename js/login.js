//Sign in function
const signInWithEmailFunction = () => {

    const mail = document.getElementById('email');
    const passwordOne = document.getElementById('passwordOne');
    const errorMes = document.getElementById('error');
    const login = document.getElementById('login');

    
    const email = mail.value;
    const password = passwordOne.value;

    //Built in firebase function responsible for authentication
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            //Signed in successfully
            window.location.assign('./dashboard.html')
        })
        .catch(error => {
            //Something went wrong
            console.error(error);
            errorMes.innerHTML = error;

        })
}

//Adds the click event to the signInWithMail button
//so it calls the signInWithEmail function whenever a user clicks on it
login.addEventListener('click', signInWithEmailFunction);


//Go to signup page
// login.addEventListener('click', () => {
//     window.location.assign('./signup.html');
// });