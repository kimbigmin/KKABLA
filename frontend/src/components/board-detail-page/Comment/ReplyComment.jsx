import React from 'react';
import ReplyInput from './CommentInput';
import Comment from './Comment';
import styled from 'styled-components';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const dummyreply = [
  {
    _id: '6204f272c98edae374cc7ee0',
    nickName: '950b46',
    contents: 'test123123',
    like: [],
    report: [],
    comments: [],
    createdAt: '2022-02-10T11:09:38.153Z',
    updatedAt: '2022-02-10T11:09:38.153Z',
    __v: 0,
  },
  {
    _id: '6204f274c98edae374cc7ee4',
    nickName: '950b46',
    contents: 'test123123',
    like: [],
    report: [],
    comments: [],
    createdAt: '2022-02-10T11:09:40.816Z',
    updatedAt: '2022-02-10T11:09:40.816Z',
    __v: 0,
  },
  {
    _id: '6208b3c1f875530f470f4296',
    nickName: 'b71567',
    like: [],
    report: [],
    comments: [],
    createdAt: '2022-02-13T07:31:13.109Z',
    updatedAt: '2022-02-13T07:31:13.109Z',
    __v: 0,
  },
  {
    _id: '6208b475cb905886a53e127d',
    nickName: 'b71567',
    like: [],
    report: [],
    comments: [],
    createdAt: '2022-02-13T07:34:13.973Z',
    updatedAt: '2022-02-13T07:34:13.973Z',
    __v: 0,
  },
];

function ReplyComment({ replyComments }) {
  return (
    <>
      <ReplyInput type={'reply'} />
      {/* 실제 API로 개발하실때는 dummyreply => replyComments로 수정하시면 됩니다. */}

      {dummyreply.map((comment) => {
        console.log(comment);
        return (
          <ReplyContainer>
            <IconContainer>
              <SubdirectoryArrowRightIcon />
            </IconContainer>
            <CommentContainer>
              <Comment comment={comment} isReplyComment={true} />
            </CommentContainer>
          </ReplyContainer>
        );
      })}
    </>
  );
}

const ReplyContainer = styled.div`
  margin-left: 10px;
  display: flex;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 40%;
  transform: translateX(-40%);
`;

const CommentContainer = styled.div`
  margin-left: 1rem;
  width: 94%;
`;

export default ReplyComment;
