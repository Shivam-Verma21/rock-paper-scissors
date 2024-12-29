import React from 'react'
import "../App.css"

const Message = ({onClose,prop}) => {
  return (
    <div className='message'>
      <div className="message-content">
        <h2>{prop}</h2>
        <button className="close-btn" onClick={onClose}>
            Play again
        </button>
      </div>
    </div>
  )
}

export default Message
