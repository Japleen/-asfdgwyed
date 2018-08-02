
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrUUhjhzVmekin510L7L2rOWtpyShZ0bU",
    authDomain: "fire-base-login-app.firebaseapp.com",
    databaseURL: "https://fire-base-login-app.firebaseio.com",
    projectId: "fire-base-login-app",
    storageBucket: "fire-base-login-app.appspot.com",
    messagingSenderId: "704226201657"
  };
  firebase.initializeApp(config);
 var root = firebase.database().ref('fire-base-login-app');
 var userLoginDetailsPath = firebase.database().ref('user_login_details');
 userLoginDetailsPath.set(null);
 userLoginDetailsPath.child('user_count').set(0);

function addUserDetailToFireBaseDB(){

  var userEmailId = $("#email").val();
  var userName    = $("#name").val();
  var userLoginDetailUpdate;


    userLoginDetailsPath.child('user_count').once('value').then(function (snapShot){
      // console.log(snapShot.val());
      userLoginDetailsPath.child('user_count').set(snapShot.val() + 1);
      var userKey = "user_" + snapShot.val();
      console.log(userKey);
      userLoginDetailUpdate = {
                               [userKey] : {
                                            user_email_id : userEmailId,
                                            user_name     : userName,
                                            user_created_time: firebase.database.ServerValue.TIMESTAMP
                                          }
                              }
      // console.log(userLoginDetailUpdate);
      userLoginDetailsPath.update(userLoginDetailUpdate);
    });



}
