import React from 'react'
import GitHub from '../../../resources/github.png'
import Projector from '../../../resources/projector.png'

function ProjectCard() {
  return (
    <>
        <div className="card">
            <img className='preview' src="" alt="" />
            <h3 className='title'>Project Title</h3>
            <p className="description">Description</p>
            <div className="stack">
              <p>React.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
            <div className="demo-link">
              <a href="#" target="_blank"><img src={GitHub} alt="" /></a>
              <a href="#" target="_blank"><img src={Projector} alt="" /></a>
            </div>
          </div>
    </>
  )
}

export default ProjectCard