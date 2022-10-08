import React from 'react'
import { FaVideo } from 'react-icons/fa'
import ProjectCard from './components/ProjectCard'

function Projects() {
  return (
    <section id='projects' className='projects'>
        <div className="heading">
            <FaVideo className='icon' />
            <h1>Projects <span>Demo</span></h1>
        </div>

        <div className="card-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

    </section>
  )
}

export default Projects