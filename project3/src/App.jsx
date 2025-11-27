import {  useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [excuse,setexcuse]=useState('')
  
  const getData=async(category)=>{
    try {
       const res =await axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
       setexcuse(res.data[0].excuse)
    } catch (error) {
      console.log(error)
    }
   
  }
 
  return (
    <>
    <body >

  <main className="main">
    
   
      <div className="content">
         <button onClick={()=>{getData("office")}}>show office excuse</button>
         <button onClick={()=>{getData("family")}}>show family excuse</button>
         <button onClick={()=>{getData("college")}}>show college excuse</button>

         <h1>{excuse}</h1>
        
      </div>

    
  
  </main>

</body>
</>
  )
}

export default App
