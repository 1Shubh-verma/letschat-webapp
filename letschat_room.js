
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
      var firebaseConfig = {
      apiKey: "AIzaSyCpd9fjwzXdYuG6aZWfODJIShJ3dqZK9Xk",
      authDomain: "kwiter-4eb63.firebaseapp.com",
      databaseURL: "https://kwiter-4eb63-default-rtdb.firebaseio.com",
      projectId: "kwiter-4eb63",
      storageBucket: "kwiter-4eb63.appspot.com",
      messagingSenderId: "762713520101",
      appId: "1:762713520101:web:c0ccfcfbff9ade9a25210c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addroom() {
      Room_name = document.getElementById("Room_name").value;
      
      firebase.database().ref("/").child(Room_name).update({
            purpose: "test"
          }); 
      
      localStorage.setItem("Room_name", Room_name);
      
      window.location = "letschat_page.html";
      
      }
      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -" + Room_names);
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}

getData();



function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Room_name", name);
      window.location = "letschat_page.html";
} 
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("Room_name");
window.location = "letschat_loggin.html";
}