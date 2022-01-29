import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewPage from './components/review-page/ReviewPage';
import Detail from './components/review-page/Detail';
import MainContents from './pages/mainPage/MainContents';
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route path="/review-detail" element={<Detail />}></Route>
        </Routes>
        <MainContents/>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
