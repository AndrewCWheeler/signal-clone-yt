import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC75nfBLdroeNGuQCEivwWNS-PSRkNO33Y',
  authDomain: 'signal-clone-yt-build-fee0f.firebaseapp.com',
  projectId: 'signal-clone-yt-build-fee0f',
  storageBucket: 'signal-clone-yt-build-fee0f.appspot.com',
  messagingSenderId: '878928087168',
  appId: '1:878928087168:web:fd7b5abc466a8f6d3c7e65',
  measurementId: 'G-91DW572623',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
