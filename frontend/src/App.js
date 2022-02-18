import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ReviewPage from './pages/ReviewPage';
import ReviewDetailPage from './pages/DetailPage';
import BoardDetailPage from './pages/BoardDetailPage';
import MainContents from './components/mainPage/MainContents';
import FreeBoardPage from './pages/FreeBoardPage';
import Login from './components/login-page/Login';
import Logout from './components/logout-page/Logout';
import MyPage from './pages/myPage/MyPage';
import DevelopBoardPage from './pages/DevelopBoardPage';
import AuthPage from './pages/myPage/AuthPage';
import PostPage from './pages/postPage/PostPage';
import SearchResult from './components/SearchResult/SearchResult';
import AdminPage from './pages/myPage/AdminPage';
import PostReviewPage from './pages/postPage/PostReviewPage';
import MyPageMoreBoards from './pages/myPage/MyPageMoreBoards';
import MyPageMoreReviews from './pages/myPage/MyPageMoreReviews';
import MyPageMoreLikes from './pages/myPage/MyPageMoreLikes';
import UpdatePage from 'pages/postPage/UpdatePage';
import AdminPageMoreComment from 'pages/myPage/AdminPageMoreComment';

function App() {
  const [isLogin, setisLogin] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const getData = async () => {
    await axios
      .get('http://elice-kdt-sw-1st-team10.elicecoding.com/mypage/', {
        withCredentials: true,
      })
      .then((res) => setIsAdmin(res.data.isAdmin));
  };

  useEffect(() => {
    const getMe = async () => {
      await axios
        .get('http://elice-kdt-sw-1st-team10.elicecoding.com/auth/user', {
          withCredentials: true,
        })
        .then((res) => {
          setisLogin(res.data);
          localStorage.setItem('nickName', JSON.stringify(res.data));
        });
    };
    getData();
    getMe();
  }, []);

  if (isLogin === null) {
    localStorage.removeItem('nickName');
  }

  return (
    <BrowserRouter>
      <Reset />
      <Header isLogin={isLogin} isAdmin={isAdmin} />
      <ContentContainer>
        <Routes>
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />
          {/* <Route path="/board" element={<BoardForm />} /> */}
          <Route path="/" element={<MainContents isLogin={isLogin} />}></Route>
          <Route
            path="/board/review"
            element={<ReviewPage isLogin={isLogin} />}
          ></Route>
          <Route
            path="/board/review/detail/:id"
            element={<ReviewDetailPage isLogin={isLogin} />}
          />
          <Route
            path="/board/free"
            element={<FreeBoardPage isLogin={isLogin} />}
          />
          <Route
            path="/board/free/:id"
            element={<BoardDetailPage isLogin={isLogin} />}
          />
          <Route
            path="/board/free/update/:id"
            element={<UpdatePage isLogin={isLogin} />}
          />
          <Route
            path="/board/develop"
            element={<DevelopBoardPage isLogin={isLogin} />}
          />
          <Route
            path="/board/develop/:id"
            element={<BoardDetailPage isLogin={isLogin} />}
          />
          <Route
            path="/board/develop/update/:id"
            element={<UpdatePage isLogin={isLogin} />}
          />

          <Route
            path="/login"
            element={<Login setisLogin={setisLogin} isLogin={isLogin} />}
          />
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />

          <Route path="/mypage" element={<MyPage isLogin={isLogin} />}></Route>
          <Route
            path="/mypage/auth"
            element={<AuthPage isLogin={isLogin} />}
          ></Route>
          <Route
            path="/mypage/boards"
            element={<MyPageMoreBoards isLogin={isLogin} />}
          ></Route>
          <Route
            path="/mypage/reviews"
            element={<MyPageMoreReviews isLogin={isLogin} />}
          ></Route>
          <Route
            path="/mypage/likes"
            element={<MyPageMoreLikes isLogin={isLogin} />}
          ></Route>
          {isLogin && (
            <>
              <Route
                path="/post/:board"
                element={<PostPage isLogin={isLogin} />}
              ></Route>
            </>
          )}
          {isLogin && (
            <>
              <Route
                path="/post/review/:id"
                element={<PostReviewPage isLogin={isLogin} />}
              ></Route>
            </>
          )}
          <Route
            path="/search/"
            element={<SearchResult isLogin={isLogin} />}
          ></Route>
          <Route
            path="/admin"
            element={<AdminPage isAdmin={isAdmin} />}
          ></Route>
          <Route
            path="/admin/board"
            element={<AdminPageMoreComment isAdmin={isAdmin} />}
          ></Route>
          <Route
            path="/admin/comment"
            element={<AdminPageMoreComment isAdmin={isAdmin} />}
          ></Route>
        </Routes>
      </ContentContainer>
      <Footer />
    </BrowserRouter>
  );
}

const ContentContainer = styled.div`
  font-family: 'Pretendard-Regular';
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  min-height: 80vh;
  background-color: rgba(244, 244, 244, 0.5);
`;

export default App;
