import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalSyles from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalSyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
