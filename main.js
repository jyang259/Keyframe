(function () {
    
    "use strict";
    // Initialize Firebase Authentication
      var config = {
        apiKey: "AIzaSyA61o9LQ4H70uAjR9AmAHEJ6odu0XJKOCQ",
        authDomain: "keyframe-efc93.firebaseapp.com",
        databaseURL: "https://keyframe-efc93.firebaseio.com",
        projectId: "keyframe-efc93",
        storageBucket: "keyframe-efc93.appspot.com",
        messagingSenderId: "546051631885"
      };
      var Firebase = firebase.initializeApp(config);

    //Initialize Firebase Realtime Database 
    
    //Get Elements
    const textEmail = document.getElementById('textEmail');
    const textPassword = document.getElementById('textPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');
    
    //Add login event
    btnLogin.addEventListener('click', e => {
        //Get Email and Password
        const email = textEmail.value;
        const password = textPassword.value;
        const auth = Firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });
    
    //Add sign up event
    btnSignup.addEventListener('click', e => {
        //Get Email and Password
        //TODO: check for real emails
        const email = textEmail.value;
        const password = textPassword.value;
        const auth = Firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });
    
    // btnLogout.addEventListener('click', e => {
    //     firebase.auth().signOut();
    // });

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else{
            console.log('not logged in');
        }
    });
    
 }() );