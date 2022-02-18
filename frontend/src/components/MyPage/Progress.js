import React, { useEffect, useRef, useState } from 'react';
import AuthPageTitle from './AuthPageTitle';
import AuthPageUpload from './AuthPageUpload';
import './authPage.css';
import './progress.css';
import AuthPageText from './AuthPageText';

function Progress({ word, setWord, two, setTwo }) {
  const [active, setActive] = useState(1);
  const [disable1, setDisable1] = useState(true);
  const [disable2, setDisable2] = useState(false);

  const progress = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);
  const circles1 = useRef(null);
  const circles2 = useRef(null);
  const circles3 = useRef(null);
  const circles = 3;

  const card = useRef(null);

  const onNextHandler = () => {
    setActive(active + 1);

    card.current.style.left = card.current.offsetLeft - 400 + 'px';

    if (active > circles) {
      setActive(circles);
    }
  };

  const onPrevHandler = () => {
    setActive(active - 1);

    card.current.style.left = card.current.offsetLeft + 400 + 'px';

    if (active < 1) {
      setActive(1);
    }
  };

  useEffect(() => {
    update();
    console.log(word);
  }, [active, two, word]);

  const update = () => {
    [circles1.current, circles2.current, circles3.current].forEach(
      (circle, idx) => {
        if (idx < active) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      },
    );

    progress.current.style.width = ((active - 1) / (circles - 1)) * 100 + '%';

    setDisable1(false);
    setDisable2(false);

    if (active === 1) {
      setDisable1(true);
    } else if (
      active === circles ||
      (active === 2 && !two) ||
      (active === 1 && !word)
    ) {
      setDisable2(true);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="progress-container">
          <div ref={progress} className="progress" id="progress"></div>
          <div ref={circles1} className="circle active"></div>
          <div ref={circles2} className="circle"></div>
          <div ref={circles3} className="circle"></div>
        </div>
      </div>
      <div className="slider">
        <div className="wrapper">
          <div ref={card} className="card ">
            <AuthPageTitle word={word} setWord={setWord} />
            <AuthPageUpload word={word} two={two} setTwo={setTwo} />
            <AuthPageText />
          </div>
        </div>
      </div>
      <div className="btns">
        <button
          ref={prev}
          onClick={onPrevHandler}
          className="btn"
          id="preBtn"
          disabled={disable1}
        >
          이전
        </button>
        <button
          ref={next}
          onClick={onNextHandler}
          className="btn"
          id="nextBtn"
          disabled={disable2}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Progress;
