import React, { useState, useEffect } from 'react';
import './styles.css';
import {signinwithgoogle, signOutWithGoogle, auth} from './firebase';
import computerImg from './computer.jpg';
import introImg from './black.gif';
import Candle from "./candle.gif";







function InputForm() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
 


  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsSignedIn(true);
        setEmail(user.email);
      } else {
        setIsSignedIn(false);
        setEmail('');
      }
    });
  }, [isSignedIn]);

  useEffect(() => {
    if (isSignedIn && email !== "prelog.laptop123@gmail.com") {
      setTimeout(() => {
        signOutWithGoogle();
        setEmail('');
      }, 10000);
    }
  }, [isSignedIn, email])

  return (
    <div>
      
        { !isSignedIn &&
        <div>
           <div className="header">
          <>
            <h1></h1>
            <button onClick={signinwithgoogle} type="button" class="login-with-google-btn">Sign in With Google</button>
           

          </>
        </div>
        <br></br>
        <div className='the-intro'>
        <img src={introImg} className="monitor-animation" alt="Computer" />
        <p className="center-text-style">Please sign in to continue</p>
        </div>
        </div>
        }
        { isSignedIn &&
          <>
            <button onClick={signOutWithGoogle} type="button" class="signout-with-google-btn">Sign out</button>


          </>
        }
      
      { isSignedIn && email !== "prelog.laptop123@gmail.com" &&
      <div>
        <div className="animation-container">
        </div>
        <div className="not-authorized-container">
        <img src={computerImg} className={`computer-image ${isSignedIn && email !== "prelog.laptop123@gmail.com" ? "computer-image" : ""}`} alt="Computer" />
          <p>Your email is not authorized to access this feature</p>
          <br></br>
          <p>If you would like access it, please contact the admin</p>
        </div>
        </div>
        
      }
      { isSignedIn && email === "prelog.laptop123@gmail.com" &&
        <div className="notion-button-container">
          <button class="notion-button" onClick={() => window.location.href = "https://mellow-roarer-f18.notion.site/Osnovno-tkivo-c7df6096f8234f7f8e1e44b344a5c05d"}>Notion</button>
          <br></br>
          <br></br> {/* add a line break to separate the button and the gif */}
          <img src={Candle} className="candle-gif" alt="Black and white Candle burning" style={{width: "25%", height: "auto"}} />
        </div>
        
      }
      

    </div>  
  );
}

export default InputForm;
