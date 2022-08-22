import React from 'react'
import { FaIdCard, FaDownload, FaUser, FaSchool, FaEnvelope, FaMapMarkerAlt, FaLanguage, FaClock } from 'react-icons/fa'
import github from '../../resources/github.png'
import linkedin from '../../resources/linkedin.png'

function About() {
  return (
    <section id='about' className="about">
        <div className="heading">
            <FaIdCard  className='icon' />
            <h1>About <span>Me</span></h1>
        </div>

        <div className="content">
            <div className="info">
                <h3>Personal Info</h3>

                <div className="basic-info">
                    <div className="row">
                        <p><FaUser className='icon'/>Pete, Chun Yip To</p>
                        <p><FaSchool className='icon'/>Newcastle University</p>
                        <p><FaEnvelope className='icon'/>peteto1213@gmail.com</p>

                    </div>

                    <div className="row">
                        <p><FaLanguage className='icon'/>Cantonese, English, Mandarin, Japanese</p>
                        <p><FaClock className='icon'/>2 years</p>
                        <p><FaMapMarkerAlt className='icon'/>Hong Kong (remote avaiable)</p>
                        
                    </div>
                </div>

                <button>Download CV <FaDownload className='icon' /></button>
            </div>

            <div className="media">
                <h3>Profile</h3>
                <div className="media-icons">
                    <a href="https://github.com/peteto1213" target="_blank"><img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/pete-to-301b29234/" target="_blank"><img src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>

    </section>

    
  )
}

export default About
