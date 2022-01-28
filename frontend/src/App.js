import './App.css';
import Header from './components/common/header/Header';
import { Container } from '@mui/material';
import HotPostsBoard from './components/HotPostsBoard/HotPostsBoard';
function App() {
  return (
    <Container>
      <Header />
      <HotPostsBoard></HotPostsBoard>
    </Container>
  );
}

export default App;
