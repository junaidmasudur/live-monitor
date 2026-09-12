const firebaseConfig = {
  apiKey: "AIzaSyAgWdEYVqsAoyZBPJtGPv2wO8V0OmAYuhI",
  authDomain: "live-monitor-e6911-47b0f.firebaseapp.com",
  databaseURL: "https://live-monitor-e6911-47b0f-default-rtdb.firebaseio.com",
  projectId: "live-monitor-e6911-47b0f",
  storageBucket: "live-monitor-e6911-47b0f.firebasestorage.app",
  messagingSenderId: "242141509030",
  appId: "1:242141509030:web:9d90196cbdb486ec464b67"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();