import React from 'react'

function Loading() {
  return (
    <div class="loading_outer">
    <div class="loader-svg">
      <div class="top">
        <svg width="75px" height="75px" viewBox="-4 -1 38 28">
          <polygon fill="transparent"
                   stroke = "#fff"
                   stroke-width="2"
                   points="15,0 30,30 0,30">
          </polygon>
        </svg>
      </div>
      <div class="mid">
        <svg width="150px" height="150px" viewBox="-4 -1 38 28">
          <polygon fill="transparent"
                   stroke = "#fff"
                   stroke-width="2"
                   points="15,0 30,30 0,30">
          </polygon>
        </svg>
      </div>
      <div class="bot">
        <svg width="75px" height="75px" viewBox="-4 -1 38 28">
          <polygon fill="transparent"
                   stroke = "#fff"
                   stroke-width="2"
                   points="15,0 30,30 0,30">
          </polygon>
        </svg>
      </div>
    </div>
    <div class="loader-text">Loading<span>...</span></div>
  </div>
  )
}

export default Loading
