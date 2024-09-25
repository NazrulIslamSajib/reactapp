import React,{useState} from 'react'  

export default function Toggle() { 
  const [toggle,setToggle]=useState(true) 
  return (
    <div style={{margin:"1rem",backgroundColor:"pink",width:"1000px",height:"100px",textAlign:"center",padding:"5px"}}>
        
         {toggle &&(
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, facilis?</p>
         )}
         <div style={{textAlign:"center"}}> 
         <button onClick={()=>{setToggle(!toggle)}}> 
           {toggle?"Hide" : "Show"}</button>
    
         </div>
         
    </div>
  )
}
