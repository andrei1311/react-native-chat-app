import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCYXKncnAsYcWzVyIO7ARPKgYkhOA3o4k",
  authDomain: "chat-4551e.firebaseapp.com",
  projectId: "chat-4551e",
  storageBucket: "chat-4551e.appspot.com",
  messagingSenderId: "995791069997",
  appId: "1:995791069997:web:601424566b622c5260a9a4",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
