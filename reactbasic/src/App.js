/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [user, setUser] = useState(['김승빈', '인호성', '김상현', '여상현']);
  let [count, setCount] = useState([0, 0, 0]);
  let [bgc, setBgc] = useState('white');
  let num = [1, 2, 3, 4, 5];
  let [title, setTitle] = useState(['DW아카데미 503호', 'DW아카데미 501호', 'DW아카데미 502호',]);
  let eng = ['yejin', 'lee', 'lala']

  let newUser = [...user];
  console.log(newUser);
  console.log(user);
  console.log([...user]);
  console.log(eng);


  return (
    <div className="App" style={{ backgroundColor: bgc }}>
      <h1> Hello, {user[0]} ! </h1>
      <p>This is a React App</p>


      {
        eng.map(function(leng) {
          return leng.toUpperCase();
        })
      }




      {
        title.map(function (tnum, i) {
          return (
            <div className="list" key={i}>
              <h4>{tnum}</h4>
              <span onClick={() => {
                let newCount = [...count];
                newCount[i] += 1;
                setCount(newCount);
              }}>👺 + {count[i]}</span><br />
              <p>안녕하세요. 저는 {user[i]} 입니다.</p>
            </div>
          )
        })
      }

      <button onClick={() => {
        let sortedTitle = [...title].sort();
        setTitle(sortedTitle);
      }}>클릭
      </button>

      <button onClick={() => {
        setBgc(bgc === 'white' ? 'aquamarine' : 'white');
      }}>배경 변경</button>

      <button onClick={() => {
        let nextUser = [...user];
        let prevUser = nextUser.shift();
        nextUser.push(prevUser);
        setUser(nextUser);
      }}>이름 변경</button> 

    </div>
  );
}

export default App;
