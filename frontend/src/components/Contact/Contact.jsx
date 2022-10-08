import React from 'react'
import { FaCommentDots } from 'react-icons/fa'

function Contact() {
  return (
    <section id='contact' className='contact'>
        <div className="heading">
            <FaCommentDots className='icon' />
            <h1>Contact <span>Me</span></h1>
        </div>
    </section>
  )
}

export default Contact