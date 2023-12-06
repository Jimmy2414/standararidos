import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC3dLt4mnYGTSt22H1v08vM1hTXUx1YkxQ",
  authDomain: "standararidosupdated.firebaseapp.com",
  projectId: "standararidosupdated",
  storageBucket: "standararidosupdated.appspot.com",
  messagingSenderId: "834376406928",
  appId: "1:834376406928:web:ae635edef92664c3e94515",
  measurementId: "G-R10124F8W9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)

export function uploadFile(file) {
  const storageRef = ref(storage, 'some-child')
  uploadBytes(storageRef, file).then(snapshot => {
    console.log(snapshot)
  })
}