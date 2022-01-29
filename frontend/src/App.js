import './App.css';
import Header from './components/common/header/Header';
import { Container } from '@mui/material';
import Footer from './components/common/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login-page/Login';
import { useEffect, useState } from 'react';
import Logout from './components/logout-page/Logout';
import axios from 'axios';

function App() {
  const [isLogin, setisLogin] = useState(null);

  useEffect(() => {
    const getMe = async () => {
      await axios
        .get('http://localhost:5000/auth/user', {
          withCredentials: true,
        })
        .then((res) => setisLogin(res.data));
      console.log(isLogin);
    };

    getMe();
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Header isLogin={isLogin} />
        <Routes>
          <Route path="/login" element={<Login setisLogin={setisLogin} />} />
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
