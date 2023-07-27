import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2MiNaRtjLtXTFLr0CY-3KIRB3jJb3dCA",
  authDomain: "clone-with-react-85303.firebaseapp.com",
  projectId: "clone-with-react-85303",
  storageBucket: "clone-with-react-85303.appspot.com",
  messagingSenderId: "902873947988",
  appId: "1:902873947988:web:a90449d5e58c50973f72c1",
  measurementId: "G-S55PZ4PH53"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };



// import firebase from 'firebase'
// const firebaseConfig = {
//   apiKey: "AIzaSyB2MiNaRtjLtXTFLr0CY-3KIRB3jJb3dCA",
//   authDomain: "clone-with-react-85303.firebaseapp.com",
//   projectId: "clone-with-react-85303",
//   storageBucket: "clone-with-react-85303.appspot.com",
//   messagingSenderId: "902873947988",
//   appId: "1:902873947988:web:a90449d5e58c50973f72c1",
//   measurementId: "G-S55PZ4PH53"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// export { db };