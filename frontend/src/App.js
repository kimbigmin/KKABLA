import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import ReviewPage from './components/review-page/ReviewPage';
import ReviewDetailPage from './components/review-page/DetailPage';
import BoardDetailPage from './pages/BoardDetailPage';

import MainContents from './pages/mainPage/MainContents';
import BoardForm from './components/Board/CommonBoard/BoardForm';

import Login from './components/login-page/Login';
import Logout from './components/logout-page/Logout';

function App() {
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    const getMe = async () => {
      await axios
        .get('http://localhost:5000/auth/user', {
          withCredentials: true,
        })
        .then((res) => setisLogin(res.data));
    };
    getMe();
    console.log(isLogin);
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Container>
        <Header isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<MainContents />} />
          <Route path="/review" element={<ReviewPage isLogin={isLogin} />} />
          <Route path="/review-detail" element={<ReviewDetailPage />} />
          <Route path="/board-detail" element={<BoardDetailPage />} />
          <Route path="/login" element={<Login setisLogin={setisLogin} />} />
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />
          <Route path="/board" element={<BoardForm />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
