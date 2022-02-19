import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalFonts from './fonts/fonts';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/scrollToTop/scrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <GlobalFonts/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root'),
);