import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword,
    signOut 
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmtq5tk3eTajoZYRooLQF3qPiUtns9M3U",
    authDomain: "netflix-clone-d99fc.firebaseapp.com",
    projectId: "netflix-clone-d99fc",
    storageBucket: "netflix-clone-d99fc.firebasestorage.app",
    messagingSenderId: "1006273835702",
    appId: "1:1006273835702:web:ddf71bf93948f4c1ad6c17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // ✅ Firebase Auth instance
const db = getFirestore(app);  // ✅ Firestore instance

// ✅ Explicitly export auth and db
export { auth, db, signup, signin, logout };

// Authentication functions
const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name: name,
            auth_provider: 'local',
            email,
        });
    } catch (error) {
        alert(error.message);
    }
};

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        alert(error.message);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        alert(error.message);
    }
};