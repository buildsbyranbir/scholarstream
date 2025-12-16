import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZdAbvVhj0tZOEMS7fWtvjAIeiTYezhEg",
  authDomain: "scholarstream-auth-20932.firebaseapp.com",
  projectId: "scholarstream-auth-20932",
  storageBucket: "scholarstream-auth-20932.appspot.com",
  messagingSenderId: "56986177032",
  appId: "1:56986177032:web:af642e76e82fbdfc780bbd"
};

const app = initializeApp(firebaseConfig);

// 
export const auth = getAuth(app);
