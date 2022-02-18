import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Progress from 'components/MyPage/Progress';

function AuthPage() {
  const [word, setWord] = useState('');
  const [two, setTwo] = useState(false);

  return (
    <Container>
      <Progress setWord={setWord} word={word} two={two} setTwo={setTwo} />
    </Container>
  );
}

export default AuthPage;
