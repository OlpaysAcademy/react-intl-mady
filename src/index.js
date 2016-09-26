import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData, defineMessages } from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';

import App from './App';
import './index.css';

addLocaleData(esLocaleData);

console.log(esLocaleData)

const messages = defineMessages({
  es: {
    welcome: '{GENDER, select, male{Bienvenido} female{Bienvenida} other{Bienvenidos} } {NAME}'
  }
});

// Try changing language to en
const language = 'es';

ReactDOM.render(
  <IntlProvider key={language} locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
