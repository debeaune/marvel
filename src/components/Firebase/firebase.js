import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config= {
    apiKey:'3b25be834a749dcca785e0ffd0e26573',
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
        this.db=app.firestore()
    }

    //inscription
    signupUser =(email,password) =>
    this.auth.createUserWithEmailAndPassword(email,password)

    //connexion
    loginUser =(email,password) =>
    this.auth.signInWithEmailAndPassword(email,password)

    //deconnexion
    signoutUser=() =>this.auth.signOut()

    //récupérer le mot de passe
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

    user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;