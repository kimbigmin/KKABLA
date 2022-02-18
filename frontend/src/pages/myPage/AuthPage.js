import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Progress from 'components/MyPage/Progress';

function AuthPage() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);

  return (
    <Container>
      <Progress setOne={setOne} one={one} two={two} setTwo={setTwo} />
    </Container>
  );
}

export default AuthPage;
