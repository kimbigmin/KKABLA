import './App.css';
import Header from './components/common/header/Header';
import Post from './components/post-page/Post';
import PostReview from './components/post-page/PostReview';
import { Container } from '@mui/material';
import { useState } from 'react';

function App() {
  // state가 리뷰라면 리뷰게시판으로 이동, 리뷰게시판이 아닌 경우
  // state가 개발 / 자유 입력으로 개발게시판과 자유게시판으로 나뉨.
  const [isReview, setIsReview] = useState(true);
  const [postName, setPostName] = useState('자유');

  return (
    <Container>
      <Header />
      {isReview ? <PostReview /> : <Post name={postName} />}
    </Container>
  );
}

export default App;
