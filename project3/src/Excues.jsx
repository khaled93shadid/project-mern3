import React, { useState } from 'react'
import axios from 'axios'

export const Excues = () => {
  const [excuse,setexcuse]=useState('')
  const [category,setcategory]=useState('')
  const getData=async()=>{

    const res =await axios.get(`https://excuser-three.vercel.app/v1/excuse/office/${category}`)
    setexcuse(res.data[0].excuse)
  }
  return (
    <>


    <button onClick={()=>{getData("office")}}>show office excuse</button>
    <button onClick={()=>{getData("family")}}>show family excuse</button>
    <button onClick={()=>{getData("excuse")}}>show college excuse</button>
    <p>{excuse}</p>

    </>
    
  )
}

export default Excues