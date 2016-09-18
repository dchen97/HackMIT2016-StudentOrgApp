// FirebaseUI config.
var uiConfig = {
  'signInSuccessUrl': '/login-success.html',
  'signInOptions': [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  'tosUrl': '<your-tos-url>',
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

//var Firebase = require("firebase");

//storing into db: function needs to be called when button is clicked.
//waiting for buttons to be implemented before fully setting up the function. 

/* userID: INT
 * name: String
 * eventname: String
 * attendance: bool (0 or 1)
 * permissions: ...
 */
function addData(userId, name, eventname, attendance) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    eventname: eventname,
    attendance: attendance
  });
}
