import React from 'react'
import { FaCommentDots, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section id='contact' className='contact'>
        <div className="heading">
            <FaCommentDots className='icon' />
            <h1>Contact <span>Me</span></h1>
        </div>

        <div className="contact-container">
          <div className="contact-card">
            <FaEnvelope className='icon' />
            <h3>peteto1213@gmail.com</h3>
          </div>

          <div className="contact-card">
            <FaPhoneSquareAlt className='icon' />
            <h3>+852 64875640</h3>
          </div>
        </div>

        <div className="form-container">
          <form>
            <input 
              type="text" 
              placeholder='Your Name'
            />
            <input 
              type="text" 
              placeholder='Your Email'
            />
            <input 
              type="text" 
              placeholder='Your Message'
            />
            <button>Send Message</button>
          </form>
        </div>

    </section>
  )
}

export default Contact