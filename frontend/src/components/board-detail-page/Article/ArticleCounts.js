import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ArticleCounts({
  commentCount,
  size,
  onClickLike,
  onClickComment,
  data,
  isClick,
  likeCount,
  isLogin,
  isAdmin,
}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onHandleDelete = async () => {
    if (!alert('정말로 삭제하시겠습니까?')) {
      await axios
        .delete(`/post/board/${data._id}`, {
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
        `/post/board/report/${data._id}`,
        { nickName: isLogin },
        {
          withCredentials: true,
        },
      );
    }
  };

  const onAdminDelete = async () => {
    if (!alert('정말로 삭제하시겠습니까?')) {
      await axios
        .delete(`/post/board/${data._id}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            return navigate(`/admin`);
          }
        });
    }
  };

  const onAdminRoleBack = async () => {
    if (!alert('정말로 복구하시겠습니까?')) {
      await axios
        .patch(
          `/post/board/blindFalse/${data._id}`,
          {
            report: [],
            isBlind: false,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          if (res.status === 200) {
            return navigate(`/admin`);
          }
        });
    }
  };

  return (
    <>
      <ArticleCountsContainer>
        <Item>
          {isClick ? (
            <ThumbUpIcon
              fontSize={size}
              color="primary"
              onClick={onClickLike}
            />
          ) : (
            <ThumbUpOffAltIcon
              fontSize={size}
              color="primary"
              onClick={onClickLike}
            ></ThumbUpOffAltIcon>
          )}
          <p>{likeCount}</p>
        </Item>
        <Item style={{ marginLeft: '0.5rem' }} onClick={onClickComment}>
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
              disableScrollLock={true}
              sx={{ position: 'absolute' }}
            >
              {isAdmin ? (
                <>
                  <MenuItem onClick={onAdminRoleBack}>복구하기</MenuItem>
                  <MenuItem onClick={onAdminDelete}>삭제하기</MenuItem>
                </>
              ) : data.creator === isLogin ? (
                <div>
                  <Link
                    to={`/board/${data.type}/update/${data._id}`}
                    state={{ data: data }}
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <MenuItem>수정하기</MenuItem>
                  </Link>

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
  flex-direction: row;

  p {
    margin-left: 0.2rem;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const More = styled.div`
  right: 200px;
  margin-left: auto;
  cursor: pointer;
`;
