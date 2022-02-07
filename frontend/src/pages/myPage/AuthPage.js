import React from 'react';
import { Container } from '@mui/material';

import AuthPageTitle from '../../components/MyPage/AuthPageTitle';
import AuthPageUpload from '../../components/MyPage/AuthPageUpload';

function AuthPage() {
  return (
    <Container>
      <AuthPageTitle />
      <AuthPageUpload />
    </Container>
  );
}

export default AuthPage;
