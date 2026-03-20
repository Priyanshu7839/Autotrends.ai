import { createContext,useContext,useState,useEffect } from "react";
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, RecaptchaVerifier, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCWXlwLEKh_w_U5AHdhoDBq1XCaPf7Lsvk",
  authDomain: "autotrends-f0350.firebaseapp.com",
  projectId: "autotrends-f0350",
  storageBucket: "autotrends-f0350.firebasestorage.app",
  messagingSenderId: "801755716589",
  appId: "1:801755716589:web:580765dbe9c53b9d9fa5e4",
  measurementId: "G-4FBTH79S88"
  };

  const firebaseapp = initializeApp(firebaseConfig)
  const firebaseAuth = getAuth(firebaseapp)
  const FirebaseContext = createContext(null)



  export const useFirebase = () => useContext(FirebaseContext)

  const googleProvider = new GoogleAuthProvider();



  export const FirebaseProvider = (props) => {



    const [currentUser,setCurrentUser] = useState(null);

   

    const loginwithemailandpassword = (email,password) =>{
        return signInWithEmailAndPassword(firebaseAuth,email,password)

    }

    const Signinwithgoogle = () => {
            signInWithPopup(firebaseAuth,googleProvider)
    }


    useEffect(() => {
     
        const checkButton = setInterval(() => {
          if (document.getElementById("recaptcha-container")) {
            clearInterval(checkButton); 
            if (!window.recaptchaVerifier) {
              window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, "recaptcha-container", {
                size: "invisible",
                callback: (response) => {
                    console.log("reCAPTCHA solved:", response);
                },
              });
            }
          }
        }, 100); // Check every 100ms
      }, []);

      const PhoneNumberSignIn = ({formattedPhone,setMessage,setError,setConfirmationResult}) => {
              signInWithPhoneNumber(firebaseAuth, formattedPhone, window.recaptchaVerifier)
                  .then((result) => {
                    setConfirmationResult(result);
                    console.log("otp chala gya")
                    setMessage("OTP sent successfully!");
                  })
                  .catch((error) => {
                    console.error("Error sending OTP:", error);
                    setError(true);
                    setMessage("Failed to send OTP. Try again.");
                  });
      }


    

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(firebaseAuth,(user)=>{
            setCurrentUser(user||null)
        })

        return() => {
            unsubscribe()
        }
    },[])


    




    const logout = () => {
        return signOut(firebaseAuth)
    }




   


    return (
        <FirebaseContext.Provider value={{loginwithemailandpassword,currentUser,signOut,Signinwithgoogle,logout,PhoneNumberSignIn}}>
            {props.children}
        </FirebaseContext.Provider>
      )
  }