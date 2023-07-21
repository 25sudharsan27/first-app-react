import './App.css';
import {useRef,useState,useEffect} from "react";
import {Link} from "react-router-dom";


function Home(){
  return (
    <div>
    <nav>
      <Link to ="/about">About</Link>
      <Link to ="/contact">Contact</Link>
    </nav>
    <h1>My Website</h1>
    </div>
  )
}

export function About(){
  return (
    <div>
      <nav>
        <Link  to ="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About us</h1>
    </div>
  )
}

export function Contact(){
  return (
    <div>
      <nav>
        <Link  to ="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    <h1>Contact us</h1>
    </div>
  )
}

export function App() {
  return <h1>My Website</h1>

}

export default Home;


