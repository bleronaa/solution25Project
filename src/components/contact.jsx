import React,{useState}from 'react'
import green from './greenpurple.avif'
import { RiMapPinLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { BsPhone } from "react-icons/bs";
import './contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <div className='Content' style={{   display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <div className="wrapper" style={{ backgroundColor: 'white' }}>
    <div className="data">
      <h1 className='contact'>Contact us</h1>
      <div className="map">
        <RiMapPinLine className='mapicon' /><p>123 Prishtina St., Bremen</p>
      </div>
      <div className="fax">
        <FaPhone className='faxicon'/><p>123 456 7890</p>
      </div>
      <div className="mobile">
        <BsPhone  className='phoneicon'/><p>123 456 7891</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <input className='input'
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input className='input'
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <textarea className='inputMessage'
            id="message"
            name="message"
            placeholder='Your message here'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='subButton'>Send</button>
      </form>
    </div>
    <div className="img">
            <img src={green} alt="img" className='image'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
