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

// reference messages collection
var messagesRef = firebase.database().ref('messages'); 
  




// listen for form submit
document.getElementById('ComplaintForm').addEventListener('submit', submitForm);

//submit form 
function submitForm(e){
 e.preventDefault();
 
 //get values
 var name = getInputVal('name');
 var email = getInputVal('email');
 var number = getInputVal('phone number');
 var message = getInputVal('message');
 ///save messages
 saveMessage(name, email, number, message);
 //alert
  document.querySelector('.alert').style.display='block';
  // hide alert 
  setTimeout(function(){ 
    document.querySelector('.alert').style.display='none';  
   },3000);
   document.getElementById('ComplaintForm').reset();


}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
//function to save messages to firebase
function saveMessage(name, email, number, message){
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        email: email,
        number: number,
        message: message
    })
}