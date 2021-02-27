import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBhDiDYyLJ_xLb3mIs54mu4E08DMD2p9XM",
  authDomain: "vr-expo.firebaseapp.com",
  databaseURL: "https://vr-expo.firebaseio.com",
  projectId: "vr-expo",
  storageBucket: "vr-expo.appspot.com",
  messagingSenderId: "797131676470",
  appId: "1:797131676470:web:66d8dcec7ab3419d8e7197",
  measurementId: "G-6DBKV0FRP0"



  // apiKey: 'AIzaSyAXTkHuSQ4OeoxdL1hur9NCAMiGmU_Arr0',
  // authDomain: 'aepc-india.firebaseapp.com',
  // databaseURL: 'https://aepc-india.firebaseio.com',
  // projectId: 'aepc-india',
  
  // storageBucket: 'aepc-india.appspot.com'
};
firebase.initializeApp(config);



export default firebase;