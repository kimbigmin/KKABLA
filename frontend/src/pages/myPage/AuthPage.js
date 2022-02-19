import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Progress from 'components/MyPage/Progress';

function AuthPage() {
  const [word, setWord] = useState(null);
  const [two, setTwo] = useState(null);

  return (
    <Container>
      <Progress setWord={setWord} setTwo={setTwo} word={word} two={two} />
    </Container>
  );
}

export default AuthPage;
