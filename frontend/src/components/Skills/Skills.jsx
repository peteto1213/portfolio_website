import React from 'react'
import { FaTools } from 'react-icons/fa'
import SingleImage from './SingleImage'
import image from './image'

function Skills() {

    const { react, html, css, bootstrap, scss, springboot, node, mongodb, mysql } = image

  return (
    <section id='skills' className="skills">
        <div className="heading">
            <FaTools className='icon' />
            <h1>My Skills</h1>
        </div>

        <div className="content">
            <div className="row">
                <h3>Frontend</h3>

                <div className="images">

                    <SingleImage image={react} title="React.js" />
                    <SingleImage image={html} title="HTML5" />
                    <SingleImage image={css} title="CSS3" />
                    <SingleImage image={bootstrap} title="Bootstrap" />
                    <SingleImage image={scss} title="Sass" />

                </div>
            </div>

            <div className="row">
                <h3>Backend</h3>

                <div className="images">

                    <SingleImage image={springboot} title="Spring boot" />
                    <SingleImage image={node} title="Node.js" />

                </div>
            </div>

            <div className="row">
                <h3>DBMS</h3>

                <div className="images">
                
                    <SingleImage image={mysql} title="MySQL" />    
                    <SingleImage image={mongodb} title="MongoDB" />    

                </div>
            </div>


        </div>
    </section>
  )
}

export default Skills
