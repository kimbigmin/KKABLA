import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import styled from 'styled-components';
import axios from 'axios';

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
  console.log(likeList);
  console.log(isLogin);

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

  return (
    <ArticleCountsContainer>
      <Item>
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
    </ArticleCountsContainer>
  );
}

const ArticleCountsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
