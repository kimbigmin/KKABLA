import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import ArticleCounts from './ArticleCounts';

const mock = {
  title: '코로나 바이러스 백신에 대해...',
  date: '2022-02-02',
  creator: 'a*****',
  like: 3,
  comment: 8,
  contents:
    '기존에 아스트라제네카(AZ)·화이자·모더나·얀센 백신으로 기본 접종을 마쳤지만, 타 백신에 대한 접종 금기·연기 등 의학적 사유가 있을 때는 노바백스 백신으로 3차 접종을 받을 수 있다.교차접종을 받을 경우에는 의사의 판단이 필요하다. 대상자는 의료기관의 예비명단에 이름을 올려 당일 예약을 마치면 접종받을 수 있다.권근용 추진단 예방접종관리팀장은 "노바백스 외 백신으로 1·2차 접종을 받은 후에 아나필락시스나 혈소판 감소성 혈전증, 모세혈관 누출 증후군 등의 중대한 이상반응이 나타났을 때는 (동일 백신) 접종 금기 대상"이라며 "심근염·심낭염 등으로 접종이 연기된 경우에도 예진 의사의 소견에 따라 노바백스 백신으로 3차 접종을 받을 수 있다"고 답했다.향후 노바백스 백신으로 기초 접종을 마친 접종자는 2차접종 완료 3개월 후 동일 백신으로 3차 접종을 받을 수 있다. 이 경우에는 사전예약과 당일접종이 모두 가능하다. 또한, 3차 접종은 mRNA(메신저리보핵산) 계열 백신으로 한다는 당국의 접종 원칙에 따라 특별한 사유 없이도 화이자·모더나 백신을 접종받을 수도 있다. 이때는 당일접종만 가능하다.',
};

function Article() {
  return (
    <ArticleContainer>
      <Box
        sx={{
          width: '100%',
          minHeight: 300,
          padding: '1rem 1rem 1rem 1rem',
          backgroundColor: 'white',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ArticleTitle
          title={mock.title}
          date={mock.date}
          author={mock.creator}
        />
        <ArticleContent content={mock.contents} />
        <ArticleCounts likeCount={mock.like} commentCount={mock.comment} />
      </Box>
    </ArticleContainer>
  );
}

const ArticleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Article;
