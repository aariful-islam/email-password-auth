import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";



const auth = getAuth(app);

function App() {
  const handleOnBlur=(event)=>{
    console.log(event.target.value);
  }
  const handleOnChange=(event)=>{
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onChange={handleOnChange} action="" style={{margin:"50px"}}>
        <input onBlur={handleOnBlur} style={{width:"500px", height:"20px", padding:"10px"}} type="email" name="" id="" placeholder="enter your email"  /> <br /> <br />
        <input onBlur={handleOnBlur} style={{width:"500px", height:"20px",padding:"10px"}} type="password" name="" id="" placeholder="enter your password"/> <br />
        <input style={{width:"100px", height:"20px", margin:"20px"}} type="submit" value="Sign In" />
        
      </form>
     
     
    </div>
  );
}

export default App;
