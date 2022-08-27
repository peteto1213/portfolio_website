import React from 'react'

function SingleImage(props) {
  return (
    <>
        <div className="single-image">
            <img src={props?.image} alt="" />
            <p>{props?.title}</p>
        </div>
    </>
  )
}

export default SingleImage
