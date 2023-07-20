import './App.css';
import {useRef,useState,useEffect} from "react";



function GithubUser({name}){
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

function App() {
  const [data,setData]=useState(null);
  useEffect(()=>{
    fetch("https://api.github.com/users/25sudharsan27").then((response)=>response.json()).then(setData);
  },[])
  if (data)
    return  <GithubUser name={data.name} />;
    

    

}

export default App;
