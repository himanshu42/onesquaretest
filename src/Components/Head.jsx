import React from 'react'
import logo from '../assets/logo and rera/logo1.png'
import button from '../assets/logo and rera/footer-1.png'
import menu from '../assets/logo and rera/footer-2.png'

const Head = () => {
  return (
    <div>
      <div className='header'>
        <div>
          <img style={{ width: `80%`, marginLeft: '5%' }} src={logo} alt='logo' />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 50 }}>
          <img style={{ width: `60%` }} src={button} alt='logo' />
          <img style={{ width: '14%', marginRight: '8%' }} src={menu} alt='logo' />
        </div>
      </div>
      <div className='mobileHeader'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 50 }}>
          <img style={{ width: `50%`, marginLeft: '5%' }} src={logo} alt='logo' />
          <img style={{ width: '8%', marginRight: '8%' }} src={menu} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Head