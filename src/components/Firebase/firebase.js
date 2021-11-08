import app from 'firebase/compat/app';
import 'firebase/compat/auth';

const config= {
    apiKey: "AIzaSyDTBFpn7nN3alojEftTHHr0ASBFCPAcPRw",
    authDomain: "marvel-79115.firebaseapp.com",
    projectId: "marvel-79115",
    storageBucket: "marvel-79115.appspot.com",
    messagingSenderId: "715983999076",
    appId: "1:715983999076:web:78f2c3925c0a8c20428f71"
}

class Firebase {
    constructor(){
        app.initializeApp(config)
        this.auth=app.auth();
    }

    //inscription
    signupUser =(email,password) =>
    this.auth.createUserWithEmailAndPassword(email,password)

    //connexion
    loginUser =(email,password) =>
    this.auth.signInWithEmailAndPassword(email,password)

    //deconnexion
    signOutUser=() =>
    this.auth.signOut()
}

export default Firebase;