var firebaseConfig = {
  apiKey: "AIzaSyBz4LMpPi5ZKSQ-zzymv_ASTOKpM8wN7-8",
  authDomain: "complaint-form-6dd86.firebaseapp.com",
  databaseURL: "https://complaint-form-6dd86.firebaseio.com",
  projectId: "complaint-form-6dd86",
  storageBucket: "complaint-form-6dd86.appspot.com",
  messagingSenderId: "504516080597",
  appId: "1:504516080597:web:02bb672cf3a651fccb835c",
  measurementId: "G-FG8N4V4NKV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
  

const auth = firebase.auth()
const db = firebase.firestore()


const login = document.querySelector('#ComplaintForm');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = login['name'].value;
    const password = login['password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      window.location.href = "Complaint.html";        
    })
    });        
  
  
