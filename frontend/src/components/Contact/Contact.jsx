import React from 'react'
import { useState } from 'react'
import { FaCommentDots, FaEnvelope, FaPhoneSquareAlt, FaClone } from 'react-icons/fa'

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleFormChange = (e) => {
    const {name, value} = e.target

    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value
      }
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(form);
  }

  const [email, setEmail] = useState("peteto1213@gmail.com")
  const [phone, setPhone] = useState("+852 64875640")

  const copyEmail = () => {
    setEmail("peteto1213@gmail.com")
    navigator.clipboard.writeText(email)
    alert("email copied")
  }

  const copyPhone = () => {
    setPhone("+852 64875640")
    navigator.clipboard.writeText(phone)
    alert("phone number copied")
  }

  return (
    <section id='contact' className='contact'>
        <div className="heading">
            <FaCommentDots className='icon' />
            <h1>Contact <span>Me</span></h1>
        </div>

        <div className="contact-container">
          <div 
            className="contact-card"
            onClick={copyEmail}
          >
            <FaEnvelope className='icon' />
            <h3>{email}</h3>
            <FaClone className='small-icon'/>
          </div>

          <div 
            className="contact-card"
            onClick={copyPhone}
          >
            <FaPhoneSquareAlt className='icon' />
            <h3>{phone}</h3>
            <FaClone className='small-icon'/>
          </div>
        </div>

        <div className="form-container">
          <form>
            <input 
              type="text" 
              placeholder='Your Name'
              name='name'
              value={form.name}
              onChange={handleFormChange}
            />
            <input 
              type="email" 
              placeholder='Your Email'
              name='email'
              value={form.email}
              onChange={handleFormChange}
            />
            <textarea 
              placeholder='Your Message'
              cols="30" 
              rows="10"
              name='message'
              value={form.message}
              onChange={handleFormChange}
            >
            </textarea>
            <button onClick={handleFormSubmit}>Send Message</button>
          </form>
        </div>

    </section>
  )
}

export default Contact