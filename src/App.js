import './App.css';
import {useState,useEffect,useReducer} from "react";




function App() {
  const [checked,setChecked]=useReducer((checked)=> !checked,
  false);
  // const [secondary,setSecondary]=useState("tired");


  // useEffect(()=>{
  //   console.log("It's ",emotion,'right now');
  // },[emotion])
  

  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked
      }/>
      <label>
        {checked ? "checked" : "not checked"}
      </label>
        </div>
    // <div className="App">
    //   <h1>Current emotion is {emotion}</h1>
    //   <button onClick={()=> {
    //     setEmotion("excited")
    //   }}>Excited</button>
    //   <button onClick={()=> {
    //     setEmotion("sad")
    //     }}>Sad</button>
    //   <h1>Current emotion is {secondary}</h1>
    //   <button onClick={()=> {
    //     setSecondary("energetic")
    //   }}>Energetic</button>
    //   <button onClick={()=> {
    //     setSecondary("lazy")
    //     }}>Lazy</button>
    // </div>
  );
}

export default App;
