
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDtrZo5QWB1DkdUgEWVZYq9qtCUhlemdgc",
//   authDomain: "eleven-cfa1a.firebaseapp.com",
//   projectId: "eleven-cfa1a",
//   storageBucket: "eleven-cfa1a.appspot.com",
//   messagingSenderId: "1051721892808",
//   appId: "1:1051721892808:web:be965de6444a106cbeb6fd"
// };


const app = initializeApp(firebaseConfig);

export default app;