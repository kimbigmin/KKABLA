import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setisLogin }) {
  const navigater = useNavigate();

  useEffect(() => {
    const logout = async () => {
      await axios
        .delete('http://localhost:5000/auth/logout', {
          withCredentials: true,
        })
        .then((res) => setisLogin(res.data))
        .then(() => navigater('/'))
        .then(() => localStorage.removeItem('nickName'))
        .catch((err) => console.log(err));
    };
    logout();
  }, []);

  return <div>로그아웃</div>;
}

export default Logout;
