/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// https://github.com/yahoo/react-intl/issues/620#issuecomment-242897276
// Possible fixes:
// * upgrade to react native 0.35.0-rc.0 <-- I tried it and it did not work
// * use custom script to fix dependencies https://github.com/este/este/blob/master/gulp/native-fix.js <-- It is overkill to setup gulp in this project
// * add react-native by hand to each package.json <-- This is what I did. It does not scale at all because it does not get persisted across projects :D
import intl from 'intl';
import { IntlProvider, defineMessages, FormattedMessage } from 'react-intl';

// TODO: Check out scripts to extract translatable strings in este.js https://github.com/este/este/blob/master/gulp/messages-extract.js
// TODO: Checkout mady editor http://guigrpa.github.io/mady/
// TODO: Checkout extract functionality in mady

const messages = defineMessages({
  es: {
    welcome: '{GENDER, select, male{Bienvenido} female{Bienvenida} other{Bienvenidos} } {NAME}'
  }
});

// Try changing language to en
const language = 'es';

const welcomeMessage = `{GENDER, select, male{Welcome} female{Welcome} other{Welcome} } {NAME}`;

class reactIntlMady extends Component {
  render() {
    return (
      <IntlProvider key={language} locale={language} messages={messages[language]}>
        <View style={styles.container}>
          <FormattedMessage id="welcome" defaultMessage={welcomeMessage} values={{ NAME: 'Mostro', GENDER: 'male' }}>
            {message => <Text style={styles.welcome}>{message}</Text>}
          </FormattedMessage>
          <FormattedMessage id="welcome" defaultMessage={welcomeMessage} values={{ NAME: 'Mostra', GENDER: 'female' }}>
            {message => <Text style={styles.welcome}>{message}</Text>}
          </FormattedMessage>
          <FormattedMessage id="welcome" defaultMessage={welcomeMessage} values={{ NAME: 'Mrrltrs', GENDER: 'thing' }}>
            {message => <Text style={styles.welcome}>{message}</Text>}
          </FormattedMessage>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload, {'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </IntlProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactIntlMady', () => reactIntlMady);
