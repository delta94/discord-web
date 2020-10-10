import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6yUOtTx1k0bvMiIP77-RyskrLUNWXDz8',
  authDomain: 'discord-web-e2888.firebaseapp.com',
  databaseURL: 'https://discord-web-e2888.firebaseio.com',
  projectId: 'discord-web-e2888',
  storageBucket: 'discord-web-e2888.appspot.com',
  messagingSenderId: '900798198425',
  appId: '1:900798198425:web:32c8cbfe3e551fd50efe08',
  measurementId: 'G-RTWZYL7M9E',
};

// let app;
// let db;
// let auth;
// let provider;

// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;

// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig).firestore()
//   : firebase.app().firestore();

// const app = firebase.initializeApp();
