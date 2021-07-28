const mail = document.getElementById('email');
const fullname = document.getElementById('fullname');
const passwordOne = document.getElementById('passwordOne');
const passwordTwo = document.getElementById('passwordTwo');

const errorMes = document.getElementById('error');
// const photoField = document.getElementById('photo');
// const labels = document.getElementsByTagName('label');
const signUp = document.getElementById('signup');
// const failureModal = document.querySelector('.failure');
// const feedbackMessage = document.querySelector('.feedbackMessage');

    //auth.languageCode = 'fr_FR'; //Sending verification emails only in french


// const validate = () => {
//     let inValid = passwordOne !== passwordTwo ||
//         passwordOne === '' ||
//         email === '' ||
//         fullname === '';

//     console.log(inValid);
//     if (inValid === true) {
//         signUp.setAttribute("disabled", true);
//     } else if (inValid === false) {
//         signUp.removeAttribute("disabled");

//     }

// }

const signUpFunction = () => {
    const email = mail.value;
    const password = passwordOne.value;

    //Built in firebase function responsible for signing up a user
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Signed Up Successfully !');
            sendVerificationEmail();
            window.location.assign('./login.html')

        })
        .catch(error => {
            console.error(error);
            errorMes.innerHTML = error;
        })
}

//Function called right after the signUpWithEmailAndPassword to send verification emails
const sendVerificationEmail = () => {
    //Built in firebase function responsible for sending the verification email
    auth.currentUser.sendEmailVerification()
        .then(() => {
            console.log('Verification Email Sent Successfully !');
            //redirecting the user to the profile page once everything is done correctly
            window.location.assign('../dashboard.html');
        })
        .catch(error => {
            console.error(error);
        })
}

signUp.addEventListener('click', signUpFunction);


//Animations
// mail.addEventListener('focus', () => {
//     labels.item(0).className = "focused-field";
// });

// passwordOne.addEventListener('focus', () => {
//     labels.item(1).className = "focused-field";
// });

// mail.addEventListener('blur', () => {
//     if (!mailField.value)
//         labels.item(0).className = "unfocused-field";
// });

// passwordOne.addEventListener('blur', () => {
//     if (!passwordField.value)
//         labels.item(1).className = "unfocused-field";
// });




// const signUp = () => {

//     signUpBtn = document.getElementById('signup');
//     email = document.getElementById('email').value;
//     fullname = document.getElementById('fullname').value;
//     passwordOne = document.getElementById('passwordOne').value;
//     passwordTwo = document.getElementById('passwordOne').value;
//     error = document.getElementById('errors');

//     

//     validatePassword();

//     // auth.doCreateUserWithEmailAndPassword(email, passwordOne)
//     //     .then(() => {
//     //         // Create a user in your Firebase realtime database
//     //         let user = auth.currentUser

//     //         let database_ref = database.ref();

//     //         let user_data = {
//     //             email,
//     //             fullname,
//     //         }

//     //         database_ref.child('users/' + user.uid).set(user_data)
//     //     })
//     //     .then(() => {
//     //         this.setState({ ...INITIAL_STATE });
//     //         this.props.history.push(ROUTES.HOME);
//     //     })
//     //     .catch(error => {
//     //         let error_code = error.code;
//     //         error = error.message;
//     //         console.log(error_code);
//     //     });

//     // Sign in function
//     const signInWithEmailFunction = () => {
//         // const email = mailField.value;
//         // const password = passwordField.value;

//         //Built in firebase function responsible for authentication
//         auth.signInWithEmailAndPassword(email, passwordOne)
//             .then(() => {
//                 //Signed in successfully
//                 window.location.assign('./profile')
//             })
//             .catch(error => {
//                 //Something went wrong
//                 console.error(error);
//             })
//     }

//     //Adds the click event to the signInWithMail button
//     //so it calls the signInWithEmail function whenever a user clicks on it
//     signInWithMail.addEventListener('click', signInWithEmailFunction);

// }