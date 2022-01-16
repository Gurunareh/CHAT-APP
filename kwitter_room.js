
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC2xb5iGx6trIIWeYIjGp9cskbx95kBntU",
      authDomain: "practice-8ae4d.firebaseapp.com",
      databaseURL: "https://practice-8ae4d-default-rtdb.firebaseio.com",
      projectId: "practice-8ae4d",
      storageBucket: "practice-8ae4d.appspot.com",
      messagingSenderId: "502753078950",
      appId: "1:502753078950:web:3c8c9c28fdab4516078e67"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
