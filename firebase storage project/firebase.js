import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6LvzhXIrhkirSOPjUnna2R0Mbn-2Ay5Q",
  authDomain: "fir-project-151a6.firebaseapp.com",
  projectId: "fir-project-151a6",
  storageBucket: "fir-project-151a6.firebasestorage.app",
  messagingSenderId: "178952993312",
  appId: "1:178952993312:web:df8b32fce9833385e79a45",
  measurementId: "G-G4M4KX4LD1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);