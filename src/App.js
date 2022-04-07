import "./App.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";



const auth = getAuth(app);

function App() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleOnBlurEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handleOnBlurPassword=(event)=>{
    setPassword(event.target.value);
  }
  const handleOnSubmit=(event)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       
      const user = userCredential.user;
      console.log(user)
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    
    });
   

    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit} action="" style={{margin:"50px"}}>
        <input onBlur={handleOnBlurEmail} style={{width:"500px", height:"20px", padding:"10px"}} type="email" name="" id="email" placeholder="enter your email"  /> <br /> <br />
        <input onBlur={handleOnBlurPassword} style={{width:"500px", height:"20px",padding:"10px"}} type="password" name="" id="password" placeholder="enter your password"/> <br />
        <input style={{width:"100px", height:"20px", margin:"20px"}} type="submit" value="Sign In" />
        
      </form>
     
     
    </div>
  );
}

export default App;
