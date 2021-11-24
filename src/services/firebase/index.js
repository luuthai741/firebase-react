import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA1kko6otboz7ybLcFsJybh-PhuBiccbdg",
    authDomain: "test-firebase-10726.firebaseapp.com",
    projectId: "test-firebase-10726",
    storageBucket: "test-firebase-10726.appspot.com",
    messagingSenderId: "18202756509",
    appId: "1:18202756509:web:5f5f2f71355c1f50615b74",
    measurementId: "G-97Q0C3Q426"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
// console.log(auth);
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        console.log("Google account login success :" + user);

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

const registerWithEmailAndPassword = async (data) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(data.email, data.password);
        const user = res.user;
        console.log("Sign up account success :" + user);
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

const signInWithEmailAndPassword = async data => {
    try {
        const res = await auth.signInWithEmailAndPassword(data.email, data.password);
        const user = res.user;
        console.log("Login success :" + user);

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

const resetPasswordByEmail = async email => {
    try {
        await auth.sendPasswordResetEmail(email);
        console.log("Reset password has send to your email. ");
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

const logout = async () => {
    try {
        await auth.signOut();
        console.log("Logout success ");
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}



export {
    app,
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    resetPasswordByEmail,
    registerWithEmailAndPassword,
    logout
}