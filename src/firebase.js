
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCnEEKzz7dlZt62-b7mn4-ZsIIoUemVXQA",
  authDomain: "drawerwidget.firebaseapp.com",
  projectId: "drawerwidget",
  storageBucket: "drawerwidget.appspot.com",
  messagingSenderId: "10365101073",
  appId: "1:10365101073:web:73f628e259651821d87db0"
};


const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export {db};