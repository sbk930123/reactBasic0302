import React from 'react';
import './Comment.css';
import {useState} from 'react';

const styles = {
  color: {
    color: 'dodgerblue'
  },

  letter: {
    letterSpacing: '2px' 
  },

  btn: {
    width: '30px',
    height: '30px',
    marginLeft: '20px'
  }
}



function Comment(props) {

  return (
    <div className="wrapper">
      <div className="img-box">
        <img src="./pepe.jpg" alt="" />
      </div>

      <div className="content-container">
        <span style={styles.letter} className="name-text">
          {props.name}
        </span>
        <span className="comment-text">{props.comment}</span>
      </div>
      <button style={styles.btn} onClick={props.onDelete}>
        X
      </button>
    </div>
  );
}

export default Comment
