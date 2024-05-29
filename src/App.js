import { useState } from "react";
import WeatherWidget from "./componenets/weather";
import './App.css'

function App() {
  const [inputValue,setinputValue]= useState('London');
  const [location,setLocation]= useState('London');


  const handleFormSubmit=(e)=>{
    e.preventDefault();
    setLocation(inputValue);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={(e)=>{setinputValue(e.target.value)}}
        className="search"
        placeholder="Enter Your Location"
        ></input>
        <button type="submit" className="btn">Enter</button>
      </form>
      <WeatherWidget location={location}/>
    </div>
  );
}

export default App;
