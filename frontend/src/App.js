import './App.css';
import Header from './components/common/header/Header';
import Post from './components/post-page/Post';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Header />
      <Post />
    </Container>
  );
}

export default App;
