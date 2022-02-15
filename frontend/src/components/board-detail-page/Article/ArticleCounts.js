import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ArticleCounts({
  likeList,
  commentCount,
  size,
  onClick,
  isReplyComment,
  setLikeList,
  data,
  isLogin,
}) {
  const navigate = useNavigate();
  // const handleArticleLike = async () => {
  //   if (likeList.includes(isLogin)) {
  //     await setLikeList((current) => {
  //       const newArr = [...current].filter((item) => {
  //         return item !== isLogin;
  //       });
  //       return newArr;
  //     });
  //   } else {
  //     await setLikeList((current) => {
  //       const newArr = [...current, isLogin];
  //       return newArr;
  //     });
  //   }

  //   await axios
  //     .post(`http://localhost:5000/post/board/like/${data._id}`, {
  //       withCredentials: true,
  //     })
  //     .then(console.log);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onHandleEdite = async () => {
    await axios.patch(`http://localhost:5000/post/board/${data._id}`);
  };
  const onHandleDelete = async () => {
    if (!alert('정말로 삭제하시겠습니까?')) {
      await axios
        .delete(`http://localhost:5000/post/board/${data._id}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log('123');
            return navigate(`/board/${data.type}`);
          }
        });
    }
  };
  const onHandleReport = async () => {
    if (!alert('정말로 신고하시겠습니까?')) {
      await axios.post(
        `http://localhost:5000/post/board/report/${data._id}`,
        { nickName: isLogin },
        {
          withCredentials: true,
        },
      );
    }
  };

  return (
    <>
      <ArticleCountsContainer>
        <Item style={{ marginLeft: '0.5rem', cursor: 'pointer' }}>
          <ThumbUpIcon
            fontSize={size}
            color="primary"
            // onClick={handleArticleLike}
          />
          <p>{likeList ? likeList.length : 0}</p>
        </Item>
        <Item style={{ marginLeft: '0.5rem' }} onClick={onClick}>
          <ChatBubbleOutlineIcon fontSize={size} color="action" />
          <p>{commentCount ? commentCount.length : 0}</p>
        </Item>
        {isLogin && (
          <More>
            <MoreHorizIcon onClick={handleClick} />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {data.creator === isLogin ? (
                <div>
                  <MenuItem onClick={onHandleEdite}>수정하기</MenuItem>
                  <MenuItem onClick={onHandleDelete} style={{ color: 'red' }}>
                    삭제하기
                  </MenuItem>
                </div>
              ) : (
                <MenuItem onClick={onHandleReport}>신고하기</MenuItem>
              )}
            </Menu>
          </More>
        )}
      </ArticleCountsContainer>
    </>
  );
}

const ArticleCountsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const More = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
