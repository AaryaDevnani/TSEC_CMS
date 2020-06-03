
 var firebaseConfig = {
    apiKey: "AIzaSyDI2oHQ6n6vcAuH0ywUB0GdOwV8hxXwAhA",
    authDomain: "admin-login-page.firebaseapp.com",
    databaseURL: "https://admin-login-page.firebaseio.com",
    projectId: "admin-login-page",
    storageBucket: "admin-login-page.appspot.com",
    messagingSenderId: "119955375407",
    appId: "1:119955375407:web:9bd1cb747678ab58e4cdda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth = firebase.auth()
const db = firebase.firestore()


const login = document.querySelector('#ComplaintForm');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = login['name'].value;
    const password = login['password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        window.location.href = "display.html";        
    })
   
  })


