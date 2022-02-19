import React, { useState, useEffect, useRef } from 'react';
import './authPage.css';
import axios from 'axios';

function AuthPageTitle({ word, setWord }) {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(word);
  }, [word]);

  const onSearchHandler = async (e) => {
    const value = e.target.value;
    setInput(value);
    setWord(value);

    await axios
      .get(`/search/bootcamp/${value}`)
      .then((res) => setResult(res.data));
  };

  return (
    <div className="one">
      <div className="text">수료한 부트캠프 이름을 입력해주세요</div>
      <div className="input">
        <input
          value={input}
          onChange={(e) => {
            onSearchHandler(e);
          }}
          placeholder="예시) 엘리스 SW"
        />
      </div>
      <div className="auto">
        {result.length > 0 &&
          result.map((el) => (
            <div
              className="result"
              onClick={() => {
                setInput(el.name);
                setWord(el.name);
              }}
            >
              <div className="name">{el.name}</div>
              <img className="img" src={el.image} alt={el.name} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default AuthPageTitle;
