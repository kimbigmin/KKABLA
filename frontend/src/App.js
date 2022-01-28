import './App.css';
import Header from './components/common/header/Header';
import { Container } from '@mui/material';
import Footer from './components/common/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewPage from './components/review-page/ReviewPage';
import DetailPage from './components/review-page/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route path="/review-detail" element={<DetailPage />}></Route>
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
