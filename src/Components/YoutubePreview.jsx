import React from 'react'
import youtube from '../assets/Desktop/yt.png'

const YoutubePreview = ({title}) => {
  return (
    <div style={{marginTop:100}}>
        <h1 className='yttitle'>{title}</h1>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={youtube} style={{border:'3px solid #cda43f', width:'70%'}} />
        </div>
    </div>
  )
}

export default YoutubePreview