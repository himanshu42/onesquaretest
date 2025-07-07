import React, { useState } from 'react'
import formimg from '../assets/Desktop/baneer-4.png'

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation or submission logic here
    alert('Form submitted!');
  };

  return (
    <div style={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center',marginTop:'80px'}}>
      <div style={{display:'flex',alignItems:'center', width:'90%',gap:10}}>
        <div style={{width:'50%',border: '3px solid #cda43f'}}>
          <form onSubmit={handleSubmit}>
            <div className='formtitle'>
              <h1>THE SUITE LIFE UPGRADE</h1>
              <h1>YOU'VE BEEN WAITING</h1>
              <h1>FOR IS HERE</h1>
            </div>
            <div className='forminput'>
              <p>Name*</p>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='forminput'>
              <p>Email*</p>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='forminput'>
              <p>Phone Number*</p>
              <input
                type='tel'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className='formbutton'>
              <button type="submit">KNOW MORE</button>
            </div>
            <div className='formterms'>
              <p style={{marginBottom:'10px'}}>*T&C Apply</p>
              <p>*Your privacy is very important to us;</p>
              <p>we will never share your information</p>
            </div>
          </form>
        </div>
        <div style={{width:'50%'}}>
          <img style={{width:'100%'}} src={formimg} alt='Form banner' />
        </div>
      </div>
    </div>
  )
}

export default Form