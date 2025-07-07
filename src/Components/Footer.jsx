import React from 'react'
import logo1 from '../assets/logo and rera/logo1.png'
import rera from '../assets/logo and rera/rera.png'
import insta from '../assets/icons/1.png'
import youtube from '../assets/icons/2.png'
import fb from '../assets/icons/3.png'
import ln from '../assets/icons/4.png'
import { Phone, PhoneIcon } from 'lucide-react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#231e1f",padding:30}}>
        <div className='footerdiv'>
            <div className='ftrimgbrdr'>
                <img src={logo1} alt='logo' style={{width:"100%"}} />
            </div>
            <div className='footeraddress'>
                <p className='footertitle'>SITE ADDRESS</p>
                <p className='footerpara'>Astoria Royals, Aundh-Ravet BRTS Road, Ravet, Pimpri-Chinchwad, Maharashtra - 42101</p>
                <br />
                <p className='footertitle'>COORPORATE OFFICE</p>
                <p className='footerpara'>Amar Buisness Zone, B Wing, Office No. 902 S. No. 87/1A & 87 (Part), Baner, Pune - 411045</p>
            </div>
            <div className='footerphonediv'>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                    <div style={{backgroundColor:"white",width:30,height:30,borderRadius:50,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <PhoneIcon size={20} />
                    </div>
                    <p className='footerphone'>00000 00000</p>
                </div>
                <img src={rera} style={{marginTop:10}}/>
                <div style={{display:'flex',alignItems:'center',gap:20,marginTop:10}}>
                    <img src={insta} style={{width:30}} />
                    <img src={youtube} style={{width:30}} />
                    <img src={fb} style={{width:30}} />
                    <img src={ln} style={{width:30}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer