import Routes from './routes';
import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'
import './assets/css/notificacao.css'

import './assets/css/novoTweet.css'
// import './index.css';


// Coisas do React Loadable (Componentes Assincronos)
import Loadable from 'react-loadable';

// Configuração do Redux
import { Provider } from 'react-redux'
import configuraStore from './store'
const store = configuraStore(window.__PRELOADED_STATE__)

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
}