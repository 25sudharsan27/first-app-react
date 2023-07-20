import './App.css';
import {useRef,useState} from "react";



function App() {
  const colors=["#4b0082","#ff0000","#0000ff","#00ff00","#ffff00","#00ffff","#ff00ff","#c0c0c0","#808080","#800000","#808000","#008000","#800080","#008080","#000080","#ffffff","#000000"]
  const backgroundcolor=useRef("")
  console.log(backgroundcolor)

  const styleparagraph=()=>{
    backgroundcolor.current.style.color=colors[Math.floor(Math.random()*colors.length)]
    
  }
  return (
    <div className="App">
      <button onClick={styleparagraph}>click-me</button>
      <p ref={backgroundcolor}>Hello</p>
    </div>
  )

  

}

export default App;
