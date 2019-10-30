import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalSyles from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalSyles />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
