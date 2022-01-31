import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewPage from './components/review-page/ReviewPage';
import DetailPage from './components/review-page/DetailPage';
import MainContents from './components/mainPage/MainContents';
import BoardForm from './components/Board/CommonBoard/BoardForm';
import Login from './components/login-page/Login';
import { useEffect, useState } from 'react';
import Logout from './components/logout-page/Logout';
import axios from 'axios';

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
          <Route path="/" element={<MainContents />}></Route>
          <Route
            path="/review"
            element={<ReviewPage isLogin={isLogin} />}
          ></Route>
          <Route path="/review-detail" element={<DetailPage />}></Route>
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
