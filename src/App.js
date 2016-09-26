import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import logo from './logo.svg';
import './App.css';

const welcomeMessage = `{GENDER, select, male{Welcome} female{Welcome} other{Welcome} } {NAME}`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <FormattedMessage id="welcome" defaultMessage={welcomeMessage} values={{ NAME: 'Mostro', GENDER: 'male' }} />
          </div>
          <div>
            <FormattedMessage id="welcome" defaultMessage={welcomeMessage} values={{ NAME: 'Mostra', GENDER: 'female' }} />
          </div>
          <div>
            <FormattedMessage id="welcome" defaultMessage={welcomeMessage} values={{ NAME: 'Mrrltrs', GENDER: 'thing' }} />
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
