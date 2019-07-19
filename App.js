import React from 'react';
import { useState,useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let a = window.localStorage.getItem("numbers");
  let arrayfromStorage =a?a.split(','):[];
  
  let [numbers,setNumbers] = useState(arrayfromStorage);

  useEffect(() => {
    window.localStorage.setItem("numbers",numbers);
  }, [numbers]);

  return (
    <div className="App">
      <header className="App-header">
        <p className="text">
          Sample Forms App
        </p>

        <p className="text">
          Please enter a number to add to the list
        </p>
        <input type="text" id="num"/>
        <br/><br/>
        <button type="button" onClick={()=>{setNumbers([...numbers,document.getElementById("num").value]);document.getElementById("num").value=""; }}>Enter the number in list</button> 
        {numbers && numbers.length>0 ? numbers.map((x,i)=><div key={i}><p className="text">{x}</p><p className="text" onClick={()=>setNumbers(numbers.slice(x))}>Remove Number from the List</p></div>) :""}
      </header>
    </div>
  );
}

export default App;
