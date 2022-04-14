import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './assets/scss/main.scss';
import i18n from './i18n';

i18n
  .init({
    fallbackLng: 'en',
    debug: false,
    ns: ['common'],
    returnObjects: true,
    preload: ['en'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then(() => {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
