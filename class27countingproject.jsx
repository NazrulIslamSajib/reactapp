import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
    const [count,setCount]=useState(0);
    const handleincrement=()=>{
      setCount(count+1);
    }; 
    const handledec=()=>{
      setCount(count-1);
    }; 
    const dozero=()=>{
      setCount(0);
    };
    return <div> 
      <div>
        <h1>Number counting  : {count}</h1> 
        <button onClick={handleincrement}><h1>+</h1></button>  
        <button onClick={handledec}><h1>-</h1></button>  
        <button onClick={dozero}><h1>Reset</h1></button>

      </div>



    </div>
}

export default App
