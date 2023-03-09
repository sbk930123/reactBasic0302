/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import State from './component/State';
import {useState} from 'react';
import Box from './component/Box';
import Comment from './component/Comment';
import CommentList from './component/CommentList'
import back from './pepe.jpg'

function App() {
  return (
    <div className='App'>
      <CommentList/>
      {/* <div className='back'></div> */}
      {/* <div style={{backgroundImage : `url(${back})`, height : '500px'}}></div>
      <img src= {process.env.PUBLIC_URL + 'pepe.jpg'} alt="" /> */}

      <div style={{backgroundImage : 'url(https://i1.sndcdn.com/avatars-bjBRDNsPhAy1uXhU-2LstrA-t500x500.jpg)', height : '500px'}}></div>

      <img src={back} alt="" />
    </div>
  )
}

export default App;