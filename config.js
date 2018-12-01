var config = {
    apiKey: "AIzaSyDVnW46hwpOg5arGGMS4B83ZLRoca1lJhc",
    authDomain: "learning-firebase-66468.firebaseapp.com",
    databaseURL: "https://learning-firebase-66468.firebaseio.com",
    projectId: "learning-firebase-66468",
    storageBucket: "learning-firebase-66468.appspot.com",
    messagingSenderId: "25364372491"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true })
