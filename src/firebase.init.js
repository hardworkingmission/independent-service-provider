// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyAma-0CI122-3ygErGOWT4y0ZRAvfqEh7M",
  authDomain: "independent-service-prov-43b70.firebaseapp.com",
  projectId: "independent-service-prov-43b70",
  storageBucket: "independent-service-prov-43b70.appspot.com",
  messagingSenderId: "231421529129",
  appId: "1:231421529129:web:eee5f4c4e89555b31a2038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
