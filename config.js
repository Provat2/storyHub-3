import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDd5BYAa-mOeI5ND0sxQgevq71hySgWtaA",
    authDomain: "storytime-42047.firebaseapp.com",
    projectId: "storytime-42047",
    storageBucket: "storytime-42047.appspot.com",
    messagingSenderId: "148860670358",
    appId: "1:148860670358:web:bf6e4bc20aa1f483468db7",
    measurementId: "G-19BGEEK4VQ"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();