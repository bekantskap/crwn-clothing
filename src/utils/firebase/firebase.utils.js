import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAt4XiSeuJHNzcMgJP3b1iiKPkRxsN2k6w',
  authDomain: 'crwn-clothing-db-aad2b.firebaseapp.com',
  projectId: 'crwn-clothing-db-aad2b',
  storageBucket: 'crwn-clothing-db-aad2b.appspot.com',
  messagingSenderId: '338577707531',
  appId: '1:338577707531:web:be18a7d46c1f0028d1ad0e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
};