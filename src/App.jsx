import { useState } from 'react'
import './App.css'



function App() {
  const[length,setLength] = useState(8);
  const[uppercase,setUpperCase] = useState(true);
  const[lowercase,setLowerCase] = useState(true);
  const[numbers,setNumber] = useState(true);
  const[symbols,setSymbols] = useState(true);
  const[password,setPassword] = useState("");

  const generatePassword = () =>
  {
     let charset = "";
     if(uppercase) charset += "QWERTYUIOPASDFGHJKLZXCVBNM";
     if(lowercase) charset += "qwertyuiopasdfghjklzxcvbnm";
     if(numbers) charset += "1234567890";
     if(symbols) charset += "!@#$%^&*()-=+_";

     let generatedPass = "";

     for(let i = 0 ; i<length ; i++)
      {
        const randomIndex = Math.floor(Math.random() * charset.length);
        generatedPass += charset[randomIndex];
      }
      
      setPassword(generatedPass);
  }

  const copyToClipboard = () => 
  {
      navigator.clipboard.writeText(password);
      alert("Password Copied!");

  }



  return (
    <>
      <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length : </label>
            <input type="number" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
        </div>

        <div className="checkbox-grp">
          <input type="checkbox" id='upper' checked={uppercase} onChange={(e) => setUpperCase(e.target.checked)}/>
          <label htmlFor="upper">Include Uppercase</label>
        </div>

        <div className="checkbox-grp">
          <input type="checkbox" id='lower' checked={lowercase} onChange={(e) => setLowerCase(e.target.checked)}/>
          <label htmlFor="lower">Include Lowercase</label>
        </div>
        
        <div className="checkbox-grp">
          <input type="checkbox" id='number' checked={numbers} onChange={(e) => setNumber(e.target.checked)}/>
          <label htmlFor="number">Include Numbers</label>
        </div>

        <div className="checkbox-grp">
          <input type="checkbox" id='symbol' checked={symbols} onChange={(e) => setSymbols(e.target.checked)}/>
          <label htmlFor="symbol">Include Symbols</label>
        </div>

        <button className='generate-btn' onClick={generatePassword}>
          Generate Password
        </button>

        <div className="generated-password">
          <input type="text" readOnly  value={password}/>
          <button  className='copy-btn' onClick={copyToClipboard}>Copy</button>
        </div>

        <div className="copyrights">
          <p>Designed by <span>Kaarthik</span></p>
        </div>

      </div>
    </>
  )
}

export default App
