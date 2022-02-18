import styled from 'styled-components';
import React, { useState, Children } from 'react';
import { Divider, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminPageReport({ content }) {
  return (
    <>
      {content
        ? Children.toArray(
            content.map((el) => (
              <ReportBox>
                <Link
                  to={`/board/${el.type}/${el._id}`}
                  state={{ dataFromBoard: el }}
                >
                  <GridDetailBox>
                    <GridTitle>{el.title}</GridTitle>
                    <GridBoard>
                      {el.type === 'free' ? '자유게시판' : '개발게시판'}
                    </GridBoard>
                  </GridDetailBox>
                </Link>
                <ReportButtonBox>
                  <Button variant="outlined">복구</Button>
                  <Button variant="outlined">삭제</Button>
                </ReportButtonBox>
              </ReportBox>
            )),
          )
        : '글을 작성해주세요'}
    </>
  );
}

//post에 따라서 정해짐. null 이면 글을 작성해주세요 출력

export default AdminPageReport;

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
