
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
chatapp.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="<h1>Welcome "+user_name+"!</h1>";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          chatapp.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="chatapp_page.html";
    }
function getData() {
      chatapp.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="chatapp_page.html";
}