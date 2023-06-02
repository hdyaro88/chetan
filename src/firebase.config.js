import { initializeApp, getApp, getApps, } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCn1-UnYNFxLRZwPm5GV7kztnyaVFG4GqU",
  authDomain: "udaipurcity-51996.firebaseapp.com",
  databaseURL: "https://udaipurcity-51996-default-rtdb.firebaseio.com",
  projectId: "udaipurcity-51996",
  storageBucket: "udaipurcity-51996.appspot.com",
  messagingSenderId: "1098591328314",
  appId: "1:1098591328314:web:bfc58e5e3b8c4df0f97d03"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }

