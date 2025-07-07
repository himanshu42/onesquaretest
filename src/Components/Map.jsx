import React from 'react'
import MapImg from '../assets/Desktop/baneer-5.png'
import logo from '../assets/Desktop/maplogo.png'

const Map = () => {
  return (
    <div style={{marginTop:50,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <img src={MapImg} alt='logo' style={{width:'80%'}} />
        <img src={logo} alt='logo' style={{width:'15%',marginTop:40}} />
    </div>
  )
}

export default Map