import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//style
import { Box } from '@mui/material';
import styled from 'styled-components';

function AdminPageReportComment({ content }) {
  const onFindBoardHandler = async (boardType, boardId) => {
    const data = await axios
      .get(`/board/${boardType}/${boardId}`)
      .then((res) => res.data);
    console.log(data);
    return data;
  };

  onFindBoardHandler();
  return (
    <>
      {content
        ? Children.toArray(
            content.map((el) => (
              <ReportBox>
                <Link
                  to={`/board/${el.boardType}/${el.boardId}`}
                  state={{
                    dataFromBoard: onFindBoardHandler(el.boardType, el.boardId),
                  }}
                >
                  <GridDetailBox>
                    <GridTitle>{el.contents}</GridTitle>
                    <GridBoard>
                      {el.boardType === 'free' ? '자유게시판' : '개발게시판'}
                    </GridBoard>
                  </GridDetailBox>
                </Link>
              </ReportBox>
            )),
          )
        : '글을 작성해주세요'}
    </>
  );
}

//post에 따라서 정해짐. null 이면 글을 작성해주세요 출력

export default AdminPageReportComment;

const GridDetailBox = styled(Box)`
  background-color: #f7f7f7;
  border-radius: 10px;
  margin: 10px 0;
`;

const GridTitle = styled(Box)`
  padding: 10px;
  font-weight: 700;
`;

const GridBoard = styled(Box)`
  padding: 10px;
  font-size: 12px;
  line-height: 12px;
`;

const ReportBox = styled(Box)`
  display: flex;
  justify-content: end;

  a {
    width: 100%;
  }
`;

const ReportButtonBox = styled(Box)`
  display: flex;

  button {
    margin: auto;
    margin-left: 5px;
  }
`;
