import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
 let [length,setLength] = useState(5);
 let [password,setPassword] = useState('');
 let [allowChar,setAllowChar] = useState(false)
 let [allowNumb,setAllowNumb] = useState(false)
const PasswordGen = ()=> useCallback(()=>{
let pass = ''
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

if(allowChar) str +='!@#$%^&*()_+{}":<>?'
if(allowNumb) str +='124567890'

for(let i=1; i<=length; i++){
  let charac = Math.floor(Math.random()*str.length +1);
  pass += str.charAt(charac)
}
setPassword(pass)

},[length,setPassword,allowChar,allowNumb])

useEffect(PasswordGen(),[length,allowChar,allowNumb,setPassword])
  return (
    <>
      <div className="shine">Password Generator</div>
      <input
      value={password}
        type="text"
        name="text"
        className="input"
        placeholder="Password"
        readOnly
      />
      <div className="main-content">
        <div className="PB-range-slider-div">
          <div className="content">
            <input
              type="range"
              min={4}
              max={100}
              className="PB-range-slider"
              id="myRange"
              onChange={(e)=>setLength(e.target.value)}
            />
          </div>
          <h3 className="PB-range-slidervalue">Length: {length}</h3>
        </div>
        <label className="cyberpunk-checkbox-label">
          <input type="checkbox" className="cyberpunk-checkbox" 
          onClick={()=>setAllowNumb((prev)=> !prev)}
          />
          Allow Number
        </label>
        <label className="cyberpunk-checkbox-label">
          <input type="checkbox" className="cyberpunk-checkbox"
          onClick={()=>setAllowChar((prev)=>!prev)}
          />
          Allow Charac
        </label>
      </div>
    </>
  );
}

export default App;
