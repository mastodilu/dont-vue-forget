import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2YQlAfvJ3kTsmgjf76scsZbnDgVSodNs",
  authDomain: "dont-forget-20c3e.firebaseapp.com",
  databaseURL: "https://dont-forget-20c3e.firebaseio.com",
  projectId: "dont-forget-20c3e",
  storageBucket: "dont-forget-20c3e.appspot.com",
  messagingSenderId: "79693868177",
  appId: "1:79693868177:web:8403c3ab8d01434c6fe330"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()