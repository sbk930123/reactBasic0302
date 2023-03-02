/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let user = 'SBK';
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  // 변수에 들어있는 데이터를 html에 넣기
  // JSX 중괄호 문법 사용

  let [title, setTitle] = useState(['DW아카데미 503호', 'DW아카데미 501호', 'DW아카데미 502호',]);

  return (
    <div className="App">
      <h1> Hello, {user} ! </h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count1}</p>
        <button onClick={() => {
          setCount1(count1 + 1)
        }}>Click Me</button>
      </div>

      <div className="list">
        <h4>{title[0]}</h4>
        <span onClick={() => {
          setCount2(count2 + 1)
        }}>👺 + {count2}</span><br/>
        <p>안녕하세요. 저는 김승빈입니다.</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <span onClick={() => {
          setCount2(count2 + 1)
        }}>👺 + {count2}</span><br/>
        <p>안녕하세요. 저는 김승빈입니다.</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <span onClick={() => {
          setCount2(count2 + 1)
        }}>👺 + {count2}</span><br/>
        <p>안녕하세요. 저는 김승빈입니다.</p>
      </div>

      <button onClick={() => {
        let sortedTitle = [...title].sort();
        setTitle(sortedTitle);
      }}>클릭
      </button>

    </div>
  );
}

export default App;
