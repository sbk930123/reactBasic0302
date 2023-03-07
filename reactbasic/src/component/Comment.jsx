import React from 'react'
import './Comment.css'

function Comment(props) {
  return (
    <div className='wrapper'>
      <div className='img-box'>
        <img src="./pepe.jpg" alt="" />
      </div>

      <div className='content-container'>
        <span className='name-text'>{props.name}</span>
        <span className='comment-text'>{props.comment}</span>  
      </div>
    </div>
  )
}
export default Comment
