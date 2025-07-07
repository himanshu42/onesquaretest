import React, { useState } from 'react'
import formimg from '../assets/Desktop/baneer-4.png'
import axios from 'axios';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(form);
    try {
      const payload = {
        DataFrom: "T",                                    //required
        ApiKey: "a28cc43c-526d-4010-970e-0d0e92c18902",   	    //required same as mdoc project api key
        EnquiryDate: "2025-04-25",              //required YYYY-MM-DD
        Salutation: "",
        FirstName: form.name,		//required
        MiddleName: "",
        LastName: "",
        MobileNo: form.phone,		//required
        Email: form.email,		//required
        Preferences: "",			//1 BHK,2 BHK values same as mdoc
        Source: "Digitals",			//required same as mdoc source name
        SourceDetail: "Google Ad",	//required same as mdoc source 
        AgeRange: "",
        CurrentLivingPlace: "",
        NativePlace: "",
        Industry: "",
        CompanyName: "",
        Budget: "",
        PossessionReq: "",
        BuyingPurpose: "",
        BookingPlanWithin: "",
        PreferredBankForLoan: "",
        Country: "",
        State: "",
        City: "",
        PinCode: "",
        DOB: "",
        PanNo: "",
        PreferredLocation: "",
        AlternativeMobileNo: "",
        WhatsAppNo: "",
        Remark: "Hello",
      }
      const response = await axios.post(
        'https://nirman.maksoftbox.com/MDocBoxAPI/MdocAddEnquiryORTeleCalling',
        payload,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log(response.data)
        if(response.data.code == '200'){
          alert('Form submitted!');
        }else{
          alert(response.data.status);
        }
    } catch (error) {
      console.log(error)
      alert('Error submitting form');
    }
    // Add form validation or submission logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', marginTop: '80px' }}>
      <div className='formdiv'>
        <div className='formsideone'>
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
              <button type="submit" style={{ cursor: 'pointer' }}>KNOW MORE</button>
            </div>
            <div className='formterms'>
              <p style={{ marginBottom: '10px' }}>*T&C Apply</p>
              <p>*Your privacy is very important to us;</p>
              <p>we will never share your information</p>
            </div>
          </form>
        </div>
        <div className='formsidetwo'>
          <img style={{ width: '100%' }} src={formimg} alt='Form banner' />
        </div>
      </div>
    </div>
  )
}

export default Form