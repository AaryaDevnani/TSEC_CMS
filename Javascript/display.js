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
 const db = firebase.database() 
db.collection('messages').get().then((snapshot) => {
  console.log(snapshot.docs)
})

 