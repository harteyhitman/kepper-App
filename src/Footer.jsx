import React from 'react'

function Footer() {
    const date = new Date()
    const currentTime = date.getFullYear()

  return (
    <div className="copyright">
        <p>copyright &#169; {currentTime}</p>
    </div>
  )
}

export default Footer